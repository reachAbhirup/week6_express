const express = require("express");
const app = express();

const users = [{
    name:"John",
    kidneys:[{
        healthy:true
    }]
}];

app.get("/", (req, res) => {
    const johnKidneys = users[0].kidneys;
    const noOfKidneys = johnKidneys.length;

    let numberOfHealthyKidneys = johnKidneys.filter(kidney => kidney.healthy).length;
    const numberOfUnHealthyKidneys = noOfKidneys - numberOfHealthyKidneys;

    res.json({
        noOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnHealthyKidneys
    })

});

app.post("/", (req, res) => {

});

app.put("/", (req, res) => {

});

app.delete("/", (req, res) => {

})

app.listen(3000);