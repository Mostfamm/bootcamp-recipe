const render = function(rec){
    $('#recipes').empty()
    let newHTML=template({recs:rec})
    $('#recipes').append(newHTML)
}
const fetch = function(){
   let input=$('#input').val()
   console.log('/recipes/'+input);
   $.get('/recipes/'+input,function(recipes){
       render(recipes)
   })

}