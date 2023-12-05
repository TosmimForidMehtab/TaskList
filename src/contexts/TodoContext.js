import { createContext, useContext } from "react";

export const TodoContext = createContext({
	todos: [
		{
			id: 1,
			title: "Todo 1",
			completed: false,
		},
	],
	addTodo: (todo) => {},
	removeTodo: (id) => {},
	updateTodo: (id, todo) => {},
	toggleTodo: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
	return useContext(TodoContext);
};
