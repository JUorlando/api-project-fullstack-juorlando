import app from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    app.listen(process.env.PORT, async () => {
      console.log("Database connected.");
      console.log("Server is Runing!");
    });
  })
  .catch((err) => {
    console.log(err);
  });
