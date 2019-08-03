const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const {mongourl} =require('./config/keys')
const Wish = require('./models/wish');


mongoose.connect(mongourl, {useNewUrlParser:true});

module.exports = (app) => {
    app.get('/', (req, res) => {
        Wish.find({}).then(data =>{
            res.render('home', {
                mylist: data
            })
        });
    })

    app.get('/about', (req, res) => {
        res.render('about')
    })

    
    app.post('/sent', (req, res) => {
        //    data.push(req.body.item);
        //    res.sent(data)

        const Item = new Wish({
            wish: req.body.item
        })
        Item.save().then(data =>{
            console.log('item saved')
            res.send('post');
        }).catch(err =>{
            throw err;
        })
    })


    app.delete('/remove/:id', (req, res)=>{
        Wish.findOneAndRemove({wish:req.params.id}).then(data =>{
            console.log('record deleted');
            res.send(data);
        })
       
       
        

    })
}