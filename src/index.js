require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/user-routes.js');
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use('/api', userRoutes);

server.get('/', (req, res) =>
	res.send(
		"<h1>Welcome to Aaron's API</h1><h3>Test the API at <code>/api/login||register</code></h3>"
	)
);

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
