const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(express.json());
app.use(cors());

app.listen(2024,()=>{
    console.log("Currently server is running in port 2024");
})