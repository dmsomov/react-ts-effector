import { FC } from 'react';
import { List, Typography } from 'antd';

import { todoAPI } from 'api/todo-api';

export const TodoList: FC = () => {
  const { $todoStore } = todoAPI();
  const todoList = $todoStore.getState();

  return (
    <>
      <Typography.Title level={3}>Todo List</Typography.Title>
      <List
        bordered
        dataSource={todoList}
        renderItem={(item) => <List.Item>{item.title}</List.Item>}
      />
    </>
  );
};
