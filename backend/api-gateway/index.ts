require("dotenv").config();
import { Response } from "express";
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




function verifyJWT(req: any, res: any, next: () => void) {
    const token = req.headers["x-access-token"];
    if (!token)
        return res
            .status(401)
            .json({ auth: false, message: "Token não fornecido." });

    jwt.verify(
        token,
        process.env.SECRET,
        function (err: any, decoded: { id: any }) {
            if (err) {
                return res.status(500).json({
                    auth: false,
                    message: "Falha ao autenticar o token.",
                });
            }

            req.userId = decoded.id;
            next();
        }
    );
}

app.post("/login", async (req: any, res: any) => {
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
});

app.post("/logout", function (req: any, res: any) {
    return res.json({ auth: false, token: null });
});

// CONTA
app.get("/conta/saldo", verifyJWT, async (req: any, res: any) => {
    return res.json({ saldo: saldo });
});

app.put("/conta/deposito", verifyJWT, async(req: any, res: any) => {
    saldo += req.valor;
    return res.status(204);
});

app.put("/conta/saque", verifyJWT, async(req: any, res: any) => {
    saldo -= req.valor;
    return res.status(204);
});

app.put("/conta/transferencia", verifyJWT, async(req: any, res: any) => {
    let conta = req.contaDestino;
    saldo -= req.valor;
    return res.status(204);
});

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

app.use((err: Error, res: any) => {
    res.status(500).json({ message: err.message });
});
