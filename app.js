/*
  INITIAL SETTINGS
*/
// import libraries and set-up
const
  express = require('express'),
  app = express();

// configuration
app.set("view engine", "ejs");
app.use(express.static("public"))

/*
  APPLICATION
*/
// ROUTES
app.get("/", (req, res) => {
  res.render("landing");
})

app.get("/listings", (req, res) => {
  // const campgrounds; // = jquery AJAX response
  res.render("listings", {});
})

// START SERVER
app.listen(3000, () => {
  console.log("\nThe magic is port is 3000\n")
})
