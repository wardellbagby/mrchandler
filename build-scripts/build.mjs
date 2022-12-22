import path from "path";
import { copy } from "esbuild-plugin-copy";
import esbuild from "esbuild";
import url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
export const workingDir = path.resolve(__dirname, "..");

export const buildConfig = {
  absWorkingDir: workingDir,
  bundle: true,
  entryPoints: ["src/index.tsx"],
  outdir: "dist",
  loader: {
    ".woff2": "file",
    ".woff": "file",
    ".png": "file",
    ".html": "file",
  },
  plugins: [
    copy({
      resolveFrom: workingDir,
      assets: {
        from: ["./src/index.html", "./src/404.html"],
        to: ["./dist"],
      },
    }),
  ],
};

await esbuild.build(buildConfig);
