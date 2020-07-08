const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();
/** 
 Rota /Recurso: 

 *Métodos HTTP
 * GET: buscar/listar uma informação do Backend;
 * POST: Criar uma informação no backend;
 * PUT: alterar uma informação no backend;
 * DELETE: deletar uma informação no backend;
 */

/** 
Tipos de Parâmetro:

** Query Params: parâmetro nomeados enviados na rota após "?" (filtros, paginação);
** Route Params: parâmetros utilizados para identificar recursos;
** Request Body: corpo da requisição, que é utilizado para criar ou alterar recursos 
 * 
 */

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profiles', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.post('/sessions', SessionController.create); // para criar uma sessão

module.exports = routes;
