import { Schema, model } from 'mongoose';

const conquest = new Schema({
  userNum: {
    type: Number,
    required: true,
    unique: true
  },
  nickname: {
    type: String,
    required: true,
    unique: true
  },
  mmr: {
    type: Number,
    default: 0
  },
  games: {
    type: Number,
    default: 0
  },
  elo: {
    type: String,
    default: 'No Elo'
  },
  region: {
    type: String,
    default: 'N/D'
  }
})

export default model('conquest', conquest);
