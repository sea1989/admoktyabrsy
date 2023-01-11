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
import { NewsPage } from './pages/news-page/news-page';
import { NewsItemPage } from './pages/news-item-page';
import { NoticePage } from './pages/Notice-page/Notice-page';
import { NoticItemPage } from './pages/Notice-item-page/Notice-item-page';
import { SessionsPage } from './pages/Sessions-page/Sessions-page';
import { ActsPage } from './pages/Acts-page/Acts-page';
import { GalleryPage } from './pages/Gallery-page/Gallery-page';
import { FeedbackPage } from './pages/Feedback-page/Feedback-page';



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
          <Route exact path="/news" element={<NewsPage />} />
          <Route exact path="/news-item/:id" element={<NewsItemPage />} />
          <Route exact path="/notice" element={<NoticePage />} />
          <Route exact path="/notice-item/:id" element={<NoticItemPage />} />
          <Route exact path="/sessions" element={<SessionsPage />} />
          <Route exact path="/acts" element={<ActsPage />} />
          <Route exact path="/gallery" element={<GalleryPage />} />
          <Route exact path="/feedback" element={<FeedbackPage />} />
        </Routes>

        <Footer />

      </div>

    </BrowserRouter>

  );
}

export default App;