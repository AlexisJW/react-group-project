import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import store and provider
import { Provider } from 'react-redux';
import store from './redux/store';
import Layout from './components/Layout';
import Profile from './routes/Profile';
import Mission from './routes/Mission';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Mission />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
