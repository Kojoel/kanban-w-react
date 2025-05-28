import BoardContent from "./components/constant/BoardContent";
import Header from "./components/constant/Header";
import Sidebar from "./components/constant/SideBar";


function App() {

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <BoardContent />
        </div>
      </div>
    </>
  )
}

export default App
