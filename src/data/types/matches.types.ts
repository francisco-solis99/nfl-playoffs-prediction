export type Match = {
  id: number,
  team1: string,
  team2: string,
  winner: null | string
}

export type RoundType = "Wild Card" | "Divisional" | "Conference" | "Super Bowl"

export type Round = {
  round: RoundType,
  matches: {
    "AFC": Match[]
    "NFC": Match[]
  }
}

export type MatchesByRound = Round[]