import { Router } from 'express';
import list from '../../database/operations/list';
const router = Router();

router.get("/", async (req, res) => {
  return res.json({
    result: await list()
  });
});

export default router;