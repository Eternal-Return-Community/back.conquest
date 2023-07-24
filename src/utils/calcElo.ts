export const calcElo = (mmr: number) => {
  let elo: string;

  if (mmr > 0 && mmr < 1000) {
    elo = "Iron";
  } else if (mmr >= 1000 && mmr < 1999) {
    elo = "Bronze";
  } else if (mmr >= 2000 && mmr < 2999) {
    elo = "Silver";
  } else if (mmr >= 3000 && mmr < 3999) {
    elo = "Gold";
  } else if (mmr >= 4000 && mmr < 4999) {
    elo = "Platinum";
  } else if (mmr >= 5000 && mmr < 5999) {
    elo = "Diamond";
  } else if (mmr >= 6000 && mmr < 6999) {
    elo = "Titan";
  } else if (mmr >= 7000 && mmr < 7999) {
    elo = "Mytiril";
  } else if (mmr >= 8000) {
    elo = "Immortal";
  } else {
    elo = "No Elo";
  }
  return elo;
}