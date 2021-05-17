import axios from 'axios';
import { useState } from 'react';

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

const useAjax = () => {
	const [list, setList] = useState([]);

	const _addItem = async (item) => {
		item.due = new Date();
		const results = await axios.post(todoAPI, item);
		setList([...list, results.data]);
	};

	const _toggleComplete = async (id) => {
		let item = list.filter((i) => i._id === id)[0] || {};

		if (item._id) {
			item.complete = !item.complete;
			let url = `${todoAPI}/${id}`;

			const results = await axios.put(url, item);
			setList(
				list.map((listItem) =>
					listItem._id === item._id ? results.data : listItem,
				),
			);
		}
	};

	const _getTodoItems = async () => {
		const results = await axios.get(todoAPI);
		setList([...results.data.results]);
	};

	const _deleteTask = async (id) => {
		let item = list.find((i) => i._id === id) || {};

		if (item._id) {
			item.complete = !item.complete;
			let url = `${todoAPI}/${id}`;

			const results = await axios.delete(url);
			setList(list.filter((listItem) => listItem._id !== results.data._id));
		}
	};

	return [list, _addItem, _toggleComplete, _getTodoItems, _deleteTask];
};

export default useAjax;