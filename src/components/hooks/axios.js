import axios from 'axios';
import { useContext } from 'react';
import { PaginationContext } from '../context/pagination';


const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

const useAjax = () => {
	const paginationContext = useContext(PaginationContext);

	const _addItem = async (item) => {
		item.due = new Date();
		const results = await axios.post(todoAPI, item);
		paginationContext.setList([...paginationContext.list, results.data]);
	};

	const _toggleComplete = async (id) => {
		let item = paginationContext.list.filter((i) => i._id === id)[0] || {};

		if (item._id) {
			item.complete = !item.complete;
			let url = `${todoAPI}/${id}`;

			const results = await axios.put(url, item);
			paginationContext.setList(
				paginationContext.list.map((listItem) =>
					listItem._id === item._id ? results.data : listItem,
				),
			);
		}
	};

	const _getTodoItems = async () => {
		const results = await axios.get(todoAPI);
		paginationContext.setList([...results.data.results]);
		paginationContext.setItems([...results.data.results]);
	};

	const _deleteTask = async (id) => {
		let item = paginationContext.list.find((i) => i._id === id) || {};

		if (item._id) {
			item.complete = !item.complete;
			let url = `${todoAPI}/${id}`;

			const results = await axios.delete(url);
			paginationContext.setList(paginationContext.list.filter((listItem) => listItem._id !== results.data._id));
		}
	};

	return [ _addItem, _toggleComplete, _getTodoItems, _deleteTask];
};

export default useAjax;