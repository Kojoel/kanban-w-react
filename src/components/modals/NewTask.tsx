import '../../styles/abstracts/_interactiveElements.scss';
import '../../styles/base/_typography.scss';

const NewTask = () => {
  return (
    <div className="max-w-[480px] w-full bg-[var(--white)] rounded-[6px] p-[32px]">
        <p className="heading-l mb-[24px]" >Add New Task</p>

        <p className="title body-m text-[var(--grey-01)] mb-[8px]">Title</p>
        <input type="text" className="body-l text-field-idle w-full mb-[24px] h-[40px]" placeholder="eg. Take a coffee break" />

        <p className="description body-m text-[var(--grey-01)] mb-[8px]">Description</p>
        <textarea name="description" id="description" className="body-l text-field-idle w-full mb-[24px] h-[112px] pt-[8px] pb-[8px] pl-[16px] pr-[16px] " placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."></textarea>

        <p className="title body-m text-[var(--grey-01)] mb-[8px]">Subtasks</p>
        <div>
            <div className="flex items-center justify-between gap-[16px] mb-[12px]">
                <input type="text" className="body-l text-field-idle w-full h-[40px]" placeholder="eg. Take a coffee break" />
                <svg className="cursor-pointer" width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="12.728" width="3" height="18" transform="rotate(45 12.728 0)" fill="#828FA3"/>
                    <rect y="2.12132" width="3" height="18" transform="rotate(-45 0 2.12132)" fill="#828FA3"/>
                </svg>
            </div>
            <div className="flex items-center justify-between gap-[16px] mb-[12px]">
                <input type="text" className="body-l text-field-idle w-full h-[40px]" placeholder="eg. Take a coffee break" />
                <svg className="cursor-pointer" width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="12.728" width="3" height="18" transform="rotate(45 12.728 0)" fill="#828FA3"/>
                    <rect y="2.12132" width="3" height="18" transform="rotate(-45 0 2.12132)" fill="#828FA3"/>
                </svg>
            </div>
        </div>
        
        <button className="btn-secondary w-full mb-[24px]">+ Add New Subtask</button>

        <div className="mb-[24px]">
            <p className="body-m text-[var(--grey-01)] mb-[8px] ">Status</p>
            <select name="status" id="status" className="border w-full rounded h-[40px] pl-[16px] pr-[16px]">
                <option value="todo">To do</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
            </select>
        </div>

        <button className="btn-primary-l w-full h-[40px]">Create Task</button>
    </div>
  )
}

export default NewTask