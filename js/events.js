var eventsHttp = new XMLHttpRequest();
var allevents = [];

eventsHttp.open('GET', `${localStorage.getItem('url')}${localStorage.getItem('language')}/Event/GetWeb`);
eventsHttp.send();
eventsHttp.addEventListener('readystatechange' , function(){
    if(eventsHttp.readyState == 4 && eventsHttp.status == 200){
allevents = JSON.parse(eventsHttp.response).data;
displaycareers();
    }
})


function displaycareers(){
    
    var events = `` ;
    for(var i = 0; i < allevents.length; i++ ){
        var stepOne = allevents[i].image.replace("\\",'/');
        var two = stepOne.replace("\\",'/');
        events += `
        <!-- News Block Four -->
        <div class="news-block-four">
            <div class="inner-box">
                <div class="image">
                    <a href="blog-detail.html"><img src="${localStorage.getItem('url_photo')}${two}" alt="" /></a>
                </div>
                <div class="lower-content">
                    <ul class="post-info">
                        <li class="my-3">${allevents[i].title}</li><br>
                        <li><span class="icon flaticon-calendar"></span>${allevents[i].dateFrom}</li>
                        <li><span class="icon flaticon-calendar"></span>${allevents[i].dateTo}</li>
                        <li><span class="icon flaticon-maps-and-flags"></span>${allevents[i].location}</li>
                    </ul>
                    <h3><a href="blog-detail.html">${allevents[i].title}</a></h3>
                    <div class="text">${allevents[i].description}</div>
                    <a class="explore" href="#">Read More <span class="flaticon-plus"></span></a>
                </div>
            </div>
        </div>         
           
  `;


  document.getElementById('eventt').innerHTML = events; 
    }
}