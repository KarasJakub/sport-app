import React from "react"
import monitor_icon from "assets/icons/monitor.png"
import arrow_right_circle from "assets/icons/arrow_right_circle.png"

interface MatchesRowComponentProps {
  date: string
  homeTeamScore: number
  awayTeamScore: number
  homeTeam: {
    name: string
    image: string
  }
  awayTeam: {
    name: string
    image: string
  }
  rowNumber?: number
}

const MatchesRowComponent = ({
  date,
  homeTeam,
  awayTeam,
  homeTeamScore,
  awayTeamScore,
  rowNumber,
}: MatchesRowComponentProps) => {
  return (
    <div
      className={`w-full p-4 flex justify-between ${
        rowNumber === 3 ? "" : "border-b border-[#D5E0E8]"
      }`}
    >
      <div className="flex gap-8 items-center">
        <h4 className="font-primary text-base font-normal text-black opacity-50">
          {date}
        </h4>
        <div className="flex gap-2">
          <div className=" bg-[#61AEE4] w-[2px] h-full"></div>
          <div className="flex flex-col items-start">
            <div className="flex items-center justify-center gap-3">
              <img src={homeTeam.image} alt="Logo klubu" className="w-4" />
              <p className="font-primary text-base font-medium">
                {homeTeam.name}
              </p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <img src={awayTeam.image} alt="Logo klubu" className="w-4" />
              <p className="font-primary text-base font-medium">
                {awayTeam.name}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mr-16 ">
          <p className="font-primary text-base font-normal text-black opacity-50 mb-2">
            {homeTeamScore}
          </p>
          <p className="font-primary text-base font-normal text-black opacity-50">
            {awayTeamScore}
          </p>
        </div>
        <div className="hidden md:block">
          <div className="flex justify-center items-center gap-2">
            <button className="p-3 border-2 border-[#D5E0E8] rounded-lg">
              <img src={monitor_icon} alt="" />
            </button>
            <button className="p-3 border-2 border-[#D5E0E8] rounded-lg flex gap-1 items-center">
              <p className="font-primary text-base font-medium">Szczegóły</p>
              <img src={arrow_right_circle} alt="Ikona strzałki" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MatchesRowComponent
