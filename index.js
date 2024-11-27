const express = require("express");
const app = express();

const users = [{
    name:"John",
    kidneys:[{
        healthy:false
    }]
}];

app.use(express.json());

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
    const isNewKidneyHealthy = req.body.isHealthy;
    users[0].kidneys.push({healthy:isNewKidneyHealthy});

    res.json({
        msg: "Done!"
    })
});

app.put("/", (req, res) => {
    for (let i=0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }

    res.json({});

});

app.delete("/", (req, res) => {

})

app.listen(3000);