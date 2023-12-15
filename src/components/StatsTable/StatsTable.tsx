import React from "react"
import arrow_right_circle from "assets/icons/arrow_right_circle.png"
import add_icon from "assets/icons/add_icon.png"
import { useMemo } from "react"
import { columns, MatchesStats } from "./StatsTableData"
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { useStatsTableHandler } from "api/statsTable/stastTableHooks"

const StatsTable = () => {
  const { data: statsTableData, isError, isFetching } = useStatsTableHandler()
  const data = statsTableData || []
  const columnsMemo = useMemo(() => columns, [])

  const table = useReactTable({
    data,
    columns: columnsMemo,
    getCoreRowModel: getCoreRowModel<MatchesStats>(),
  })
  return (
    <div className="w-full max-w-6xl">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg">
        <div className="p-4 bg-white border-b-2 border-[#D5E0E8]">
          <div className="flex justify-between">
            <div className="flex items-center justify-center gap-4">
              <img src={add_icon} alt="Ikona plusa" />
              <h1 className="font-primary text-xl font-medium">
                Anglia: Premier League
              </h1>
            </div>
            <div className="flex items-center justify-center gap-1">
              <h2 className="font-primary text-base font-medium">Mecze</h2>
              <img src={arrow_right_circle} alt="Ikona strzałki" />
            </div>
          </div>
        </div>
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className="p-4 bg-white border-b-2 border-[#D5E0E8]"
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      className="p-4 font-primary text-base font-medium text-black opacity-50"
                      key={header.id}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  )
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isError && <p>Wystąpił błąd</p>}
    </div>
  )
}

export default StatsTable
