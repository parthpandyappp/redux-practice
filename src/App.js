import './App.css';
import { Footer, Nav } from './components';
import { Routes } from './routes';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <Routes />
      <Footer />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
}

export default App;
