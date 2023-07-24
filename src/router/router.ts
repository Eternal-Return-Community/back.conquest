import { Router } from 'express';
const router = Router();

import index from './routes/index';
import add from './routes/add';
import list from './routes/list';

router.use('/', index);
router.use('/add', add)
router.use('/list', list);

export default router;