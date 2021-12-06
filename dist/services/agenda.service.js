"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const agenda_1 = require("agenda");
const axios_1 = __importDefault(require("axios"));
const createAgenda = (taskName, time) => {
    const mongoConnectionString = "mongodb+srv://matheuscaet:mongopassword20092021@cluster0.cfpvj.mongodb.net/agenda?authSource=admin&replicaSet=atlas-1023j9-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true";
    const agenda = new agenda_1.Agenda({ db: { address: mongoConnectionString } });
    agenda.define(taskName, () => __awaiter(void 0, void 0, void 0, function* () {
        axios_1.default.post('http://localhost:2021/sendMsg', {
            msg: "Pagamento Aprovado",
            app: "app2"
        });
    }));
    (function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield agenda.start();
            yield agenda.every(time, taskName);
        });
    })();
    return agenda;
};
exports.default = { createAgenda };
