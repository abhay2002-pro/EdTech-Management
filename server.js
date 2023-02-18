import app from "./app.js";

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is working on port: ${PORT}`);
});

export default app;