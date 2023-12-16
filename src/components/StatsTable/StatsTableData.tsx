import React from "react"
import { createColumnHelper } from "@tanstack/react-table"
export interface MatchesStatsTypes {
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

const columnHelper = createColumnHelper<MatchesStatsTypes>()

const setColor = (index: number) => {
  if (index < 5) {
    return "bg-[#1C336C]"
  } else if (index > 5 && index < 8) {
    return "bg-[#C82D2D]"
  } else {
    return "bg-[#FF5F5F]"
  }
}

export const columns = [
  columnHelper.accessor("team.id", {
    header: () => (
      <h3 className="font-primary text-xs font-medium text-left">LP.</h3>
    ),
    cell: (props) => (
      <div
        className={`w-6 rounded-md ${setColor(
          props.row.original.team.id
        )} px-2 py-1 flex items-center justify-center`}
      >
        <p className="text-white font-primary text-sm font-bold text-center">
          {props.getValue()}
        </p>
      </div>
    ),
  }),
  columnHelper.accessor("team.name", {
    header: () => (
      <h3 className="font-primary text-xs font-medium text-left">DRUŻYNA</h3>
    ),
    cell: (props) => (
      <div className="flex items-center gap-2">
        <img
          src={props.row.original.team.image}
          alt={`Logo klubu ${props.getValue()}`}
        />
        <p className="font-primary text-base font-medium">{props.getValue()}</p>
      </div>
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
