import { apiClient } from "api/client"

export const statsTableHandler = async () => {
    try {
      const response = await apiClient.get(`/table`)
        return response.data
    } catch (error) {
        console.log(error)
    }
  }