import * as bookModel from '../models/bookMode.js';

export const fetchAllBooks = async() =>{
    const books = await bookModel.fetchAllBooks();
    return books;
}

