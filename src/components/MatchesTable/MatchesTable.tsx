import React, { useEffect, useState } from "react"
import add_icon from "assets/icons/add_icon.png"
import arrow_right_circle from "assets/icons/arrow_right_circle.png"
import arrow_icon from "assets/icons/arrow.png"
import MatchesRowComponent from "./MatchesRowComponent/MatchesRowComponent"
import { useMainMatchesHandler } from "api/mainMatches/mainMatchesHooks"

const MatchesTable = () => {
  const [currentPage, setCurrentPage] = useState([1, 2, 3])
  const {
    data: firstSetOfData,
    isSuccess: isFirstRowSuccessfullyFetched,
    isError: isFirstRowError,
    isFetching: isFirstRowIsFetching,
  } = useMainMatchesHandler(currentPage[0])
  const {
    data: secondSetOfData,
    isSuccess: isSecondRowSuccessfullyFetched,
    isError: isSecondRowError,
    isFetching: isSecondRowIsFetching,
  } = useMainMatchesHandler(currentPage[1])
  const {
    data: thirdSetOfData,
    isSuccess: isThirdRowSuccessfullyFetched,
    isError: isThirdRowError,
    isFetching: isThirdRowIsFetching,
  } = useMainMatchesHandler(currentPage[2])

  useEffect(() => {
    console.log(currentPage[0], currentPage[1], currentPage[2])
  }, [currentPage])

  const handlePreviousPage = () => {
    setCurrentPage([currentPage[0] - 3, currentPage[1] - 3, currentPage[2] - 3])
  }

  const handleNextPage = () => {
    setCurrentPage([currentPage[0] + 3, currentPage[1] + 3, currentPage[2] + 3])
  }

  return (
    <div className="w-full max-w-6xl">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg">
        <div className="p-4 border-b-2 border-[#D5E0E8]">
          <button className="bg-blue py-4 px-5 font-primary text-white rounded-lg tracking-wider">
            Wszystkie
          </button>
        </div>
        <div className="p-4 bg-white border-b-2 border-[#D5E0E8]">
          <div className="flex justify-between">
            <div className="flex items-center justify-center gap-4">
              <img src={add_icon} alt="Ikona plusa" />
              <h1 className="font-primary text-xl font-medium">
                Anglia: Premier League
              </h1>
            </div>
            <div className="flex items-center justify-center gap-1">
              <h2 className="font-primary text-base font-medium">Tabela</h2>
              <img src={arrow_right_circle} alt="Ikona strzałki" />
            </div>
          </div>
        </div>
        <div className="p-4 w-full">
          {isFirstRowSuccessfullyFetched && (
            <>
              <div className="w-full rounded-lg bg-darkGray py-2 px-4">
                <h3 className="font-primary text-xs font-medium">
                  RUNDA {firstSetOfData?.data[0].round}
                </h3>
              </div>
              {firstSetOfData?.data?.map((match: any, index: number) => (
                <MatchesRowComponent
                  key={match.id}
                  date={match.date}
                  homeTeam={match.home_team_object}
                  awayTeam={match.away_team_object}
                  homeTeamScore={match.home_score}
                  awayTeamScore={match.away_score}
                  rowNumber={index}
                />
              ))}
            </>
          )}
          {isFirstRowError && (
            <p className="font-primary text-xl font-medium">
              Nie udało się pobrać danych, skontaktuj sie z administratorem.
            </p>
          )}
          {/* {isFirstRowIsFetching && (
            <p className="font-primary text-xl font-medium">Ładowanie...</p>
          )} */}

          {isSecondRowSuccessfullyFetched && (
            <>
              <div className="w-full rounded-lg bg-darkGray py-2 px-4">
                <h3 className="font-primary text-xs font-medium">
                  RUNDA {secondSetOfData?.data[1].round}
                </h3>
              </div>
              {secondSetOfData?.data?.map((match: any, index: number) => (
                <MatchesRowComponent
                  key={match.id}
                  date={match.date}
                  homeTeam={match.home_team_object}
                  awayTeam={match.away_team_object}
                  homeTeamScore={match.home_score}
                  awayTeamScore={match.away_score}
                  rowNumber={index}
                />
              ))}
            </>
          )}
          {isSecondRowError && (
            <p className="font-primary text-xl font-medium">
              Nie udało się pobrać danych, skontaktuj sie z administratorem.
            </p>
          )}
          {/* {isSecondRowIsFetching && (
            <p className="font-primary text-xl font-medium">Ładowanie...</p>
          )} */}

          {isThirdRowSuccessfullyFetched && (
            <>
              <div className="w-full rounded-lg bg-darkGray py-2 px-4">
                <h3 className="font-primary text-xs font-medium">
                  RUNDA {thirdSetOfData?.data[1].round}
                </h3>
              </div>
              {thirdSetOfData?.data?.map((match: any, index: number) => (
                <MatchesRowComponent
                  key={match.id}
                  date={match.date}
                  homeTeam={match.home_team_object}
                  awayTeam={match.away_team_object}
                  homeTeamScore={match.home_score}
                  awayTeamScore={match.away_score}
                  rowNumber={index}
                />
              ))}
            </>
          )}
          {isThirdRowError && (
            <p className="font-primary text-xl font-medium">
              Nie udało się pobrać danych, skontaktuj sie z administratorem.
            </p>
          )}
          {/* {isThirdRowIsFetching && (
            <p className="font-primary text-xl font-medium">Ładowanie...</p>
          )} */}
        </div>
      </div>
      <div className="flex items-center justify-between mt-14">
        <button
          className={`flex items-center justify-items-center gap-2 ${
            currentPage[0] === 1 ? "cursor-not-allowed" : ""
          }`}
          onClick={() => handlePreviousPage()}
          disabled={currentPage[0] === 1}
        >
          <img src={arrow_icon} alt="Ikona strzałki" />
          <p className="font-primary text-lg font-medium text-black opacity-50">
            Wstecz
          </p>
        </button>
        <button
          className={`flex flex-row-reverse items-center justify-items-center gap-2 ${
            currentPage[2] === 33 ? "cursor-not-allowed" : ""
          }`}
          onClick={() => handleNextPage()}
          disabled={currentPage[2] === 33}
        >
          <img src={arrow_icon} alt="Ikona strzałki" className="rotate-180" />
          <p className="font-primary text-lg font-medium text-black opacity-50">
            Dalej
          </p>
        </button>
      </div>
    </div>
  )
}

export default MatchesTable
