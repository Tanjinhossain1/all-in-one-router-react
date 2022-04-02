import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cloths from './component/Cloths/Cloths';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Monitors from './components/Monitors/Monitors';
import NotFound from './components/NotFound/NotFound';
import ProceedCart from './components/ProceedCart/ProceedCart';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/monitors' element={<Monitors></Monitors>}></Route>
        <Route path='/proceedCart' element={<ProceedCart></ProceedCart>}></Route>
        <Route path='/cloths' element={<Cloths></Cloths>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
