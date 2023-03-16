import { createEvent } from 'effector';

import { TodoData } from 'store/types';

export const updateTodo = createEvent<{
  id: Date;
  data: TodoData;
}>();
