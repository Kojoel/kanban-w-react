import { useEffect } from "react";
import BoardContent from "./components/constant/BoardContent";
import Header from "./components/constant/Header";
import Sidebar from "./components/constant/SideBar";
import { getData } from "./kanban services/apiService";


function App() {

  useEffect(() => {
    getData();
  })

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
