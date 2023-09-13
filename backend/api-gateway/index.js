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
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
var bodyParser = require("body-parser");
const axios = require("axios").default;
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let saldo = 420.69;
function verifyJWT(req, res, next) {
    const token = req.headers["x-access-token"];
    if (!token)
        return res
            .status(401)
            .json({ auth: false, message: "Token não fornecido." });
    jwt.verify(token, process.env.SECRET, function (err, decoded) {
        if (err) {
            return res.status(500).json({
                auth: false,
                message: "Falha ao autenticar o token.",
            });
        }
        req.userId = decoded.id;
        next();
    });
}
app.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.email === "cliente@cliente.com" && req.password === "cliente") {
        const id = 1;
        const token = jwt.sign({ id }, process.env.SECRET, {
            expiresIn: 2592000,
        });
        return res.json({
            auth: true,
            token: token,
        });
    }
    if (req.email === "gerente@gerente.com" && req.password === "gerente") {
        const id = 2;
        const token = jwt.sign({ id }, process.env.SECRET, {
            expiresIn: 2592000,
        });
        return res.json({
            auth: true,
            token: token,
        });
    }
    if (req.email === "admin@admin.com" && req.password === "admin") {
        const id = 3;
        const token = jwt.sign({ id }, process.env.SECRET, {
            expiresIn: 2592000,
        });
        return res.json({
            auth: true,
            token: token,
        });
    }
    return res.status(500).json({ message: "Login inválido!" });
}));
app.post("/logout", function (req, res) {
    return res.json({ auth: false, token: null });
});
// CONTA
app.get("/conta/saldo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json({ saldo: saldo });
}));
app.put("/conta/deposito", verifyJWT, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    saldo += req.valor;
    return res.status(204);
}));
app.put("/conta/saque", verifyJWT, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    saldo -= req.valor;
    return res.status(204);
}));
app.put("/conta/transferencia", verifyJWT, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let conta = req.contaDestino;
    saldo -= req.valor;
    return res.status(204);
}));
// app.post("/cliente", verifyJWT, async (req: any, res: any) => {
//     try {
//         const response = await axios.post(`${sagaService}/cliente`, {
//             ...req.body,
//         });
//         return res.json(response.data);
//     } catch (error: any) {
//         return res
//             .status(error.status ? error.status : 400)
//             .json({ ERROR: error.message });
//     }
// });
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
app.use((err, res) => {
    res.status(500).json({ message: err.message });
});
