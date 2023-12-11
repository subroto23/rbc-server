const app = require("./src/app");
const mongodbDatabaseConnection = require("./src/config/db");
const { serverPort } = require("./src/secret");

app.get("/", (req, res) => {
  res.send("Welcome to RBC Server Side");
});

app.listen(serverPort, async () => {
  console.log(`Server is running at http://localhost:${serverPort}`);

  //Mongo db Connection Function Call
  await mongodbDatabaseConnection();
});
