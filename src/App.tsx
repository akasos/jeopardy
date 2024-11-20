import JeopardyBoard from "./components/JeopardyBoard.tsx";
import {createTheme, ThemeProvider} from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  }
})


function App() {
  return (
      <ThemeProvider theme={darkTheme}>
        <JeopardyBoard/>
      </ThemeProvider>
  )
}

export default App
