import { Router } from 'express';
import EternalReturn from '../../services/EternalReturn';
const router = Router();

router.post("/:nickname/:region", async (req, res) => {

  const { nickname, region } = req.params;
  new EternalReturn(nickname, region.toUpperCase()).findRanked();

  return res.json({
    result: 'Success!'
  });
});

export default router;;