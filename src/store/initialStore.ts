import { TodoData } from './types';

export const initialTasks: Array<TodoData> = [
  {
    id: new Date('2017-01-26'),
    status: false,
    title: 'Complete me',
  },
  {
    id: new Date('2017-01-24'),
    status: true,
    title: 'Im done',
  },
];
