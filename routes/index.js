module.exports = (app) => {

    const portal = require("./portal.routes");
    const instructor = require("./instructor.routes"); 
    const chairperson = require("./chairperson.routes");
    const odi = require("./odi.routes");

    app.use("/", portal);
    app.use("/instructor", instructor); 
    app.use("/chairperson", chairperson);
    app.use("/odi", odi);
}
