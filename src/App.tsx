import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './routes/Layout';
import Home from './routes/Home';
import Game from './routes/Game';
import Countries from './routes/Countries';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="game" element={<Game />} />
          <Route path="countries" element={<Countries />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
