import type { MatchesByRound, Round, RoundTypeSlug } from "@/data/types/matches.types"
import allMatches from '@/data/matches.json'

const matchesData = allMatches as MatchesByRound

export function getMatchesByRoundConference({ roundName, conference }: { roundName: RoundTypeSlug, conference: "AFC" | "NFC" }) {
  const matchesByRound: Round | undefined = getRoundInfo({ roundName })

  if (!matchesByRound) {
    throw new Error(`Your round name has to be in the RoundTypeSlug options cause ${roundName}`)
  }
  const matchesByConference = matchesByRound.matches[conference]
  return matchesByConference
}

export function getMatchById({ roundName, id }: { roundName: RoundTypeSlug, id: number }) {
  const infoByRound: Round | undefined = getRoundInfo({ roundName })
  if (!infoByRound) {
    throw new Error('Your round name has to be in the RoundTypeSlug options')
  }

  const allMatches = Object.entries(infoByRound.matches)

  for(const [conference, matches] of allMatches) {

    const matchFound = matches.find(match => match.id === id)
    if(matchFound) {
      return {
        match: matchFound,
        conference
      }
    }
  }

  return null;
}

export function getRoundInfo({ roundName }: { roundName: RoundTypeSlug }) {
  return matchesData.find(item => item.slug === roundName)
}

export function getTotalMatchesByRound({ roundName }: { roundName: RoundTypeSlug }){
  const matchesByRound: Round | undefined = getRoundInfo({ roundName })

  if (!matchesByRound) {
    throw new Error(`Your round name has to be in the RoundTypeSlug options cause ${roundName}`)
  }

  const numMatches = Object.values(matchesByRound.matches).flat().length
  return numMatches;
}