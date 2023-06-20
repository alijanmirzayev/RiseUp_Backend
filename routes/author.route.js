import { Router } from 'express';
import { Author } from '../controllers/author.controller.js';
import { authMiddleWare } from '../middleware/authMiddleware.js';

const r = Router();

r.get('/', Author.getAll);
r.get('/:id', Author.getById);
r.post('/', authMiddleWare, Author.add);
r.put('/:id', authMiddleWare, Author.updateById)
r.delete('/:id', authMiddleWare, Author.deleteById)

export default r