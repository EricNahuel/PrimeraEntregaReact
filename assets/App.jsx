import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"



function App() {

  return (
    <div className="container">
      <NavBar/>
      <ItemListContainer greeting = "Bienvenidos a Pc Lux" />
    </div>
    
  )
}

export default App
