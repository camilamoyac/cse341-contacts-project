const swaggerAutogen = require("swagger-autogen")();

const doc = {
    info: {
        title: "Contacts API",
        description: "An API to create , update, delete and get contacts from a MongoDB database."
    },
    host: "localhost:3000", //change when deploying to Render
    schemes: ["http", "https"]
}

const outputFile = "./swagger.json";
const endpointFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointFiles, doc);