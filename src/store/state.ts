import { create } from 'zustand';
import type { Board, Column } from '../interfaces/board';

interface BoardState {
    boards: Board[];
    setBoards: (boards: Board[]) => void;
    
    activeBoard: string;
    setActiveBoard: (board: string) => void;
}

export const useBoardStore = create<BoardState>((set) => ({
    boards: [],
    setBoards: (boards) => set({ boards }),
    
    activeBoard: '',
    setActiveBoard: (board: string) => set({ activeBoard: board }),
}))