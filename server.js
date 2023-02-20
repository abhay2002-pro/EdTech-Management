import app from "./app.js";
import { database } from "./config/database.js";
import ErrorMiddleware from "./middlewares/Error.js";

database
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

const PORT = process.env.PORT || 2905;
app.listen(PORT, () => {
  console.log(`Server is working on port: ${PORT}`);
});

// adding routes
import role from "./routes/roleRoutes.js";
import user from "./routes/userRoutes.js";
import school from "./routes/schoolRoutes.js";

app.use("/", role);
app.use("/", user);
app.use("/", school);

export default app;

app.use(ErrorMiddleware);
