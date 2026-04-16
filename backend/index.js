const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://ayaabduljawad:mongopassword@cluster0.44npmwz.mongodb.net/toDoApp",
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Simple Schema
const ToDoSchema = new mongoose.Schema({
  title: String,
  completed: Boolean,
});

const ToDo = mongoose.model("ToDo", ToDoSchema);

// Hardcoded Data (insert once)
const seedData = async () => {
  const count = await ToDo.countDocuments();
  if (count === 0) {
    await ToDo.insertMany([
      {
        title: "Finish MEAN stack backend API",
        completed: false,
      },
      {
        title: "Create Angular frontend layout",
        completed: true,
      },
      {
        title: "Connect frontend with Express API",
        completed: false,
      },
      {
        title: "Test MongoDB connection",
        completed: true,
      },
      {
        title: "Deploy project to GitHub",
        completed: false,
      },
    ]);
    console.log("Data seeded");
  }
};
seedData();

// API Route
app.get("/api/todos", async (req, res) => {
  const todos = await ToDo.find();
  res.json(todos);
});

// Run server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
