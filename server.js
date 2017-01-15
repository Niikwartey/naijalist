// =====START GLOBAL CONST DECLARATION=====
const
  express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

// =======================================
// SETUP MIDDLEWARE FOR API
app.set("view engine", "ejs");
app.use(express.static("public"))

// ROUTES
app.get("/", (req, res) => {
  res.render("index");
})

// START SERVER
app.listen(port, () => {
  console.log(`\nThe magic is port is: ${port}\n`)
})
