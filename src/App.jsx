import { Dashboard } from "./pages/Dashboard"
import { Repositories } from "./pages/Repositories"
import GlobalStyles from "./styles/GlobalStyles"

export function App() {
  return (
    <>
    <GlobalStyles />
    <Dashboard />
    <Repositories />
    </>
  )
}