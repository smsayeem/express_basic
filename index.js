//main entry point file. this could app.js or server.js
// we are creating here simple ExpressJS server

const express = require("express"); //bring express as variable
const path = require("path"); //node module
const routers = require("./routes/api/members");
const logger = require("./middleware/logger");

const PORT = process.env.PORT || 5000;
const app = express(); //initialise express

// init middleware
// app.use(logger);
// app.get("/", (req, res) => {
//   res.send("Hello  world!!");
// });

// Body parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//set static folder
app.use(express.static(path.join(__dirname, "public")));

// Members API routes
app.use("/api/members", require("./routes/api/members"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
