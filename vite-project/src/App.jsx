import Card from "./components/Card/Card";
import WatchData from "./components/Data/WatchData";
import Nav from "./components/Header/Nav";
import "./App.css"

function App() {
  
  return (
    <>
      <Nav />
      <div className=" w-screen h-auto p-2">
      <WatchData/>
      </div>
    </>
  );
}

export default App;
