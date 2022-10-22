


var clients_http = new XMLHttpRequest();
var allclients = [];

clients_http.open('GET',`${localStorage.getItem('url')}${localStorage.getItem('language')}/Client/GetWeb`);
clients_http.send();
clients_http.addEventListener('readystatechange', function(){
    if(clients_http.readyState == 4 && clients_http.status == 200){
        allclients = JSON.parse(clients_http.response).data;
        console.log(JSON.parse(clients_http.response));
        //here the function that will show the html 
        displayclients();
        console.log(url_andalos);
    }
})


function displayclients(){
    
    var clients = `` ;

    for(let client of allclients ){
        clients += `

        <div class="team-block-three  col-lg-3 col-md-6 col-sm-12" >

        <div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
        <div class="image">
            <img src="https://alandalusbimexdevapi.wecancity.com/${client.image}" alt="" />
            <div class="overlay-box">
                <h5><a href="team-detail.html">${client.title}</a></h5>
                <div class="designation">Industrial Manager</div>
            </div>
        </div>
    </div>      
    </div>  
  `;


  document.getElementById('client').innerHTML = clients; 
    }
}