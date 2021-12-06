"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const agenda_service_1 = __importDefault(require("./services/agenda.service"));
const app = express();
app.use(express.json());
app.post("/send", (req, res) => {
    try {
        const agenda = agenda_service_1.default.createAgenda(req.body.taskName, req.body.time);
        res.status(201).send(agenda);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
app.listen(3010, () => {
    console.log('listening on ' + 3010);
});
