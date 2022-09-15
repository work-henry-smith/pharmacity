import './App.css';
import HomePage from './pages/Homepage';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ArticlesList from './pages/ArticlesList';
import ArticlePage from './pages/ArticlePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='articles-list' element={<ArticlesList />} />
          <Route path='article-one' element={<ArticlePage />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
