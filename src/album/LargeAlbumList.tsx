import React from "react";
import { LargeAlbum } from "./LargeAlbum";
import { Box, Layer, List, Spinner, Text } from "grommet";
import { assign, createMachine, EventObject } from "xstate";
import { getAlbums } from "./getAlbums";
import { useMachine } from "@xstate/react";
import { Album, getId } from "./Album";
import { AlbumDetails } from "./AlbumDetails";
import { Route, Routes, useNavigate } from "react-router-dom";

interface AlbumListContext {
  albums: Album[];
}

interface AlbumListEvent extends EventObject {
  type: "LOAD";
}

type AlbumListStates =
  | { value: "idle" | "loading" | "rejected"; context: null }
  | { value: "resolved"; context: AlbumListContext };

const albumListMachine = createMachine<
  AlbumListContext,
  AlbumListEvent,
  AlbumListStates
>({
  id: "album_loader",
  initial: "loading",
  context: {
    albums: [],
  },
  states: {
    loading: {
      invoke: {
        id: "loadAlbums",
        src: getAlbums,
        onDone: {
          target: "resolved",
          actions: assign({
            albums: (_, event) => event.data,
          }),
        },
        onError: "rejected",
      },
    },
    resolved: {
      type: "final",
    },
    rejected: {
      on: {
        LOAD: "loading",
      },
    },
  },
});

export const LargeAlbumList = () => {
  const [state] = useMachine(albumListMachine);
  const goTo = useNavigate();

  if (state.matches("loading") || state.matches("idle")) {
    return (
      <Box fill>
        <Spinner size="large" />
      </Box>
    );
  }
  if (state.matches("rejected")) {
    return (
      <Box fill align="center" justify="center">
        <Text size="large">Failed to load. Please try again later.</Text>
      </Box>
    );
  }

  return (
    <>
      <List
        data={state.context.albums}
        margin={"none"}
        pad={"none"}
        border={false}
        style={{ overflowX: "hidden" }}
        children={(album) => (
          <LargeAlbum
            key={album.title}
            album={album}
            onClick={() => goTo({ pathname: `/music/${getId(album)}` })}
          />
        )}
      />
      <Routes>
        <Route path={"music"}>
          {state.context.albums.map((album) => (
            <Route
              path={getId(album)}
              key={getId(album)}
              element={
                <Layer
                  onEsc={() => goTo(-1)}
                  onClickOutside={() => goTo(-1)}
                  background={"#00000000"}
                  responsive={false}
                >
                  <AlbumDetails album={album} onClose={() => goTo(-1)} />
                </Layer>
              }
            />
          ))}
        </Route>
      </Routes>
    </>
  );
};
