import React from "react"
import MainLayout from "components/MainLayout"
import MatchesTable from "components/Tables/MatchesTable/MatchesTable"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient()
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />

        <MainLayout>
          <MatchesTable />
        </MainLayout>
      </QueryClientProvider>
    </>
  )
}

export default App
