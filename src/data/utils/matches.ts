import type { MatchesByRound, Round, RoundType } from "@/data/types/matches.types"
import allMatches from '@/data/matches.json'

const matchesData = allMatches as MatchesByRound

export function getMatchesByRound({ roundName, conference }: { roundName: RoundType, conference: "AFC" | "NFC" }) {
  const matchesByRound: Round | undefined = matchesData.find(item => item.round === roundName)

  if (!matchesByRound) {
    throw new Error('Your round name has to be in the RoundType options')
  }
  const matchesByConference = matchesByRound.matches[conference]
  return matchesByConference
}