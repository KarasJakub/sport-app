import { useQuery } from "@tanstack/react-query"
import { statsTableHandler } from "./statsTable"

export const useStatsTableHandler = () => {
  return useQuery({
    queryKey: ["statsTable"],
    queryFn: () => statsTableHandler(),
  })
}
