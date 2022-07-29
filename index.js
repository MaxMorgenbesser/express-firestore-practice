import express from "express"
import { dbconnect } from "./fsConnect.js";
const app = express();
app.use(express.json())

app.listen(3001, () => {
    console.log("Now listening on port 3001");
  });

app.get('/',(req,res)=>{
    res.send('this works')
}
)

app.post('/addCeleb',(req,res)=>{
    const newCeleb=req.body
    const db=dbconnect()
    db.collection('celebs').add(newCeleb)
    .then(res.send('Success')
        
    )
}
)