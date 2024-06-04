export interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

export type NewTask = Pick<Task, 'title' | 'summary'> & {
  date: string;
};
