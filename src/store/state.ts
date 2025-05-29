import { create } from 'zustand';
import type { Board, Column } from '../interfaces/board';

interface BoardState {
    boards: Board[];
    setBoards: (boards: Board[]) => void;
}

export const useBoardStore = create<BoardState>((set) => ({
    boards: [],
    setBoards: (boards) => set({ boards }),
}))