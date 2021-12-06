import { Agenda } from 'agenda'
import { Axios } from 'axios'

export class AgendaService{

    createAgenda(taskName: string, time: string): Agenda{
        const mongoConnectionString = "mongodb+srv://matheuscaet:mongopassword20092021@cluster0.cfpvj.mongodb.net/agenda?authSource=admin&replicaSet=atlas-1023j9-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true"
        const agenda = new Agenda({ db: { address: mongoConnectionString } })
        const axios = new Axios()

        agenda.define(taskName , async () => {
            axios.post('localhost:2021/sendMsg', {body: {
                msg:"Pagamento Aprovado",
                app: "app1"
            }})
        });

        (async function () {
            await agenda.start();

            await agenda.every(time, taskName);

            // Alternatively, you could also do:
            //await agenda.every("*/3 * * * *", taskName);
        })();

        return agenda
    }
}