const express = require("express");
const app = express();
app.use(express.json());

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

const items = []; // Array to act as our database

// READ operations
app.get("/items", (req, res) => {
  res.json(items);
});

app.get("/items/:id", (req, res) => {
  const item = items.find((it) => it.id === parseInt(req.params.id));
  if (item) {
    res.json(item);
  } else {
    res.status(404).send("Item not found");
  }
});

// CREATE operation
app.post("/items", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).send("Please provide id and name");
  }
  const newItem = { id: items.length + 1, name };
  items.push(newItem);
  res.status(201).send(newItem);
});

// UPDATE operation
app.put("/items/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const item = items.find((item) => item.id === parseInt(id));
  if (item) {
    item.name = name;
    res.send("Item updated");
  } else {
    res.status(404).send("Item not found");
  }
});

// DELETE operation
app.delete("/items/:id", (req, res) => {
  const { id } = req.params;
  const index = items.findIndex((item) => item.id === parseInt(id));
  if (index > -1) {
    items.splice(index, 1);
    res.send("Item deleted");
  } else {
    res.status(404).send("Item not found");
  }
});
