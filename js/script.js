$(function(){
    $(window).scroll(function(){
          
      if($(this).scrollTop() == 0){
          $("#to_up").hide()
  
      }else{$("#to_up").show()
  }})
  $("#to_up").click(function(){
    $("html,body").animate(
        {scrollTop:0},800
    )
  })
  $("textarea.code").click(function(e){
    console.log(e.target)
    e.target.select()
    document.execCommand("copy")
  })
  $("textarea.color").click(function(e){
    console.log(e.target)
    e.target.select()
    document.execCommand("copy")
  })
  })