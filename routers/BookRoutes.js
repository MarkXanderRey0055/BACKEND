import * as BookController from '../controllers/BookController.js';
import express from "express";
import checkToken from "../middleware/authenticationhandler.js";

const bookRoutes = express.Router();

bookRoutes.use(checkToken);
bookRoutes.get('/all', BookController.fetchBooks);
bookRoutes.post('/new', BookController.createBook);
bookRoutes.put('/edit/:bookId', BookController.editBook);
bookRoutes.delete('/delete/:bookId', BookController.deleteBook);
// bookRoutes.post('new', BookController.createBoook);

export default bookRoutes;