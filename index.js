
const fs = require('fs');
const express = require('express');
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
const products = data.products;

const morgan = require('morgan');
const server = express();

//body parser m=built in middle ware
server.use(express.json());


//third party middleware
server.use(morgan('default'));

// built-in middleware 
server.use(express.static('public'));



//application  level middleware..
// server.use((req,res,next) =>{
//     console.log(req.method,req.ip,req.hostname);
//     next();

// })
//route level middleware..

const auth = (req,res,next) =>{
    // console.log(req.query);
    // if(req.body.password==="123"){
    //     next();
    // }
    // else{
    //     res.sendStatus(401);
    // }

    next();
  
    

}
// server.use(auth);
// API -Endpoint -Routes
server.get('/products/:id',auth,(req,res)=>{
    console.log(req.params);
})
server.get('/',(req,res) =>{
    res.json({type : 'GET'})
});
server.post('/',auth,(req,res)=>{
    res.json({type:'POST'})

});

server.put('/',(req,res)=>{
    res.json({type : 'PUT'})
});
server.patch('/',(req,res)=>{
    res.json({type : 'PATCH'})
});
server.delete('/',(req,res)=>{
    res.json({type : 'DELETE'})
});





// server.get('/',(req,res) =>{
//     res.sendStatus(404);
//     res.json(products);
    // res.send('<h1>hello</h1>');
    // res.sendFile('./index.html');

// })
server.listen(8080,()=>{
    console.log('server startted');

})
