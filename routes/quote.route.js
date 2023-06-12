import { Router } from 'express';
import { Quote } from '../controllers/quote.controller.js';

const r = Router();

r.post('/', Quote.add)
r.get('', Quote.getAll)
r.get('/:categoryId', Quote.getAllQoutesByCategoryId)
r.put('/:id', Quote.editById)
r.delete('/:id', Quote.deleteById)


export default r