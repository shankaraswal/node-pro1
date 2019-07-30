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
       console.log(req.body.item);
       data.push(req.body.item);
       res.sent(data)
    })


    app.delete('/remove/:id', (req, res)=>{

        console.log(req.params.id)

    })

    // app.get('/profile/:id', (req, res) => {
       
    //     res.render('home', {
    //         data: data
    //     })
    // });
}