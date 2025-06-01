import { useEffect } from 'react';
import { useBoardStore } from '../../store/state';
import '../../styles/abstracts/_interactiveElements.scss';

const Header = () => {
  const activeBoard = useBoardStore((state) => state.activeBoard);
  const boardContent = useBoardStore((state) => state.boardContent);

  return (
    <div className="flex items-center justify-between pl-[32px] pr-[32px] h-[96px] border-b border-b-[var(--grey-02)]">
      <p className="hidden md:block heading-xl">{activeBoard}</p>
      <select className="block md:hidden heading-xl" name="boards" id="boards">
        <option value="platform launch ">Platform Launch</option>
      </select>
      <div className={`flex items-center gap-[24px]`}>
        <button 
          className={`w-[46px] h-[32px] md:h-[48px] right btn-primary-l w-[46px] text-[.9rem] md:w-[164px] relative ${boardContent.length ? '' : 'disable-btn'}`}>
          <p className="text-[1.6rem] absolute bottom-[0.5px] md:bottom-0 md:text-[1rem] md:static">+</p>
          <p className="hidden md:block">Add New Task</p>
        </button>
        <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="2.30769" cy="2.30769" r="2.30769" fill="#828FA3"/>
          <circle cx="2.30769" cy="10" r="2.30769" fill="#828FA3"/>
          <circle cx="2.30769" cy="17.6923" r="2.30769" fill="#828FA3"/>
        </svg>

      </div>
    </div>
  )
}

export default Header