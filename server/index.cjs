/* eslint-disable */

const path = require("path");
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const fs = require("fs");
require("dotenv").config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.resolve(__dirname, "../dist")));

app.use(cors());
app.use(bodyParser.json());

app.get("/api", (req, res) => {
    res.json({ message: "Hello form the server" });
});

// console.log("MAIL:", process.env.EMAIL_ADDRESS);

const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASS,
    },
});

contactEmail.verify((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("redy to send");
    }
});

app.post(
    "/api/contact",
    bodyParser.urlencoded({ extended: false }),
    (req, res) => {
        const name = req.body.firstName + " " + req.body.lastName;
        const email = req.body.email;
        const message = req.body.message;
        const phone = req.body.phone;
        const mail = {
            from: name,
            to: process.env.EMAIL_ADDRESS,
            subject: "Contact Form Sub",

            html: `<p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Message: ${message}</p>`,
        };
        contactEmail.sendMail(mail, (err) => {
            if (err) {
                res.json(err);
            } else {
                res.json({ code: 200, status: "Message Sent" });
            }
        });
    },
);

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is online on port: ${PORT}`);
});
