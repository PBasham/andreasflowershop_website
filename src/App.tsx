// pages / components --------------------------------------------------
import NavBar from "./components/navbar"
import Home from "./pages/Home"
import Footer from "./components/footer"
// styling --------------------------------------------------
// pages
import "./assets/styling/App.css"
import "./assets/styling/HomePage.css"
// components
import "./assets/styling/Buttons.css"
// misc
import "./assets/colors.css"

function App() {

  return (
    <div className="App">
        <NavBar />
        <Home />
        <Home />
        <Home />
        <Home />
        <Footer />
    </div>
  )
}

export default App
