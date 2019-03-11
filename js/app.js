/*
  Please add all Javascript code to this file.
*/
$(document).ready(function () {
  $("#main").empty();

  $("#source").text("all news")
  getNY();
  getNEWSAPI();

$("#NYnews").on('click', function(){
  $("#main").empty();
  $("#source").text("New York Times")
   getNY();
});

$("#newsapi").on('click', function(){
  $("#source").text("News API")
  $("#main").empty();
  getNEWSAPI();
});





});

/* template */







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

         
 
    art = data.articles;
    console.log(art);



    art.forEach((t ,i) => {
      i= i+20;
      let date = t.publishedAt.toString().substring(5, 10)
      
      $("#main").append(`
      <article class="article">
      <section class="featuredImage">
        <img src="${t.urlToImage}" alt="" />
      </section>
      <section class="articleContent">
          <a id="article_${i}" href="#"><h3>${t.title}</h3></a>
          <h6>${t.author}</h6>
      </section>
      <section class="impressions">
      ${date}
      </section>
      <div class="clearfix"></div>
    </article>
  `)


  });
  art.forEach((t ,i) => {
    i= i+20;
    $(`#article_${i}`).on("click", function () {
    pupUp(t.title, t.content,t.author,t.urlToImage,t.url);
    });
    });


   
  },error:function(a,b,c){
    console.error(a,b,c);
  }      
});
  
};


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

         
        // console.log(data2.results);
        art2 = data2.results;
        console.log(art2);



        art2.forEach((t ,i) => {
          let date = t.created_date.toString().substring(2, 7)
          
          $("#main").append(`
          <article class="article">
          <section class="featuredImage">
            <img src="${t.thumbnail_standard}" alt="" />
          </section>
          <section class="articleContent">
              <a id="article_${i}" href="#"><h3>${t.title}</h3></a>
              <h6>${t.byline}</h6>
          </section>
          <section class="impressions">
          ${date}
          </section>
          <div class="clearfix"></div>
        </article>
      `)


      });
      art2.forEach((t ,i) => {
        $(`#article_${i}`).on("click", function () {
        pupUp(t.title, t.abstract,t.byline,t.multimedia[3].url,t.url);
        });
        });

        // function pupUp(title,abstract,byline,thumbnail_standard,url){
        //   $("#popUp").removeClass("hidden").removeClass("loader")
        //   $("article").hide();
        //         $("#title").h(title)
        //         $("#aouther").text(byline)
        //         $("#cont").text(abstract)
        //         $(".popUpAction").attr('href', url)
        //         $("#imgurl").attr('src',thumbnail_standard)
        //          }  

      },error:function(a,b,c){
        console.error(a,b,c);
      }      
  });
};

  //-------- End API2 ---------- //

  function pupUp(title,abstract,byline,urlToImage,url){
    $("#popUp").removeClass("hidden").removeClass("loader")
    $("article").hide();
          $("#title").html(title)
          $("#aouther").html(byline)
          $("#cont").html(abstract)
          $(".popUpAction").attr('href', url)
          $("#imgurl").attr('src',urlToImage)
           }  
  
 
    
  $('.closePopUp').on('click',function(){
    $('#popUp').addClass('hidden')       
    $("article").show();
  });         


  $('#searchIcon').on('click',function(){
    $('#searchInput').toggleClass('show-items');
    $('#source').toggleClass('hide-items');
  });
  


