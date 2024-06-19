const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

const BASE_URL = 'https://jsonplaceholder.typicode.com';

// Função auxiliar para fazer requisições à API JSONPlaceholder
const fetchFromApi = async (endpoint) => {
    try {
        const response = await axios.get(`${BASE_URL}${endpoint}`);
        return response.data;
    } catch (error) {
        throw new Error(`Erro ao buscar dados da API: ${error.message}`);
    }
};

// Rota para /posts
app.get('/posts', async (req, res) => {
    try {
        const data = await fetchFromApi('/posts');
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Rota para /comments
app.get('/comments', async (req, res) => {
    try {
        const data = await fetchFromApi('/comments');
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Rota para /albums
app.get('/albums', async (req, res) => {
    try {
        const data = await fetchFromApi('/albums');
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Rota para /photos
app.get('/photos', async (req, res) => {
    try {
        const data = await fetchFromApi('/photos');
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Rota para /todos
app.get('/todos', async (req, res) => {
    try {
        const data = await fetchFromApi('/todos');
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Rota para /users
app.get('/users', async (req, res) => {
    try {
        const data = await fetchFromApi('/users');
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
