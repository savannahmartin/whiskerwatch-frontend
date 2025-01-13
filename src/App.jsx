import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header/Header';
import PetDashPage from './pages/PetDashPage';
import PetDetailsPage from './pages/PetDetailsPage';
import AddPetPage from './pages/AddPetPage';
import EditPetPage from './pages/EditPetPage';
import AddBehaviorPage from './pages/AddBehaviorPage';
import BehaviorsPage from './pages/BehaviorsPage';
import Footer from './components/Footer/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/pets' element={<PetDashPage />} />
      <Route path='/pets/:id' element={<PetDetailsPage />} />
      <Route path='/behaviors' element={<BehaviorsPage />} />
      <Route path='/pets/add' element={<AddPetPage />} />
      <Route path='/pets/:id/edit' element={<EditPetPage />} />
      <Route path='/pets/:id/behavior' element={<AddBehaviorPage />} />
    </Routes>
    <Footer />
    </>
    </BrowserRouter>
  )
}

export default App
