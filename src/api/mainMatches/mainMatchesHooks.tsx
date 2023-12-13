import { useQuery } from "@tanstack/react-query"
import { mainMatchesHandler } from "./mainMatches"

export const useMainMatchesHandler = () => {
  return useQuery({
    queryKey: ["mainMatches"],
    queryFn: mainMatchesHandler,
  })
}
