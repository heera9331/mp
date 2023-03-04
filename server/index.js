const express = require('express');
const path = require('path');


const app = express();
app.use(express.static(path.resolve(__dirname,'../client/build')));

app.get('/api', (req,res) => {
    res.json({"message": "Hello from server"});
});

app.get('*', function(req, res){
    res.sendFile(path.resolve(__dirname,'../client/build', 'index.html'));
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=> {
    console.log(`Server has started on port ${PORT}`);
});