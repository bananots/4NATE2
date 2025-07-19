import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home,Picture,Cake,Present } from "./components"
import './index.css'

function App() {

  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/pictures" element={<Picture/>}/>
          <Route path="/cake" element={<Cake/>}/>
          <Route path="/present" element={<Present/>}/>
      </Routes>

    </Router>
  )
}

export default App
