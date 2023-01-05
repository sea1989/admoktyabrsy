import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { HomePage } from './pages/home-page'

import { Footer } from './components/footer';
import { Header } from './components/header'
import { AdministrationPage } from './pages/administration-page/administration-page';
import { InfoPOpage } from './pages/infoPO-page/infoPO-page';
import { InfoPOitemPage } from './pages/infoPO-item-page/infoPO-item-page';



function App() {
  return (

    <BrowserRouter>

      <div className='App'>

        <Header />

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/administration" element={<AdministrationPage />} />
          <Route exact path="/info-po" element={<InfoPOpage />} />
          <Route exact path="/info-po-item/:id" element={<InfoPOitemPage />} />

        </Routes>

        <Footer />

      </div>

    </BrowserRouter>

  );
}

export default App;