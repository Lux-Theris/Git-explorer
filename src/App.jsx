import { Dashboard } from "./pages/Dashboard"
import { Repositories } from "./pages/Repositories"
import GlobalStyles from "./styles/GlobalStyles"
import { ThemeProvider } from "styled-components"
import dark from './styles/themes/dark'
export function App() {
  return (
    <ThemeProvider theme={dark}>
    <GlobalStyles />
    <Dashboard />
    <Repositories />
    </ThemeProvider>
  )
}