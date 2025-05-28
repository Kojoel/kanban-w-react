import BoardContent from "./components/constant/BoardContent";
import Header from "./components/constant/Header";
import Sidebar from "./components/constant/SideBar";


function App() {

  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <div className="flex-1 overflow-y-auto">
            <BoardContent />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
