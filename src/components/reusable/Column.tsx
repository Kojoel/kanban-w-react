import '../../styles/base/_typography.scss';

const Column = ({ colName }: { colName: string }) => {
  return (
    <div className="col-name w-[280px] h-full">
        <div className="flex gap-[12px] items-center mb-[24px]">
            <div className="circle w-[15px] h-[15px] rounded-full bg-red-500"></div>
            <span className="heading-s ">{colName} (4)</span>
        </div>
        <div className="cards flex flex-col gap-5">
            <div className="card w-full h-[fit-content] pt-[23px] pb-[23px] pl-[16px] pr-[16px] bg-[var(--white)] rounded-xl flex flex-col gap-[8px] cursor-pointer">
                <div className="title heading-m">Build UI for onboarding flow</div>
                <p className="heading-s">0 of 3 subtasks</p>
            </div>
        </div>

    </div>
  )
}

export default Column