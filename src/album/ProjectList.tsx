import React from "react";
import { ProjectListItem } from "./ProjectListItem";
import { Box, Layer, List, Spinner, Text } from "grommet";
import { assign, createMachine, EventObject } from "xstate";
import { getProjects } from "./getProjects";
import { useMachine } from "@xstate/react";
import { getId, Project } from "./Project";
import { ProjectDetails } from "./ProjectDetails";
import { Route, Routes, useNavigate } from "react-router-dom";

interface AlbumListContext {
  albums: Project[];
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
        src: getProjects,
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

export const ProjectList = () => {
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
        pad={"medium"}
        border={false}
        children={(album, index) => (
          <ProjectListItem
            isLatest={index === 0}
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
                  <ProjectDetails album={album} onClose={() => goTo(-1)} />
                </Layer>
              }
            />
          ))}
        </Route>
      </Routes>
    </>
  );
};
