const express = require("express");
const app = express();

const users = [{
    name:"John",
    kidneys:[{
        healthy:false
    }]
}];

app.use(express.json());

// read the current stattus of kidneys of the given user
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

// adding new kidneys regardless of being the kidney to be healthy or unhealthy
app.post("/", (req, res) => {
    const isNewKidneyHealthy = req.body.isHealthy;
    users[0].kidneys.push({healthy:isNewKidneyHealthy});

    res.json({
        msg: "Done!"
    })
});

// modifying all the unhealthy kidneys to healthy ones
app.put("/", (req, res) => {

    if(atLeastOneUnhealthyKidney()){
        for (let i=0; i<users[0].kidneys.length; i++){
            users[0].kidneys[i].healthy = true;
        }
        res.status(201).json({"msg": "Bad kidney fixed"});
    }else{
        res.status(411).json({"msg": "No bad kidneys"})
    }
    

});

// removing all the unhealthy kidneys
app.delete("/", (req, res) => { 

    if(atLeastOneUnhealthyKidney()){
        const healthyKidneys = users[0].kidneys.filter((kidney => kidney.healthy));
        users[0].kidneys = healthyKidneys;

        res.json({"msg": "done!"});
    }else{
        res.status(411).json({
            "msg":"No bad kidneys"
        })
    }


})

const atLeastOneUnhealthyKidney = () => {
    let atleastOneKidneyIsUnhealthy = false;
    atleastOneKidneyIsUnhealthy = (users[0].kidneys.length - 
                                    users[0].kidneys.filter((kidney => kidney.healthy)).length != 0) 
                                    ? true : false; 

    return atleastOneKidneyIsUnhealthy;
}

app.listen(3000);