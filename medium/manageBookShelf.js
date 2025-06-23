function manageBookShelf(bookShelf, action, book) {
  if (action === "add") bookShelf.push(book);
  if (action === "remove") bookShelf = bookShelf.filter((bk) => bk !== book);

  return bookShelf;
}

console.log(
  manageBookShelf(
    ["Harry Potter", "Lord of The Rings", "Game of Thrones"],
    "add",
    "Hunger Games"
  )
);
console.log(
  manageBookShelf(
    ["Harry Potter", "Lord of The Rings", "Game of Thrones"],
    "remove",
    "Lord of The Rings"
  )
);

// Write a function to manage a bookshelf.

// Instructions
// Given an array of books bookShelf, perform a specific action on the array and return an updated array.

// If the action is "add", add a book to the shelf.
// If the action is "remove", remove a book from the shelf.
// If the action is "list", list all books on the shelf.
// For example, given bookShelf = ["Game of Thrones"], action = "add", and book = "Hunger Games", adding book to bookShelf results in ["Game of Thrones", "Hunger Games"].

// Example
// For this input

// bookShelf[] = ["Harry Potter", "Lord of The Rings", "Game of Thrones"]
// action  = "add"
// book = "Hunger Games"

// the result should be:
// ["Harry Potter", "Lord of The Rings", "Game of Thrones", "Hunger Games"]

// Reason: The action is "add" and the book is "Hunger Games". So, "Hunger Games" is added to the array.
