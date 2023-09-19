import { useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import toast, { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import { useDispatch } from 'react-redux';
import { dataRedux } from './features/userSlice';
function App() {
const dispatch=useDispatch();
  useEffect(()=>{
    (()=>{
      const data=localStorage.getItem("inventory");
      if(data!=null)
      {
        dispatch(dataRedux(JSON.parse(data)));
      }

    })()
  },[])
  return (
    <div className="App">
    <Toaster></Toaster>
  <Navbar></Navbar>
  <Hero></Hero>
    </div>
  );
}

export default App;
