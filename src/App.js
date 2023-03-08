import './sass/index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Profile from './routes/Profile';
import Missions from './routes/Missions';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/missions" element={<Missions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
