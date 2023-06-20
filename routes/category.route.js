import { Router } from 'express';
import { Category } from '../controllers/category.controller.js';
import { authMiddleWare } from '../middleware/authMiddleware.js';

const r = Router();

r.get('/', Category.getAll);
r.get('/:id', Category.getById);
r.post('/', authMiddleWare, Category.add);
r.put('/:id', authMiddleWare, Category.updateById)
r.delete('/:id', authMiddleWare, Category.deleteById)

export default r