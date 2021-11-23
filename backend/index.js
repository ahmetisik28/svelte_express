import express from "express"
import cors from "cors"

const data = [
    { manufacturer: "Roland", model: "806", year: "1992"},
    { manufacturer: "KBA", model: "142", year: "1993" },
  ]

let app = express()
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.get("/", (request, response)=>{
    response.send(data)
})

app.listen(5000, () => {
    console.log(`Example app listening at http://localhost:5000`)
  })
