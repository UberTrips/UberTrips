
const express                   = require("express");
const path                      = require("path");
const logger                    = require("morgan");
const bodyParser                = require("body-parser");
const PORT                      = process.env.PORT || 3000;
const app                       = express();

// const homeController            = require("./controllers/home_controller")

const apiController             = require("./controller/api_controller")


app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"));



app.use(express.static(path.join(__dirname,"public")))
app.use(logger("dev"))
app.use(bodyParser.json())



// app.use("/", )
app.get('/' , (req, res)=>{
  res.render('home')
})

app.use("/api", apiController)



app.listen(PORT, function(){
  console.log("Server is listening on port : ", PORT);
})

