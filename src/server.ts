import app from "./app";
import { database } from "./config/database";

database
  .authenticate()
  .then(() => {
    console.log("Database connected....");
  })
  .catch((err: String) => {
    console.log("Error: " + err);
  });

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
//Config file to convert ts to js
