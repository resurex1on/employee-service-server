const express = require('express');
const { Sequelize } = require('sequelize');
const app = express();

app.use(express.json());

app.listen(3001, async () => {
    console.log('Server is listening on the port 3001');
    const sequelize = new Sequelize('employee-service', 'user', 'user123', {
        host: 'localhost',
        dialect: 'mysql'
    });

    try {
        await sequelize.authenticate();
        console.log('db was connected')
    } catch (error) {
        console.error(error)
    }
});
