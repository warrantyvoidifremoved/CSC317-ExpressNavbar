const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");

app.use(express.static(path.join(__dirname, 'public')));

// Route for Climate Crisis
app.get("/climate-crisis", (req, res) => {
    res.redirect('https://github.com/warrantyvoidifremoved/CSC317-ClimateCrisis')
});

// Route for Typesetting
app.get("/typesetting", (req, res) => {
    res.redirect('https://github.com/warrantyvoidifremoved/CS317-Typesetting')
});

// Route for Four Algorithms
app.get("/four-algorithms", (req, res) => {
    res.redirect('https://github.com/warrantyvoidifremoved/CSC317-FourSortingAlgortihms')
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});