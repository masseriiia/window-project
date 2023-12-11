import { defineConfig } from "vite";

export default defineConfig({
    publicPath: "/dist",
    resolve: {
        extensions: [".js", ".tsx", ".ts", ".json", ".svg", ".png", ".jpg", ".jpeg"],
    },
});