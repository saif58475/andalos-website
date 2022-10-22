var newsHttp = new XMLHttpRequest();
var allnews = [];

newsHttp.open('GET', `${localStorage.getItem('url')}${localStorage.getItem('language')}/News/GetWeb`);
newsHttp.send();
newsHttp.addEventListener('readystatechange' , function(){
    if(newsHttp.readyState == 4 && newsHttp.status == 200){
        allnews = JSON.parse(newsHttp.response).data;
displaynews();
    }
})


function displaynews(){
    
    var news = `` ;
    for(var i = 0; i < allnews.length; i++ ){
        var stepOne = allnews[i].image.replace("\\",'/');
        var two = stepOne.replace("\\",'/');
        news += `
        <!-- News Block Four -->
        <div class="news-block-four">
            <div class="inner-box">
                <div class="image">
                    <a href="blog-detail.html"><img src="${localStorage.getItem('url_photo')}${two}" alt="" /></a>
                </div>
                <div class="lower-content">
                    <ul class="post-info">
                        <li class="my-3">${allnews[i].title}</li><br>
                       
                    </ul>
                    <h3><a href="blog-detail.html">${allnews[i].title}</a></h3>
                    <div class="text">${allnews[i].description}</div>
                    <a class="explore" href="#">Read More <span class="flaticon-plus"></span></a>
                </div>
            </div>
        </div>         
           
  `;


  document.getElementById('news').innerHTML = news; 
    }
}