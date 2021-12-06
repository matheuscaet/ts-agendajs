import express from 'express';
import { Container } from 'typedi'
import {AgendaService} from './services/agenda.service'



const app = express();

app.use(express.json)
app.use('/send' , (req, res) => {
    try 
    {
        Container.get(AgendaService).createAgenda(req.body.taskName, req.body.time)
        res.status(201).send() 
    } catch (error) {
        res.status(500).send(error)
    }

})

app.listen(1000, ()=> {
    console.log('listening on' + 1000)
})