const express = require("express");
const app = express();

const users = [{
    name:"John",
    kidneys:[{
        healthy:false
    }]
}];

app.get("/", (req, res) => {

});

app.post("/", (req, res) => {

});

app.put("/", (req, res) => {

});

app.delete("/", (req, res) => {
    
})

app.listen(3000);