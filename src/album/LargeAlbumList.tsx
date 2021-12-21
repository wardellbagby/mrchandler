import { useState } from "react";
import { LargeAlbum } from "./LargeAlbum";
import { Box, Layer, List, Spinner, Text } from "grommet";
import { assign, createMachine, EventObject } from "xstate";
import { getAlbums } from "./getAlbums";
import { useMachine } from "@xstate/react";
import { Album } from "./Album";
import React from "react";
import { AlbumDetails } from "./AlbumDetails";

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
    albums: null,
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
  const [albumDetails, setAlbumDetails] = useState<Album>(null);

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
            onClick={() => setAlbumDetails(album)}
          />
        )}
      />
      {albumDetails && (
        <Layer
          onEsc={() => setAlbumDetails(null)}
          onClickOutside={() => setAlbumDetails(null)}
          background={"#00000000"}
          responsive={false}
        >
          <AlbumDetails
            album={albumDetails}
            onClose={() => setAlbumDetails(null)}
          />
        </Layer>
      )}
    </>
  );
};
