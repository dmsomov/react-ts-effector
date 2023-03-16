import { createEvent } from 'effector';

import { TodoData } from 'store/types';

export const addTodo = createEvent<TodoData>();
