// pages / components --------------------------------------------------
import NavBar from "./components/navbar"
import Home from "./pages/Home"
import Footer from "./components/footer"
// styling --------------------------------------------------
import "./assets/styling/App.css"
import "./assets/colors.css"

function App() {

  return (
    <div className="App">
        <NavBar />
        <Home />
        <Footer />
    </div>
  )
}

export default App
