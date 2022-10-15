module.exports = (app) => {

    const portal = require("./portal.routes");

    app.use("/", portal);
}
