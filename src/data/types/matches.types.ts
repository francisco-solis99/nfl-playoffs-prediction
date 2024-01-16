export type Match = {
  id: number,
  team1: string,
  team2: string,
  winner: null | string
}

export type PredictionPick = {
  round: string,
  matchId: number,
  pickSelected: string,
}

export type RoundType = "Wild Card" | "Divisional" | "Conference" | "Super Bowl"
export type RoundTypeSlug = "wild-card" | "divisional" | "conference" | "super-bowl"

export type Round = {
  round: RoundType,
  slug: RoundTypeSlug
  matches: {
    "AFC": Match[]
    "NFC": Match[]
  }
}

export type MatchesByRound = Round[]