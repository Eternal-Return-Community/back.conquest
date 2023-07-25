export const calcElo = (mmr: number): string => {
  let elo = eloFormatted(mmr);
  let division: number;
  let rp: number;

  division = 4 - Math.floor((mmr % 1000) / 250);
  rp = (mmr % 250);

  if (elo === "Titan" || elo === "Mytiril" || elo === "Immortal") {
    return `${elo} <br>RP: ${rp = (mmr % 6000)}`;
  }

  return `${elo} ${division} <br>RP: ${rp}`;

};

const eloFormatted = (mmr: number): string => {
  let elo: string;

  if (mmr > 0 && mmr < 1000) {
    elo = "Iron";
  } else if (mmr >= 1000 && mmr < 2000) {
    elo = "Bronze";
  } else if (mmr >= 2000 && mmr < 3000) {
    elo = "Silver";
  } else if (mmr >= 3000 && mmr < 4000) {
    elo = "Gold";
  } else if (mmr >= 4000 && mmr < 5000) {
    elo = "Platinum";
  } else if (mmr >= 5000 && mmr < 6000) {
    elo = "Diamond";
  } else if (mmr >= 6000 && mmr < 7000) {
    elo = "Titan";
  } else if (mmr >= 7000 && mmr < 8000) {
    elo = "Mytiril";
  } else if (mmr >= 8000) {
    elo = "Immortal";
  } else {
    elo = "No Elo";
  };

  return elo;
}
