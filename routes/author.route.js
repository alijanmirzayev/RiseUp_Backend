import { Router } from 'express';
import { Author } from '../controllers/author.controller.js';

const r = Router();

r.get('/', Author.getAll);
r.get('/:id', Author.getById);
r.post('/', Author.add);
r.put('/:id', Author.updateById)
r.delete('/', Author.deleteById)

export default r