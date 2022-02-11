const express = require('express');
const userRoutes = express.Router();
const { v4: uuid } = require('uuid');

const { data } = require('../mock/data');

userRoutes.get('/users', async (req, res) => {
	try {
		res.status(200).json(data);
	} catch (err) {
		res.status(500).json({ message: 'Internal Server Error' });
	}
});

userRoutes.post('/register', async (req, res) => {
	try {
		const id = uuid();
		const { username, password } = req.body;
		const obj = {
			id: id,
			username,
			password,
		};
		res.status(200).json(obj);
	} catch (err) {
		res.status(500).json({ message: 'Internal Server Error' });
	}
});

userRoutes.post('/login', async (req, res) => {
	try {
		const { username, password } = req.body;
		if (username && password) {
			const obj = {
				username,
				password,
			};
			res.status(200).json(`Welcome ${obj.username}`);
		} else {
			res.status(400).json({ message: 'Username and Password are required!' });
		}
	} catch (err) {
		res.status(500).json({ message: 'Internal Server Error' });
	}
});

module.exports = userRoutes;
