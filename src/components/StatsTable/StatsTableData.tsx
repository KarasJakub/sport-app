import React from "react"
import { createColumnHelper } from "@tanstack/react-table"
export interface MatchesStats {
  team: {
    id: number
    name: string
    image: string
  }
  points: number
  goals_scored: number
  goals_conceded: number
  goals_ratio: number
  games: number
}

const columnHelper = createColumnHelper<MatchesStats>()

export const columns = [
  columnHelper.accessor("team.id", {
    header: () => (
      <h3 className="font-primary text-xs font-medium text-left">LP.</h3>
    ),
    cell: (props) => (
      <p className="font-primary text-xs font-medium pl-8">
        {props.getValue()}
      </p>
    ),
  }),
  columnHelper.accessor("team.name", {
    header: () => (
      <h3 className="font-primary text-xs font-medium text-left">DRUŻYNA</h3>
    ),
    cell: (props) => (
      <p className="font-primary text-base font-medium">{props.getValue()}</p>
    ),
  }),
  columnHelper.accessor("games", {
    header: () => <h3 className="font-primary text-xs font-medium">M</h3>,
    cell: (props) => (
      <p className="font-primary text-base font-medium text-center">
        {props.getValue()}
      </p>
    ),
  }),
  columnHelper.accessor((row) => `${row.goals_scored}:${row.goals_conceded}`, {
    id: "goals",
    header: () => <h3 className="font-primary text-xs font-medium">B</h3>,
    cell: (props) => (
      <p className="font-primary text-base font-medium text-center">
        {props.getValue()}
      </p>
    ),
  }),
  columnHelper.accessor("goals_ratio", {
    header: () => <h3 className="font-primary text-xs font-medium">RB</h3>,
    cell: (props) => (
      <p className="font-primary text-base font-medium text-center">
        {props.getValue()}
      </p>
    ),
  }),
  columnHelper.accessor("points", {
    header: () => <h3 className="font-primary text-xs font-medium">P</h3>,
    cell: (props) => (
      <p className="font-primary text-base font-bold text-center">
        {props.getValue()}
      </p>
    ),
  }),
]

export const MatchesContentData = [
  {
    team: {
      id: 1,
      name: "Arsenal",
      image:
        "https://static.flashscore.com/res/image/data/0n1ffK6k-vcNAdtF9.png",
    },
    points: 30,
    goals_scored: 27,
    goals_conceded: 10,
    goals_ratio: 17,
    games: 13,
  },
  {
    team: {
      id: 2,
      name: "Manchester City",
      image:
        "https://static.flashscore.com/res/image/data/0vgscFU0-lQuhqN8N.png",
      created_at: "2023-11-28T12:07:23.000000Z",
      updated_at: "2023-11-28T12:07:23.000000Z",
    },
    points: 29,
    goals_scored: 33,
    goals_conceded: 13,
    goals_ratio: 20,
    games: 13,
  },
  {
    team: {
      id: 3,
      name: "Arsenal",
      image:
        "https://static.flashscore.com/res/image/data/0n1ffK6k-vcNAdtF9.png",
    },
    points: 30,
    goals_scored: 23,
    goals_conceded: 23,
    goals_ratio: 45,
    games: 23,
  },
  {
    team: {
      id: 4,
      name: "Manchester City",
      image:
        "https://static.flashscore.com/res/image/data/0vgscFU0-lQuhqN8N.png",
      created_at: "2023-11-28T12:07:23.000000Z",
      updated_at: "2023-11-28T12:07:23.000000Z",
    },
    points: 34,
    goals_scored: 43,
    goals_conceded: 23,
    goals_ratio: 34,
    games: 34,
  },
]
