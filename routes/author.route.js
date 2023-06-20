import { Router } from 'express';
import { Author } from '../controllers/author.controller';

const r = Router();

r.get('/', Author.getAll);
r.get('/:id', Author.getById);
r.post('/', Author.add);

export default r