import { buildConfig, workingDir } from "./build.mjs";
import esbuild from "esbuild";
import path from "path";

const { host, port, wait } = await esbuild.serve(
  {
    servedir: path.resolve(workingDir, "dist"),
    host: "localhost",
    port: 8080,
  },
  { ...buildConfig }
);

console.log(`Serving on http://${host}:${port}/`);

await wait;
