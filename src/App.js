import './App.css';
import { Footer, Nav } from './components';
import { Routes } from './routes';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
