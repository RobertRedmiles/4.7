const express = require('express');
const cors = require("cors");

const categoryRoutes = require("./routes/categoryRoutes");
const itemRoutes = require("./routes/itemRoutes");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use("/categories", categoryRoutes);
app.use("/items", itemRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});