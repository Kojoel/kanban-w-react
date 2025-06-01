import { create } from 'zustand';
import type { Board, Column, Task } from '../interfaces/board';

interface BoardState {
    boards: Board[];
    setBoards: (boards: Board[]) => void;
    
    activeBoard: string;
    setActiveBoard: (board: string) => void;

    boardContent: Column[];
    setBoardContent: (activeBoard: Column[]) => void;

    task: Task;
    setTask: (task: Task) => void; 

    subtaskModal: boolean;
    setSubtaskModal: (value: boolean) => void;
}

export const useBoardStore = create<BoardState>((set) => ({
    boards: [],
    setBoards: (boards) => set({ boards }),
    
    activeBoard: '',
    setActiveBoard: (board: string) => set({ activeBoard: board }),

    boardContent: [],
    setBoardContent: (activeBoard: Column[]) => set({ boardContent: activeBoard }),

    task: {
        title: '',
        description: '',
        status: '',
        subtasks: [],
    },
    setTask: (task) => set({ task }),

    subtaskModal: false,
    setSubtaskModal: (value) => set({ subtaskModal: value }) 
}))