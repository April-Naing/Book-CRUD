const dotenv = require("dotenv");
const fs = require("fs");
const mongoose = require("mongoose");
// const Book = require('../model/BooksModel');
const Book = require("../model/booksModel");

dotenv.config();

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
  console.log("DB is connecting in import dev");
});

const books = JSON.parse(fs.readFileSync("data/books.json", "utf-8"));

const importData = async () => {
  try {
    await Book.create(books);
    console.log("Data import success.");
  } catch (err) {
    console.log(err);
  }

  process.exit();
};

const deleteData = async () => {
  try {
    await Book.deleteMany();
    console.log("Deleting data success.");
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === "--import") {
  // node data/import-dev-data.js --import
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}

console.log(books);
