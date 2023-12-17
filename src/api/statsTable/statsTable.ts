import { apiClient } from "api/client"
import { MatchesStatsTypes } from "./statsTableTypes"

export const statsTableHandler = async () => {
    try {
      const response = await apiClient.get<MatchesStatsTypes>(`/table`)
        return response.data
    } catch (error) {
        console.log(error)
    }
  }