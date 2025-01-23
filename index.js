const express = require("express")
const cors = require("cors");
const bodyparser = require("body-parser")

const app = express();

const port = 4000;

app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))

app.get('/',(req, res)=>{
    res.send("This is webpage");
})

app.get('/ourpartners',(req, res)=>{
    res.send("your partners");
})

app.listen(port, ()=>{
    console.log('server running on port...............${PORT}');
})