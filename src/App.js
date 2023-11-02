
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './comps/NavBar/NavBar';
import Home from './Pages/Home/Home';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import NotFound from './Pages/NotFound/NotFound';
import About from './Pages/About/About';
import Footer from './comps/footer/Footer';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';




export const backToTop = () => {
  window.scrollTo(0, 0)
}
export const switchMode = (darkMode) => {
  var modeIs
  darkMode ? modeIs=true : modeIs =false;
  return modeIs
}

function App() {

  const modeIs = useSelector(state => state.darkMode.mode)
  console.log(modeIs)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home darkMode={modeIs}/>}> </Route>
        <Route path='/about' element={<About darkMode={!modeIs} />}></Route>
        <Route path='/services' element={<About darkMode={!modeIs}/>}></Route>
          <Route path='/signIn' element={<SignIn />}></Route>
          <Route path='/signUp' element={<SignUp />}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
