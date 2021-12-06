import { Agenda } from 'agenda'
import axios from "axios";


const createAgenda = (taskName: string, time: string): Agenda => {
    const mongoConnectionString = "mongodb+srv://matheuscaet:mongopassword20092021@cluster0.cfpvj.mongodb.net/agenda?authSource=admin&replicaSet=atlas-1023j9-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true"
    const agenda = new Agenda({ db: { address: mongoConnectionString } })

    agenda.define(taskName , async () => {
        axios.post('http://localhost:2021/sendMsg',  {
            msg:"Pagamento Aprovado",
            app: "app2"
        })
    });

    (async function () {
        await agenda.start()
        await agenda.every(time, taskName)
    })();
    
    return agenda
}

export default {createAgenda}
