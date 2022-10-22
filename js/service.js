var serviceHttp = new XMLHttpRequest();
var allservices = [];
serviceHttp.open('GET', `${localStorage.getItem('url')}${localStorage.getItem('language')}/Service/GetWeb`);
serviceHttp.send();
serviceHttp.addEventListener('readystatechange', function(){
    if(serviceHttp.readyState == 4 && serviceHttp.status == 200){
        allservices = JSON.parse(serviceHttp.response).data;
        console.log(allservices);
        displayservices();
    }
})

function displayservices(){
    
    var services = `` ;
    for(var i = 0; i < allservices.length; i++ ){
        
        var stepOne = allservices[i].image.replace("\\",'/');
        var two = stepOne.replace("\\",'/');
        services += `
        <!-- Service Block Four / Style Two -->
			<div class="service-block-four style-two col-xl-3 col-lg-4 col-md-6 col-sm-12">
				<div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
					<div class="image-layer w-100" style="background-image:url(${localStorage.getItem('url_photo')}${two})"></div>
					<div class="post-number">${i+1}</div>
					<div class="icon-box">
						<span class="icon flaticon-plumbing"></span>
					</div>
					<h5><a href="oil-gas.html">${allservices[i].title}</a></h5>
					<div class="text">${allservices[i].description}</div>
					<a class="arrow flaticon-right-arrow-1" onclick="servicedetails(${allservices[i].id})" ></a>
				</div>
			</div>
  `;
  document.getElementById('services').innerHTML = services; 

    }
}

function servicedetails(id){
    allservices.forEach(element => {
        if(id == element.id){

            localStorage.setItem('servicedetail' , JSON.stringify(element));
            window.location.href = "servicedetails.html";
        }
    });
}