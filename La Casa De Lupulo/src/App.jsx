import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { ContextProvider } from './components/Context'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ItemDetail from './components/ItemDetail'
import NotFound from './components/NotFound'

function App() {

  return (
    <ContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ItemDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App
