export interface BoardData {
  boards: Board[];
}

export interface Board {
  name: string;
  isActive: string; // Consider using `boolean` if appropriate
  columns: Column[];
}

export interface Column {
  name: string;
  tasks: Task[];
}

export interface Task {
  title: string;
  description: string;
  status: string;
  subtasks: Subtask[];
}

export interface Subtask {
  title: string;
  isCompleted: boolean;
}
