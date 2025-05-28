import BoardContent from "./components/constant/BoardContent"
import Header from "./components/constant/Header"
import Sidebar from "./components/constant/Sidebar"

function App() {

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div>
          <Header />
          <BoardContent />
        </div>
      </div>
    </>
  )
}

export default App
