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
  const { data: statsTableData, isError } = useStatsTableHandler()
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
        <table className="w-full border-spacing-3">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="">
                {headerGroup.headers.map((header, index) => {
                  const isFirst = index === 0
                  const isLast = index === headerGroup.headers.length - 1
                  return (
                    <th
                      className={`font-primary text-base font-medium text-black pt-4 pb-4 ${
                        isFirst ? "pl-4" : ""
                      } ${isLast ? "pr-4" : ""}`}
                      key={header.id}
                    >
                      <div
                        className={`bg-darkGray py-2 ${
                          isFirst ? "rounded-tl-lg rounded-bl-lg pl-4" : ""
                        } ${isLast ? "rounded-tr-lg rounded-br-lg" : ""}`}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </div>
                    </th>
                  )
                })}
              </tr>
            ))}
          </thead>
          <tbody className="">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="m-4 border-b border-[#D5E0E8]">
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id} className=" py-4">
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
        <div className="py-4 pl-8 flex flex-col gap-2">
          <div className="flex gap-2">
            <div className=" w-4 rounded-md bg-[#1C336C]"></div>
            <p className="font-primary text-xs font-normal">
              Awans - Liga Mistrzów (Runda grupowa)
            </p>
          </div>
          <div className="flex gap-2">
            <div className=" w-4 rounded-md bg-[#C82D2D]"></div>
            <p className="font-primary text-xs font-normal">
              Awans - Liga Europy (Runda grupowa)
            </p>
          </div>
          <div className="flex gap-2">
            <div className="w-4 rounded-md bg-[#FF5F5F]"></div>
            <p className="font-primary text-xs font-normal">
              Spadek - Championship
            </p>
          </div>
        </div>
      </div>
      {/* {isError && <p>Wystąpił błąd</p>} */}
    </div>
  )
}

export default StatsTable
