const express = require("express");
const app = express();

const users = [{
    name:"John",
    kidneys:[{
        healthy:false
    }]
}];

app.get("/", (req, res) => {
    const johnKidneys = users[0].kidneys;
    const noOfKidneys = johnKidneys.length;
    
    let numberOfHealthyKidneys = 0;
    for (let i=0; i<noOfKidneys; i++){
        if(johnKidneys.healthy ){
            numberOfHealthyKidneys= numberOfHealthyKidneys + 1;
        }
    }
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