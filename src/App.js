import './sass/index.scss';
import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';
// import store and provider
import { Provider } from 'react-redux';
import store from './redux/store';
import Layout from './components/Layout';
import Profile from './routes/Profile';
import Missions from './routes/Missions';
import Rockets from './routes/Rockets';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Navigate to="/rockets" />} />
              <Route path="/rockets" element={<Rockets />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/missions" element={<Missions />} />
            </Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
