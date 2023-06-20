import { Router } from 'express';
import { Category } from '../controllers/category.controller.js';

const r = Router();

r.get('/', Category.getAll);
r.get('/:id', Category.getById);
r.post('/', Category.add);
r.put('/:id', Category.updateById)
r.delete('/:id', Category.deleteById)

export default r