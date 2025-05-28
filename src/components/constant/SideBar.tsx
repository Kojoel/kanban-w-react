import '../../styles/base/_typography.scss';
import '../../styles/abstracts/_variables.scss';

const Sidebar = () => {
  return (
    <div className="hidden md:block w-[300px] border-r border-r-[$border-color] h-screen ">
      {/* for logo */}
      <div className=" flex items-center gap-[15.75px] pl-[32px] pt-[32px] pb-[32px] mb-[54px]">
        <img 
          className="w-[24px] h-[25px]"
          src="assets/images/kanban.png" 
          alt="logo" />
        <span className="text-[33px] font-[900] ">kanban</span>
      </div>

      {/* all boards */}
      <div>
        <p>ALL BOARDS (3)</p>
        <div className="boards">
          
        </div>
        <div className="createboard">
          
        </div>
      </div>
    </div>
  )
}

export default Sidebar