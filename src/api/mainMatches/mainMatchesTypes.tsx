export interface MatchesTableTypes {
  total: number
  page: number
  pages: number
  data: MatchDataTypes[]
}

export interface MatchDataTypes {
  id: number
  round: number
  date: string
  home_team: string
  away_team: string
  home_score: number
  away_score: number
  created_at: string
  updated_at: string
  home_team_object: TeamObjectTypes
  away_team_object: TeamObjectTypes
}

export interface TeamObjectTypes {
  id: number
  name: string
  image: string
  created_at: string
  updated_at: string
}
