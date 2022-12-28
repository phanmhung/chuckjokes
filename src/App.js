import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Details from './pages/Details';
import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route exact path="/jokes/:id" element={<Details/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
