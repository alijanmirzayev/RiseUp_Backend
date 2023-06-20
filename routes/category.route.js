import { Router } from 'express';
import { Category } from '../controllers/category.controller.js';

const r = Router();

r.get('/', Category.getAll);
r.get('/:id', Category.getById);
r.post('/', Category.add);

export default r