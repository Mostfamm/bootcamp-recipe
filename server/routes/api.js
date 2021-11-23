/*const express=require('express')
const router=express.Router()


router.get('/sanity',(req,res)=>{
res.send('ok')
})

let recipe
router.get('/recipes/:recipes',(req,res)=>{
     recipe=req.params.recipes
    let rec
    var urllib = require('urllib');
urllib.request("https://recipes-goodness.herokuapp.com/recipes/"+recipe,  (err,data, res) => {
   rec=JSON.parse(data) 
      
})
console.log(rec);

    })

module.exports=router*/
const express=require('express')
const router=express.Router()
//const request= require('request')

var urllib = require('urllib');
let ingredients=[]
urllib.request('https://recipes-goodness.herokuapp.com/recipes/tomato',  (err,data, res) => {
    ingredients=JSON.parse(data).results
})
router.get('/recipes/:recipe',(req,res)=>{
//let recipe=req.params.recipe
let recipes=ingredients
.map(d=>{return{ingredients: d.ingredients,title:d.title,thumbnail:d.thumbnail,href:d.href}})
//console.log(recipes);
res.send(recipes)
})


module.exports=router