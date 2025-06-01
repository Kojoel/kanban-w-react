import { useBoardStore } from "../../store/state"

const ViewSubtasks = () => {

    const task = useBoardStore((state) => state.task);

    return (
        <div className="w-[480px] max-w-[480px] bg-[var(--white)] rounded-[6px] p-[32px]">
            <div className="title-ellipsis flex justify-between items-center mb-[24px] gap-5">
                <p className="heading-l text-[var(--black-01)]">{task.title}</p>
                <svg width="6" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2.30769" cy="2.30769" r="2.30769" fill="#828FA3"/>
                    <circle cx="2.30769" cy="10" r="2.30769" fill="#828FA3"/>
                    <circle cx="2.30769" cy="17.6923" r="2.30769" fill="#828FA3"/>
                </svg>
            </div>
            <p className="body-l text-[var(--grey-01)] mb-[24px]">{task.description}</p>
            <p className="body-m text-[var(--grey-01)] mb-[16px]">Subtasks ( { task.subtasks.reduce((count, subtask) => subtask.isCompleted ? count + 1 : count , 0) } of {task.subtasks.length} )</p>
            <div className="subtask-wrapper flex flex-col gap-[8px] mb-[24px]">
                {task.subtasks.map((sub, index) => (
                    <div key={index} className="flex gap-5 bg-[var(--grey-03)] p-[12px] rounded">
                        <input defaultChecked={sub.isCompleted} type="checkbox" name="subtask" id="subtask" />
                        <p className="body-m text-[var(--grey-01)]">{sub.title}</p>
                    </div>
                ))}

            </div>
            <div className="current-status">
                <p className="body-m text-[var(--grey-01)] mb-[8px] ">Current Status</p>
                <select value={task.status} name="status" id="status" className="border w-full rounded h-[40px] pl-[16px] pr-[16px]">
                    <option value="todo">To do</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                </select>
            </div>
        </div>
    )
}

export default ViewSubtasks