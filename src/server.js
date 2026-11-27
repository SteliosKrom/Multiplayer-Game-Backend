import express from 'express';

const app = express();
const PORT = 3000;

app.get("/", function(req, res){
    res.send("Multiplayer Game Server is running!");
});

app.listen(PORT, function() {
    console.log(`Server is running on port ${PORT}`);
});

app.get("/api/health", function(req, res){
    res.json({ status: "OK", message: "Backend is running!"});
})