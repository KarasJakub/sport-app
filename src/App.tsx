import React from "react"
import MainLayout from "components/MainLayout"
import MatchesTable from "components/MatchesTable/MatchesTable"
import StatsTable from "components/StatsTable/StatsTable"
import ROUTES from "helpers/utils/ROUTES"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Routes, Route } from "react-router-dom"

const queryClient = new QueryClient()
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <MainLayout>
          <Routes>
            <Route path={ROUTES.home} element={<MatchesTable />} />
            <Route path={ROUTES.statsTable} element={<StatsTable />} />
          </Routes>
        </MainLayout>
      </QueryClientProvider>
    </>
  )
}

export default App
