import express from 'express';
import healthRoutes from './routes/healthRoutes.js';

const app = express();
const PORT = 3000;

app.use("/api/health", healthRoutes);

app.get("/", function(req, res){
    res.send("Multiplayer Game Server is running!");
});

app.listen(PORT, function() {
    console.log(`Server is running on port ${PORT}`);
});