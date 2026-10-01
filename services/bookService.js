import * as bookModel from '../models/bookmodel.js';

export const fetchAllBooks = async() => {
    const books = await bookModel.fetchAllBooks();
    return books;
}

