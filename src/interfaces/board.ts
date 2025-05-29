interface BoardData {
  boards: Board[];
}

interface Board {
  name: string;
  isActive: string; // Consider using `boolean` if appropriate
  columns: Column[];
}

interface Column {
  name: string;
  tasks: Task[];
}

interface Task {
  title: string;
  description: string;
  status: string;
  subtasks: Subtask[];
}

interface Subtask {
  title: string;
  isCompleted: boolean;
}
