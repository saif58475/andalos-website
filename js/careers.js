var careerHttp = new XMLHttpRequest();
var allcareers = [];
careerHttp.open('GET', `${localStorage.getItem('url')}${localStorage.getItem('language')}/Career/GetWeb`);
careerHttp.send();
careerHttp.addEventListener('readystatechange', function(){
    if(careerHttp.readyState == 4 && careerHttp.status == 200){
        allcareers = JSON.parse(careerHttp.response).data;
        console.log(allcareers);
        displaycareers();
    }
})

function displaycareers(){
    
    var careers = `` ;
    for(var i = 0; i < allcareers.length; i++ ){
        careers += `
  
      
        <div class="content-side col-lg-4 col-md-12 col-sm-12">
        <div class="blog-classic" >
      <div class="news-block-four">
          <div class="inner-box">
              <div class="image" style="width: 871px; height:398px">
                  <a href="blog-detail.html" style="width: 871px; height:398px"><img src="https://alandalusbimexdevapi.wecancity.com/${allcareers[i].image}"
                   alt="" /></a>
              </div>
              <div class="lower-content">
                  <ul class="post-info">
                      <li>${allcareers[i].title}</li>
                      <li>number of vacancies : ${allcareers[i].numberOfVacancies}</li>
                  </ul>
                  <h3>${allcareers[i].departmentTitle}</h3>
                  <div class="text">
                  ${allcareers[i].jobDesc}</div>
                  
              </div>
          </div>
      </div>
      </div>
      </div>
          
           
  `;


  document.getElementById('careerr').innerHTML = careers; 

    }
    var categories = ``;
    for(var i = 0; i < allcareers.length; i++){
  categories += `
  <li><a href="#"> ${allcareers[i].departmentTitle} <span>${allcareers[i].numberOfVacancies}</span></a></li>
  
  `
  document.getElementById('categories').innerHTML = categories; 
    }
}