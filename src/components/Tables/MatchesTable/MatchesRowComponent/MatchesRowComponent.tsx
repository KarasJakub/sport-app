import React from "react"

interface MatchesRowComponentProps {
  date: string
  homeTeam: string
  awayTeam: string
  homeScore: string
  awayScore: string
}

const MatchesRowComponent = ({
  date,
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
}: MatchesRowComponentProps) => {
  return (
    <div className="w-full p-4 flex items-center justify-between">
      <div className="flex gap-8 items-center">
        <h4 className="font-primary text-base font-normal text-black opacity-50">
          {date}
        </h4>
        <div className="flex gap-2">
          <div className=" bg-[#61AEE4] w-[2px] h-full"></div>
          <div className="flex flex-col items-start">
            <div className="flex items-center justify-center gap-3">
              <img
                src="https://static.flashscore.com/res/image/data/fkbYUWme-ImMEe0UF.png"
                alt=""
                className="w-4"
              />
              <p className="font-primary text-base font-medium">{homeTeam}</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <img
                src="https://static.flashscore.com/res/image/data/fkbYUWme-ImMEe0UF.png"
                alt=""
                className="w-4"
              />
              <p className="font-primary text-base font-medium">{awayTeam}</p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default MatchesRowComponent
