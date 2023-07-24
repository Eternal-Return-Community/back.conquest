import axios, { AxiosInstance } from 'axios';
import { add } from '../database/operations/add';

export default class EternalReturn {

  private readonly _instance: AxiosInstance;
  private readonly _nickname: string;
  private readonly _region: string;

  constructor(nickname: string, region: string) {
    this._instance = axios.create({
      baseURL: 'https://open-api.bser.io/v1',
      method: 'GET',
      headers: {
        'x-api-key': process.env.TOKEN,
        'Content-Type': 'application/json'
      }
    })
    this._nickname = nickname;
    this._region = region;
  }

  async findUserID(): Promise<number> {
    return this._instance(`/user/nickname?query=${this._nickname}`)
      .then(response => response.data.user.userNum)
      .catch(e => console.error(e));
  };

  async findRanked(): Promise<any> {
    const userId = await this.findUserID();

    try {
      const { data } = await this._instance(`/user/stats/${userId}/18`);
      const squad = data.userStats?.find((squad: any) => squad.matchingMode === 3);

      const options = {
        userNum: squad?.userNum ?? userId,
        nickname: squad?.nickname ?? this._nickname,
        mmr: squad?.mmr ?? 0,
        games: squad?.totalGames ?? 0,
        region: this._region
      };

      return await add(options);

    } catch (e) {
      console.error(e)
    };

  }
}