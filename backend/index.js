// backend index.js
import express from "express";
import path from "path";
import bodyParser from "body-parser";

import webpack from "webpack";
import webpackMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpackConfig from "../webpack.config.dev";

import user from "./routes/user";
import auth from "./routes/auth";
import homes from "./routes/homes";
import manage from "./routes/manage";
import trips from "./routes/trips";

let app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "src")));

app.use("/api/auth", auth);
app.use("/api/homes", homes);
app.use("/api/user", user);
app.use("/api/manage", manage);
app.use("/api/trips", trips);

const compiler = webpack(webpackConfig);
app.use(webpackHotMiddleware(compiler));
app.use(
    webpackMiddleware(compiler, {
        hot: true,
        publicPath: webpackConfig.output.publicPath,
        noInfo: true
    })
);

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"));
});
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Running on ${port}`));
