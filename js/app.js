/*
  Please add all Javascript code to this file.
*/
$(document).ready(function () {
  getNY();

$("#NYnews").on('click', function(){
   getNY();
});

$("#newsapi").on('click', function(){
  $("article").hide();
  getNEWSAPI();
});

});

/* template */



var temp = '  <article class="article">'+
'<section class="featuredImage">'+
  `<img src="#imgurl#" alt="" />`+
'</section>'+
'<section class="articleContent">'+
   '<a href="#" id="title2" ><h3>#title#</h3></a>'+
  '  <h6>#aouther#</h6>'+
'</section>'+
'<section class="impressions">'+
 ' 526'+
'</section>'+
'<div class="content" style="margin:20px" > #cont# </div>'+
'<div class="clearfix"></div>'+
'</article>';


var pupup= '<div class="container">'+
  '<h1 id="title">#title#</h1>'+
  '<h5 id="aouther">#aouther#</h5>'+
  '<img style="width:100%" id="imgurl" src="#imgurl#" alt="" />'+
  '<p id="cont">#cont#</p>'+
  '<a href="#" class="popUpAction" target="_blank">Read more from source</a>'+
'</div>';


/* APIs */



//---------- start API 1 -----------//
function getNEWSAPI() {

var url1 = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=baddbb89804b4323b1bbb96a1c3f8b4e';

var art;

$.ajax({
  
  url:url1,
  type:"get",

  success:function(data){

     
    console.log(data.articles);
    art = data.articles;
    var imgurl = '';
    var auth = '';
    var title = '';
    var content = '';
    var tempM ='';
    let num = 0 ;
    art.forEach(t => {
      
// // debugger;
imgurl = t.urlToImage;
         auth = t.author;
         title = t.title;
         content = t.content;
         tempM = temp.replace("#title#",title).replace("#imgurl#",imgurl).replace("#aouther#",auth).replace("#cont#",content) ;
    

  $("article").on("click", function () {
    $("#popUp").removeClass("hidden").removeClass("loader")
    $("article").hide();
       
    $("#title").text(`${t.title}`)
    $("#aouther").text(`${t.author}`)
    $("#cont").text(`${t.content}`)
    // $(".popUpAction").attr('href', `${t.url}`)
    $("#imgurl").attr(src,`${t.urlToImage}`)
        
  });      
$('.closePopUp').on('click',function(){
$('#popUp').addClass('hidden')       
$("article").show();
});  
      $(".articles").append(tempM)
      // $("#popUp").append(pupup1)
      // $("#popUp")
    });
  },error:function(a,b,c){
    console.error(a,b,c);
  }      
})
};

// debugger;
// $.ajax({

//     url:url1,
//     type:"GET",
//    // data: {"country":"us" ,"apiKey":"baddbb89804b4323b1bbb96a1c3f8b4e" },
//     success:function(data){
//       $(".article").remove();
//       // console.log(data.articles);
//       art = data.articles;
//       var imgurl = '';
//       var auth = '';
//       var title = '';
//       var content = '';
//       var tempM ='';
//       art.forEach(t => {
// // debugger;
//          imgurl = t.urlToImage;
//          auth = t.author;
//          title = t.title;
//          content = t.content;
//          tempM = temp.replace("#title#",title).replace("#imgurl#",imgurl).replace("#aouther#",auth).replace("#cont#",content) ;
//          pupup1 = pupup.replace("#title#",title).replace("#imgurl#",imgurl).replace("#aouther#",auth).replace("#cont#",content) 
//       // $("#title").text(title)
//       // $("#aouther").text(auth)      
//       // $("#cont").text(content)
//       // $("#imgurl").attr("src",imgurl);

      
// $('#title2').on('click',function(){
  
//   $("#popUp").removeClass("hidden").removeClass("loader")
//   $("article").hide();
//     });

// $('.closePopUp').on('click',function(){
//   $('#popUp').addClass('hidden')       
//   $("article").show();
// });

//         $(".articles").append(tempM)
//         $("#popUp").append(pupup1)
//         // $("#popUp")
//       });
//     },error:function(a,b,c){
//       console.error(a,b,c);
//     }

    
// });
// }
//-------- End API1 ---------- //

//---------- Start API 2 -----------//

function getNY() {
  $("article").hide();
  var url2 = 'https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=GJlAIjuyZ00wUOIGmCZeWDbuEtuCnUuK' ;
             
 
  var art2;
  $.ajax({
  
      url:url2,
      type:"get",
      data: { api_key : "GJlAIjuyZ00wUOIGmCZeWDbuEtuCnUuK"},
      success:function(data2){

         
        console.log(data2.results);
        art2 = data2.results;
        var imgurl = '';
        var auth = '';
        var title = '';
        var content = '';
        var tempM ='';
        let num = 0 ;
        art2.forEach(t => {
          
  // // debugger;
           imgurl = t.thumbnail_standard;
           auth = t.byline;
           title = t.title;
           content = t.abstract;
           tempM = temp.replace("#title#",title).replace("#imgurl#",imgurl).replace("#aouther#",auth).replace("#cont#",content) ;
          //  pupup1 = pupup.replace("#title#",title).replace("#imgurl#",imgurl).replace("#aouther#",auth).replace("#cont#",content) ;
        // $("#title").text(title)
        // $("#aouther").text(auth)      
        // $("#cont").text(content)
        // $("#imgurl").attr("src",imgurl);
  
        
  // $('#title2').on('click',function(){

  //     });
  
      $("article").on("click", function () {
        $("#popUp").removeClass("hidden").removeClass("loader")
        $("article").hide();
        console.log($(this).attr('id') - 1);
        let index = $(this).attr('id') - 1
        $("#title").text(`${t.title}`)
        $("#aouther").text(`${t.byline}`)
        $("#cont").text(`${t.abstract}`)
        $(".popUpAction").attr('href', `${t.url}`)
        $("#imgurl").attr(src,`${t.imgurl}`)
            
      });      
  $('.closePopUp').on('click',function(){
    $('#popUp').addClass('hidden')       
    $("article").show();
  });  
          $(".articles").append(tempM)
          // $("#popUp").append(pupup1)
          // $("#popUp")
        });
      },error:function(a,b,c){
        console.error(a,b,c);
      }      
  })
};

  //-------- End API2 ---------- //


    
  $('#searchIcon').on('click',function(){
    $('#searchInput').toggleClass('show-items');
    $('#source').toggleClass('hide-items');
  });
  


