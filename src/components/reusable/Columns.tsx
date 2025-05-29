import { useBoardStore } from '../../store/state';
import '../../styles/base/_typography.scss';

const Columns = () => {

  const boardContent = useBoardStore((state) => state.boardContent);

  return (
    <>
    
    {boardContent.map((column) => (
      <div className="col-name w-[280px] h-full ">
          <div className="flex gap-[12px] items-center mb-[24px]">
              <div className="circle w-[15px] h-[15px] rounded-full bg-red-500"></div>
              <span className="heading-s ">{column.name} ({column.tasks.length})</span>
          </div>
          {column.tasks.map((task) => (
            <div className="cards flex flex-col gap-5 mb-5">
              <div className="card w-full h-[fit-content] pt-[23px] pb-[23px] pl-[16px] pr-[16px] bg-[var(--white)] rounded-xl flex flex-col gap-[8px] cursor-pointer">
                  <div className="title heading-m">{task.title}</div>
                  <p className="heading-s"> { task.subtasks.reduce((count, subtask) => subtask.isCompleted ? count + 1 : count , 0) } of { task.subtasks.length } subtasks</p>
              </div>
            </div>
          ))}
      </div>
    ))}
    
    </>
  )
}

export default Columns