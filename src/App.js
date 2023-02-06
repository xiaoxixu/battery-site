import './App.css';
import BackgroundAnimation from './components/BackgroundAnimation';
import SiteHeader from './components/Header';
import Main from "./components/Main"

function App() {
  return (
    <div >
      <SiteHeader />
      <Main />
      <BackgroundAnimation />
    </div>
  );
}

export default App;
