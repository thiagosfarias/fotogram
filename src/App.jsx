import { GlobalStyle } from "./global";
import Routes from "./routes";
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
    return (
      <>
        <GlobalStyle />
        <Router>
          <Routes />
        </Router>
      </>
    )
}

export default App;
