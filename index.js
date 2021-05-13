const express = require('express');
const PORT = 8080;
let dataString = "test";
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.get('/', (req, res) => {
res.render('top.ejs', { stock: 5 });
});
app.listen(process.env.PORT || PORT);