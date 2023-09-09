const express = require('express')
const bodyParser = require('body-parser')
const date = require(__dirname + '/date.js')

const app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')


let itemList = ['do something', 'read something', 'go somewhere']
let workList = []

app.get('/', function(req, res){

    // const currentDay = date.getDay()
    const currentDay = date.getDayMonth()

    res.render('list', {title: currentDay, items: itemList})

})

app.post('/add', function(req, res){
    console.log("hellow")
    console.log(req.body)
    
    const item = req.body.title

    if(req.body.list === 'work'){
        workList.push(item)
        res.redirect('/work')
    }else{
        itemList.push(item)
        res.redirect('/')
    }

})


app.get('/work', function(req, res){
    res.render('list', {title: 'work', items: workList})
})

app.listen(3000, function(){
    console.log('Server Started')
})
