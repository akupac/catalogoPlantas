// import multer from 'multer'
import { Router } from 'express'

import { alterarPlanta, buscarPorId, buscarPorNome, inserirPlanta, listarTodasPlantas, removerPlanta } from '../repository/plantaRepository.js';

const endpoint = Router();
// const upload = multer({ dest: 'storage/capasPlantas' })




endpoint.post('/planta', async (req, resp) => {
  try {
      const novoPlanta = req.body;
      
      const plantaInserido = await inserirPlanta(novoPlanta);
      resp.send(plantaInserido);

  } catch (err) {
      resp.status(400).send({
          erro: err.message
      })
  }
})



endpoint.get('/planta', async (req, resp) => {
  try {
      const resposta = await listarTodasPlantas();
      resp.send(resposta);
  } catch (err) {
      resp.status(400).send({
          erro: err.message
      })
  }
})





endpoint.get('/planta/busca', async (req, resp) => {
  try {
    const { nome } = req.query;
      
    const resposta = await buscarPorNome(nome);

    resp.send(resposta);
    
  } catch (err) {
      resp.status(400).send({
          erro: err.message
      })
  }
})





endpoint.get('/planta/:id', async (req, resp) => {
  try {
    const id = Number(req.params.id);
      
    const resposta = await buscarPorId(id);

    resp.send(resposta);

  } catch (err) {
      resp.status(400).send({
          erro: err.message
      })
  }
})






endpoint.delete('/planta/:id', async (req, resp) => {
  try {
    const { id } = req.params;

    const resposta = await removerPlanta(id);
      
    resp.status(204).send();
    
  } catch (err) {
      resp.status(400).send({
          erro: err.message
      })
  }
})






endpoint.put('/planta/:id', async (req, resp) => {
  try {
    const { id } = req.params;
    const planta = req.body;

    const resposta = await alterarPlanta(id, planta);
    
    resp.status(204).send();

  } catch (err) {
      resp.status(400).send({
          erro: err.message
      })
  }
})









export default endpoint;