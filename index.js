
const fs = require('fs');
const express = require('express');
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
const products = data.products;


const server = express();
server.use(express.json());

//route level middleware..

//products
// API -Endpoint -Routes
server.get('/products',(req,res)=>{
    res.json(products);
    
})
//GET READ  REQUSET
server.get('/products/:id',(req,res) =>{
   const id = +req.params.id;
    const product = products.find(p =>p.id===id);
    // console.log(product);
    res.json(product)
});
//CREATE POST
server.post('/products',(req,res)=>{
    console.log(req.body);
    products.push(req.body);
    res.status((201).json(req.body));

});
//GET PUT REQQUEST
server.put('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(p =>p.id===id);
    products.splice(productIndex,1,{...req.body,id:id})
    res.status(201).json();
});
//GET PUT REQQUEST
server.patch('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(p =>p.id===id);
    const product= products[productIndex];
    products.splice(productIndex,1,{...product,...req.body})
    res.status(201).json(req.body);
});
//GET PUT REQQUEST
server.delete('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(p =>p.id===id);
    const product= products[productIndex];
    products.splice(productIndex,1)
    res.status(201).json(product);
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
