import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CryptoDetail from './views/CryptoDetails';
import CryptoHome from './views/CryptoHome';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<CryptoHome />} />
          <Route path='/coin/:id' element={<CryptoDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
