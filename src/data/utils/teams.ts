import type { PlayoffTeams } from "@/data/types/teams.types"
import allTeams from '@/data/teams.json'

const teamsInfo = allTeams as PlayoffTeams


export function getTeamById({ id, conference }: { id: string, conference: "NFC" | "AFC" }) {
  const { teams: conferenceTeams = [] } = teamsInfo.find(item => item.conference == conference) ?? {}
  const teamFound = conferenceTeams.find(team => team.id === id)
  return teamFound
}