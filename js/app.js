/*
  Please add all Javascript code to this file.
*/




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

var contentDiv = "" ;

/* APIs */

var url1 = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=baddbb89804b4323b1bbb96a1c3f8b4e';
var req = new Request(url1);
var art;

// debugger;
$.ajax({

    url:url1,
    type:"GET",
   // data: {"country":"us" ,"apiKey":"baddbb89804b4323b1bbb96a1c3f8b4e" },
    success:function(data){
      console.log(data.articles);
      art = data.articles;

      art.forEach(t => {
// debugger;
        var imgurl = t.urlToImage;
        var auth = t.author;
        var title = t.title;
        var content = t.content;
        var tempM = temp.replace("#title#",title).replace("#imgurl",imgurl).replace("#aouther#",auth).replace("#cont#",content) ;

      $("#title").text(title)
      $("#aouther").text(auth)      
      $("#cont").text(content)
      $("#imgurl").attr("src",imgurl);

      
      
        $(".articles").append(tempM)
        // $("#popUp")
        
        $('#title2').on('click',function(){
          $("#popUp").removeClass("hidden").removeClass("loader")
          $("article").hide();
            
        });

        $('.closePopUp').on('click',function(){
          $('#popUp').addClass('hidden')       
          $("article").show();
        });
        

        
      });
  

    },error:function(a,b,c){
      console.error(a,b,c);
    }

    
})
    

  $('#searchIcon').on('click',function(){
    $('#searchInput').toggleClass('show-items');
    $('#source').toggleClass('hide-items');
  });
  

console.log();
