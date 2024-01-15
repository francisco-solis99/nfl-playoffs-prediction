export type Team = {
  id: any,
  seed: number,
  info: {
    name: string,
    city: string,
    logo: string,
    colorHex: string,
  }
}

export type ConferenceTeams = {
  conference: 'NFC' | 'ACF',
  teams: Team[] | []
}

export type PlayoffTeams = ConferenceTeams[]