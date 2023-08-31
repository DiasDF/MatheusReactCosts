/* Routes */
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Footer from './components/layout/Footer'

/* Componentes */
import Container from './components/layout/Container'

import './App.css'

function App() {
   return (
      <Router>
         <ul>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/company">Company</Link>
            <Link to="/newproject">NewProject</Link>
         </ul>
         <Container customClass="min-height">
            <Routes>
               <Route exact path="/" element={<Home />} />
               <Route exact path="/company" element={<Company />} />
               <Route exact path="/contact" element={<Contact />} />
               <Route exact path="/newproject" element={<NewProject />} />
            </Routes>
         </Container>
         <Footer />
      </Router>
      // O Path seria algo como o nome da "Route" a Rota que recebe o component a que se refere
      // Exemplo:  "/" = Component <Home />

      // <div className="App">
      //   <h1>App Costs</h1>
      //   <p>Teste Git</p>
      // </div>
   )
}

export default App
