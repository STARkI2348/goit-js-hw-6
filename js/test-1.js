const book = {
	updateTitle(newTitle) {
		console.log("this in showThis: ", this);
	}
};

const update = book.updateTitle;

update("Lord Of The Rings");


"use strict";

const books = {
	updateAuthor(newAuthor) {
		console.log(`this in showThis: ${newAuthor} `, this);
	}
};

books.updateAuthor("Jacob");