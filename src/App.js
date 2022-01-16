import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import RQSuperHeroesPage from "components/RQSuperHeroes.page";
import SuperHeroesPage from "components/SuperHeroes.page";
import HomePage from "components/Home.page";
import "styles/resetStyles.css";
import "styles/appStyles.css";
import logo from "logo.svg";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <header className="app__header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
          <Route path="/super-heroes" element={<SuperHeroesPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
