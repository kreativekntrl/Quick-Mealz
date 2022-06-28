import './App.scss';
import 'bootstrap';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import Footer from './components/Footer';

function App() {
  return (
<div className="page-wrap">
  <header className="page-header">
    QuickMealz
  </header>
  <nav className="page-nav">
    <NavBar />
  </nav>
  <main className="page-main">
    <article className="form">
        <SignUp />
    </article>
  </main>
  <aside className="page-sidebar">
    Aside
  </aside>
  <footer className="page-footer">
    <Footer />
  </footer>
    </div>
  );
}

export default App;
