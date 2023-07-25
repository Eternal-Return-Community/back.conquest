import conquest from '../schemas/conquest';
import user from '../../interface/user';
import { calcElo } from '../../utils/calcElo';

export const add = async (options: user): Promise<any> => {
  const { userNum, nickname, mmr, games, region } = options;

  try {
    const updatedUser = await conquest.findOneAndUpdate(
      { userNum: userNum, nickname: nickname },
      { mmr: mmr, games: games, elo: calcElo(mmr), region: region },
      { upsert: true, new: true, projection: { _id: 0, __v: 0 } }
    );

      console.log(nickname, mmr)

    console.log('|-> User added to the database.');
    return updatedUser;
  } catch (error) {
    console.error('Error in add function:', error);
  }
};
