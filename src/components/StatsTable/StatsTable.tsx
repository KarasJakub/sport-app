import React from "react"
import ArrowRightCircleIcon from "assets/icons/SVGArrowRightCircle"
import AddIcon from "assets/icons/SVGAdd"
import { useMemo } from "react"
import { columns } from "./StatsTableData"
import { MatchesStatsTypes } from "api/statsTable/statsTableTypes"
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { useStatsTableHandler } from "api/statsTable/stastTableHooks"
import ROUTES from "helpers/utils/routes"
import { Link } from "react-router-dom"

const StatsTable = () => {
  const {
    data: statsTableData,
    isSuccess,
    isError,
    isFetching,
  } = useStatsTableHandler()
  const data = Array.isArray(statsTableData) ? statsTableData : []
  const columnsMemo = useMemo(() => columns, [])

  const table = useReactTable({
    data,
    columns: columnsMemo,
    getCoreRowModel: getCoreRowModel<MatchesStatsTypes>(),
    getSortedRowModel: getSortedRowModel(),
  })
  return (
    <div className="w-full max-w-6xl">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg  overflow-x-scroll lg:overflow-x-hidden">
        <div className="p-4 bg-white border-b-2 border-borderGray rounded-tl-2xl rounded-tr-2xl">
          <div className="flex justify-between ">
            <div className="flex items-center justify-center gap-4">
              <AddIcon />
              <h1 className="font-primary text-xl font-medium">
                Anglia: Premier League
              </h1>
            </div>
            <Link to={ROUTES.home}>
              <button className="flex items-center justify-center gap-1">
                <h2 className="font-primary text-base font-medium">Mecze</h2>
                <ArrowRightCircleIcon />
              </button>
            </Link>
          </div>
        </div>
        {isSuccess && (
          <table className="w-full border-spacing-3">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="">
                  {headerGroup.headers.map((header, index) => {
                    const isFirst = index === 0
                    const isLast = index === headerGroup.headers.length - 1
                    return (
                      <th
                        className={`font-primary text-base font-medium text-black pt-4 pb-4 cursor-pointer ${
                          isFirst ? "pl-4" : ""
                        } ${isLast ? "pr-4" : ""} `}
                        key={header.id}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        <div
                          className={`bg-darkGray py-2 ${
                            isFirst ? "rounded-tl-lg rounded-bl-lg pl-4" : ""
                          } ${isLast ? "rounded-tr-lg rounded-br-lg" : ""} ${
                            index != 0 ? " pl-28" : ""
                          }`}
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
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="m-4 border-b border-borderGray">
                  {row.getVisibleCells().map((cell, index) => {
                    return (
                      <td
                        key={cell.id}
                        className={`py-4 ${index === 0 ? "pl-8" : ""} ${
                          index != 0 ? " pl-28" : ""
                        } `}
                      >
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
        )}
        {isError && (
          <p className="font-primary text-xl font-medium p-4">
            Nie udało się pobrać danych, skontaktuj sie z administratorem.
          </p>
        )}
        {isFetching && (
          <p className="font-primary text-xl font-medium p-4">Ładowanie...</p>
        )}
        <div className="py-4 pl-8 flex flex-col gap-2">
          <div className="flex gap-2">
            <div className=" w-4 rounded-md bg-[#1C336C]"></div>
            <p className="font-primary text-xs font-normal">
              Awans - Liga Mistrzów (Runda grupowa)
            </p>
          </div>
          <div className="flex gap-2">
            <div className="w-4 rounded-md bg-[#C82D2D]"></div>
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
    </div>
  )
}

export default StatsTable
