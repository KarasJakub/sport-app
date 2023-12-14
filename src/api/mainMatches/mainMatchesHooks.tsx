import { useQuery } from "@tanstack/react-query"
import { mainMatchesHandler } from "./mainMatches"

export const useMainMatchesHandler = (pageNumber: number) => {
  return useQuery({
    queryKey: ["mainMatches", pageNumber],
    queryFn: () => mainMatchesHandler(pageNumber),
  })
}
