$(document).ready(function(){
  $("a").on('click', function(e){
  	e.preventDefault()
    $("div").removeClass('squish')
    $(this).find("+ div").addClass('squish')
  })
})