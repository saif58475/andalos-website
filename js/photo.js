


var photo_http = new XMLHttpRequest();
var allphotoes = [];

photo_http.open('GET',`${localStorage.getItem('url')}${localStorage.getItem('language')}/Photo/GetWeb`);
photo_http.send();
photo_http.addEventListener('readystatechange', function(){
    if(photo_http.readyState == 4 && photo_http.status == 200){
        allphotoes = JSON.parse(photo_http.response).data;
        console.log(JSON.parse(photo_http.response));
        //here the function that will show the html 
        displayclients();
        console.log(url_andalos);
    }
})


function displayclients(){
    
    var photoes = `` ;

    for(var i = 0; i < allphotoes.length; i++ ){
        photoes += `


        <!-- Feature Block Three -->
        <div class="feature-block-three col-lg-3 col-md-6 col-sm-12">
            <div class="block-inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div class="block-content">
                
                    <span class="icon ">
                    <img src="${localStorage.getItem('url_photo')}${allphotoes[i].image}" class="w-100 " alt="">
                    </span>
                    <h5>${allphotoes[i].title}</h5>
                    <div class="block-text">${allphotoes[i].photoAlbumTitle}</div>
                </div>
            </div>
        </div> 
         
  `;


  document.getElementById('photo').innerHTML = photoes; 
    }
}