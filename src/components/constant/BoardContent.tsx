import '../../styles/abstracts/_variables.scss';
import Column from '../reusable/Columns';

const BoardContent = () => {
  return (
    <div className="w-full h-full bg-[var(--grey-03)] overflow-y-auto p-[24px] flex gap-[24px]">
        <Column />
    </div>
  )
}

export default BoardContent