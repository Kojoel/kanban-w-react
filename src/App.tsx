import { useEffect, useRef } from "react";
import BoardContent from "./components/constant/BoardContent";
import Header from "./components/constant/Header";
import Sidebar from "./components/constant/SideBar";
import { getData } from "./kanban services/apiService";
import ViewSubtasks from "./components/modals/ViewSubtasks";
import { useBoardStore } from "./store/state";
import './styles/abstracts/_interactiveElements.scss';
import NewTask from "./components/modals/NewTask";

function App() {
  const modalRef = useRef<HTMLDivElement | null>(null);
  // const task = useBoardStore((state) => state.task);
  const subtaskModal = useBoardStore((state) => state.subtaskModal);
  const setSubtaskModal = useBoardStore((state) => state.setSubtaskModal);

  // let subTaskModal: boolean = false;

  useEffect(() => {
    getData();
  }, [])

  const hideModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if(e.target === e.currentTarget) {
      setSubtaskModal(false);
    }
  }

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


      <div 
          ref={modalRef} 
          className={`${subtaskModal ? 'flex' : 'hidden' } subtasks-modal absolute top-0 left-0 w-full h-full items-center justify-center bg-black bg-opacity-50`}
          onClick={hideModal}
        >
        <ViewSubtasks />
      </div>



      <div 
          className="subtasks-modal absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
        >
        <div  ref={modalRef}>
          <NewTask />
        </div>
      </div>
    </>
  )
}

export default App
