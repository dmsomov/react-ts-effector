import { createStore } from 'effector';

import { initialTasks } from './initialStore';

export const $todoStore = createStore(initialTasks);
