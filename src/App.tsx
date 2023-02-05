import "./assets/styling/App.css"
import Footer from "./components/footer"
import NavBar from "./components/navbar"
import Home from "./pages/Home"

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
