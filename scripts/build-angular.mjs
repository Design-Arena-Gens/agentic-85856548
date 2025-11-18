import { build, context } from "esbuild";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const rootDir = fileURLToPath(new URL("..", import.meta.url));
const watch = process.argv.includes("--watch");
const outfile = path.join(rootDir, "public", "angular-widget.js");

const buildOptions = {
  entryPoints: [path.join(rootDir, "angular", "main.ts")],
  outfile,
  bundle: true,
  format: "iife",
  minify: !watch,
  splitting: false,
  sourcemap: watch ? "inline" : false,
  target: ["es2018"],
  logLevel: "info",
  platform: "browser",
  mainFields: ["module", "jsnext:main", "browser", "main"],
  tsconfig: path.join(rootDir, "angular", "tsconfig.json"),
  define: {
    "process.env.NODE_ENV": JSON.stringify(
      watch ? "development" : "production"
    )
  }
};

async function ensureDir() {
  const dir = path.dirname(outfile);
  await mkdir(dir, { recursive: true });
}

async function run() {
  await ensureDir();
  if (watch) {
    const ctx = await context(buildOptions);
    await ctx.watch();
    console.log("[angular] watching for changes...");
  } else {
    await build(buildOptions);
    console.log("[angular] bundle created");
  }
}

run().catch((error) => {
  console.error("[angular] build failed", error);
  process.exitCode = 1;
});
