import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { SignUpPage } from './pages/SignUpPage'
import { SignInPage } from './pages/SignInPage';
// import { Check } from './pages/Check';
import { Card } from './components/Card';
import { Navbar } from './components/Navbar';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUpPage/>}/>
          <Route path='/signin' element={<SignInPage/>}/> 
          <Route path='/check' element={<Card/>}/>      
          <Route path='/navbar' element={<Navbar/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
