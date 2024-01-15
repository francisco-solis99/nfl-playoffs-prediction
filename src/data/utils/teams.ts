import type { PlayoffTeams } from "@/data/types/teams.types"
import allTeams from '@/data/teams.json'

const teamsInfo = allTeams as PlayoffTeams


export function getTeamById({ id, conference }: { id: string, conference: "NFC" | "AFC" }) {
  const { teams: conferenceTeams = [] } = teamsInfo.find(item => item.conference == conference) ?? {}
  const teamFound = conferenceTeams.find(team => team.id === id)
  return teamFound
}

export async function getTeamLogo({teamIdName, conference}: {teamIdName: string, conference: 'AFC' | 'NFC'}) {
  let TeamLogo = null;
  try {
    const module = await import(`../../components/teams/${teamIdName}.astro`);
    TeamLogo = module.default;
  } catch (error) {
    const conferenceModuleIcon = await import(`../../components/icons/${conference}.astro`);
    TeamLogo = conferenceModuleIcon.default;
  }
  return TeamLogo
}