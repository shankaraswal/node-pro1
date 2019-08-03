const express = require('express');
const app = express();

let data =['code', 'sleep', 'eat'];

module.exports = (app) => {
    app.get('/home', (req, res) => {
        res.render('home', {
            mylist: data
        })
    })

    app.get('/about', (req, res) => {
        res.render('about')
    })

    
    app.post('/sent', (req, res) => {
       data.push(req.body.item);
       res.sent(data)
    })


    app.delete('/remove/:id', (req, res)=>{
       
        data = data.map(item=>{
            if(item!==req.params.id){
                return item;
            }

        })
        console.log(data);
        res.send(data);

    })

    // app.get('/profile/:id', (req, res) => {
       
    //     res.render('home', {
    //         data: data
    //     })
    // });
}