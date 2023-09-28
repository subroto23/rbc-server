const app = require("./app");
const mongodbDatabaseConnection = require("./config/db");
const { serverPort } = require("./secret");

app.listen(serverPort, async () => {
  console.log(`Server is running at http://localhost:${serverPort}`);

  //Mongo db Connection Function Call
  await mongodbDatabaseConnection();
});
