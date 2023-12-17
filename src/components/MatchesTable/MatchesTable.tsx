import React, { useEffect, useState } from "react"
import AddIcon from "assets/icons/SVGAdd"
import ArrowRightCircleIcon from "assets/icons/SVGArrowRightCircle"
import ArrowIcon from "assets/icons/SVGArrow"
import MatchesRowComponent from "./MatchesRowComponent/MatchesRowComponent"
import { useMainMatchesHandler } from "api/mainMatches/mainMatchesHooks"
import ROUTES from "helpers/utils/routes"
import { Link } from "react-router-dom"

const MatchesTable = () => {
  const [currentPage, setCurrentPage] = useState([1, 2, 3])
  const [isErrored, setIsErrored] = useState(false)
  const [isFetching, setIsFetching] = useState(false)
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
    if (isFirstRowError || isSecondRowError || isThirdRowError) {
      setIsErrored(true)
    } else {
      setIsErrored(false)
    }
  }, [isFirstRowError, isSecondRowError, isThirdRowError])

  useEffect(() => {
    if (isFirstRowIsFetching || isSecondRowIsFetching || isThirdRowIsFetching) {
      setIsFetching(true)
    } else {
      setIsFetching(false)
    }
  }, [isFirstRowIsFetching, isSecondRowIsFetching, isThirdRowIsFetching])

  const handlePreviousPage = () => {
    setCurrentPage([currentPage[0] - 3, currentPage[1] - 3, currentPage[2] - 3])
  }

  const handleNextPage = () => {
    setCurrentPage([currentPage[0] + 3, currentPage[1] + 3, currentPage[2] + 3])
  }

  return (
    <div className="w-full max-w-6xl">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg">
        <div className="p-4 border-b-2 border-borderGray">
          <button className="bg-blue py-4 px-5 font-primary text-white rounded-lg tracking-wider hover:bg-[#132047]">
            Wszystkie
          </button>
        </div>
        <div className="p-4 bg-white border-b-2 border-borderGray">
          <div className="flex justify-between">
            <div className="flex items-center justify-center gap-4">
              <AddIcon />
              <h1 className="font-primary text-xl font-medium">
                Anglia: Premier League
              </h1>
            </div>
            <Link to={ROUTES.statsTable}>
              <button className="flex items-center justify-center gap-1">
                <h2 className="font-primary text-base font-medium">Tabela</h2>
                <ArrowRightCircleIcon />
              </button>
            </Link>
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
          {isErrored && (
            <p className="font-primary text-xl font-medium">
              Nie udało się pobrać danych, skontaktuj sie z administratorem.
            </p>
          )}
          {isFetching && (
            <p className="font-primary text-xl font-medium">Ładowanie...</p>
          )}
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
          <ArrowIcon />
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
          <ArrowIcon style={{ transform: "rotate(180deg)" }} />
          <p className="font-primary text-lg font-medium text-black opacity-50">
            Dalej
          </p>
        </button>
      </div>
    </div>
  )
}

export default MatchesTable
