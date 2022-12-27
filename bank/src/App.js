import './App.css';
import Navbar from './components/Navbar';
import Shop from './components/Shop';

function App() {
  return (
    <>
    <div className="bg">
    <Navbar/>
    <h2 className='text-center my-2'>Redux Project Completed 🤑🤩.</h2>
    <div className="container my-5">
    <Shop/>
    </div>
    </div>
    </>

  );
}

export default App;
