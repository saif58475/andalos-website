


var departments_http = new XMLHttpRequest();
var alldepartments = [];

departments_http.open('GET',`${localStorage.getItem('url')}${localStorage.getItem('language')}/Department/GetWeb`);
departments_http.send();
departments_http.addEventListener('readystatechange', function(){
    if(departments_http.readyState == 4 && departments_http.status == 200){
        alldepartments = JSON.parse(departments_http.response).data;
        console.log(JSON.parse(departments_http.response));
        //here the function that will show the html 
        displaydepartments();
   
    }
})


function displaydepartments(){
    
    var departments = `` ;

    for(var i = 0; i < alldepartments.length; i++ ){
        departments += `
        
        <!-- Service Block Three -->
        <div class="service-block-three col-lg-3 col-md-6 col-sm-12">
            <div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div class="color-layer">
                    <span class="color-one"></span>
                    <span class="color-two"></span>
                    <span class="color-three"></span>
                    <span class="color-four"></span>
                </div>
                <div class="icon-box">
                <h5><a>${alldepartments[i].title}</a></h5>
                </div>
                <div class="text">Do eiusmod tempor incididunt ut labore et dolore magna aliqua maecenas facilisis.</div>
                <div class="text">Do eiusmod tempor incididunt ut labore et dolore magna aliqua maecenas facilisis.</div>
                <div class="text">Do eiusmod tempor incididunt ut labore et dolore magna aliqua maecenas facilisis.</div>
                <div class="text">Do eiusmod tempor incididunt ut labore et dolore magna aliqua maecenas facilisis.</div>
                
            </div>
        </div>

        
  `;

  document.getElementById('department').innerHTML = departments; 
    }
}