import express = require("express");
import  AgendaService  from './services/agenda.service'

const app = express()
app.use(express.json())
app.post("/send" , (req, res) => {
    try 
    {
        const agenda = AgendaService.createAgenda(req.body.taskName, req.body.time)
        res.status(201).send(agenda) 
    } catch (error) {
        res.status(500).send(error)
    }
})

app.listen(3010, ()=> {
    console.log('listening on ' + 3010)
})