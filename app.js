const express = require("express");
const app = express();
const port = process.env.port || 3000;
const path = require("path");
app.listen(port, () => console.log(`Listening on port ${port}.`));
app.use(express.static("static"));
app.get("/materalize.js", (req, res ) => {
    res.sendFile(path.resolve("node_modules/materialize-css/dist/js/materialize.min.js"));
});
app.get("/materalize.css", (req, res ) => {
    res.sendFile(path.resolve("node_modules/materialize-css/dist/css/materialize.min.css"));
});