// backend index.js
import express from "express";
import path from "path";
import bodyParser from "body-parser";

import webpack from "webpack";
import webpackMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpackConfig from "../webpack.config.dev";

import auth from "./routes/auth";

let app = express();
app.use(bodyParser.json());

app.use("/api/auth", auth);

const compiler = webpack(webpackConfig);
app.use(webpackHotMiddleware(compiler));
app.use(
    webpackMiddleware(compiler, {
        hot: true,
        publicPath: webpackConfig.output.publicPath,
        noProfile: true
    })
);

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"));
});

app.listen(5000, () => console.log("Running on localhost:5000"));
