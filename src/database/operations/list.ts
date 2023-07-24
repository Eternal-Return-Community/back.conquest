import conquest from "../schemas/conquest";
import EternalReturn from "../../services/EternalReturn";

let table: string[] = [];
let lastUpdateTime: number = 0;
const updateInterval: number = 10 * 60 * 1000;

async function fetchDataAndSort(): Promise<string[]> {
  const data = await conquest.find({}).select({ _id: 0, __v: 0 });
  const updated = await Promise.all(
    data.map(async (player: any) => {
      const eternalReturn = new EternalReturn(player.nickname, player.region);
      return eternalReturn.findRanked();
    })
  );

  updated.sort((a: any, b: any) => b.mmr - a.mmr);
  return updated;
}

async function updateData(): Promise<void> {
  table = await fetchDataAndSort();
  lastUpdateTime = Date.now();
  console.log("|-> Data updated and sorted.");
}

export default async function list(): Promise<string[]> {
  if (lastUpdateTime === 0 || Date.now() - lastUpdateTime > updateInterval) {
    await updateData();
  }

  return table;
}
