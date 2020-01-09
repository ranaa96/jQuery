
$('.card-footer button').first().click( function(){
    $('tbody').append(' <tr><td><input type="tel"></td><td><button class="btn btn-warning">Remove</button></td></tr>')
});
// $('tbody button') هتتنفذ ف الاول قبل ما يدوس كليك اصلا فمش هيجيب الجداد
// $('tbody button').click (function(){
//     $(this).parent().parent().remove();
// })
$('table').on('click','tbody button',function(){ $(this).parent().parent().remove();});

$('.card-footer button').last().click( function(){
    var telArr = [];
    var i = 0 ;
  for ( var e of   $('input'))

  {
    telArr[i]= $(e).val();
    i++;

  }
for ( var a of  telArr){
    console.log(a )    ;

}
  
});
