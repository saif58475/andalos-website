


var photoalbum_http = new XMLHttpRequest();
var allphotoesalbum = [];

photoalbum_http.open('GET',`${localStorage.getItem('url')}${localStorage.getItem('language')}/PhotoAlbum/GetWeb`);
photoalbum_http.send();
photoalbum_http.addEventListener('readystatechange', function(){
    if(photoalbum_http.readyState == 4 && photoalbum_http.status == 200){
        allphotoesalbum = JSON.parse(photoalbum_http.response).data;
        console.log(JSON.parse(photoalbum_http.response));
        //here the function that will show the html 
        displayphotoalbum();
        
    }
})


function displayphotoalbum(){
    
    var photoesalbum = `` ;

    for(var i = 0; i < allphotoesalbum.length; i++ ){
        photoesalbum += `
        
        <div class="content-side right-sidebar col-lg-4 col-md-12 col-sm-12">
    <div class="service-detail">
        <div class="inner-box">
            <div class="image">
                <img src="${localStorage.getItem('url_photo')}${allphotoesalbum[i].image}" alt="" />
            </div>
            <div class="lower-content">
                <h3>${allphotoesalbum[i].title}</h3>
                <p>ur airfreight staff attaches great importance to customizing the booking process for our customers. That’s why we strive to find the air freight solution that best suits your needs. We’ll ask you when the freight is available, what the required delivery date is, and if there’s potential to save on time or cost. Your answers to these and other questions help us decide if you should book the air freight as direct. We’ll also see if our sea-air service is a better solution for you. </p>
                <div class="options-outer">
                    <div class="row clearfix">
                        <div class="column col-lg-6 col-mg-12 col-sm-12">
                            <ul class="list">
                                <li>Lorem ipsum dolor sit amet adipiscing</li>
                                <li>Eiusmod tempor ut Labore et dolore elit</li>
                                <li>Sedmagna quis suspendisse ultrices gravida.</li>
                            </ul>
                        </div>
                        <div class="column col-lg-6 col-mg-12 col-sm-12">
                            <ul class="list">
                                <li>Lorem ipsum dolor sit amet adipiscing</li>
                                <li>Eiusmod tempor ut Labore et dolore elit</li>
                                <li>Sedmagna quis suspendisse ultrices gravida.</li>
                            </ul>
                        </div>
                    </div>
                </div>
               
             
            </div>
        </div>
    </div>
</div>
  `;


  document.getElementById('photoalbum').innerHTML = photoesalbum; 
    }
}