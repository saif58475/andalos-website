// getting products from the api 
var myproduct = new XMLHttpRequest();
var allpro = [];
myproduct.open('Get','https://alandalusbimexdevapi.wecancity.com/api/en/Product/GetWeb');
myproduct.send();

myproduct.addEventListener('readystatechange', function() {
    if(myproduct.readyState == 4 && myproduct.status == 200 ){
    allproducts = JSON.parse(myproduct.response);
    console.log(allproducts.data);
    allpro = allproducts.data;
    viewproducts();
    secondview();
    }

})
function viewproducts(){

    var products = `` ;
    for(var i = 0; i < allpro.length; i++ ){
  products += `
  <div class="product-block col-lg-3">
					<div class="inner-box ">
						<div class="color-layer"></div>
						<div class="image-box">
							<div class="rounded-circle">
								<a href="oil-gas.html" >
                                <img src="https://alandalusbimexdevapi.wecancity.com/${allpro[i].image}" alt="" />
                                </a>
							</div>
						</div>
						<h5><a href="oil-gas.html">${allpro[i].title}</a></h5>
						<h5><a href="oil-gas.html">${allpro[i].productCategoryTitle}</a></h5>
						<div class="lower-box clearfix">
							<div class="pull-left">
								<div class="price">${allpro[i].titleAr}</div>
							</div>
							<div class="pull-right">
								<div class="rating">
									<span class="fa fa-star"></span>
									<span class="fa fa-star"></span>
									<span class="fa fa-star"></span>
									<span class="fa fa-star"></span>
									<span class="fa fa-star"></span>
								</div>
							</div>
						</div>
						<div class="btn-box text-center">
							<a class="read-more" href="oil-gas.html">Buy now <span class="flaticon-next-3"></span></a>
						</div>
					</div>
				</div>              
  `;


  document.getElementById('test-2').innerHTML = products; 
    }

}
// end of getting products from the api 


function secondview(){

    var products = `` ;
    for(var i = 0; i < allpro.length; i++ ){
  products += `
  <div class="news-block col-lg-3">
					<div class="inner-box">
						<div class="image">
							<div class="category">${allpro[i].titleAr}</div>
							<img src="images/resource/news-1.jpg" alt="" />
							<div class="overlay-box">
								<div class="content">
									<ul class="post-meta">
										<li><span class="icon flaticon-user-2"></span>by <span class="theme-color"></span>Admin</li>
										<li><span class="icon flaticon-calendar-2"></span>August 05, 2021 <span class="theme-color"></span></li>
									</ul>
									<h5>${allpro[i].title}</h5>
								</div>
							</div>
							<div class="overlay-box-two">
								<div class="image-layer" style="background-image:url(images/resource/news-4.jpg)"></div>
								<span class="post-date">18th <br> MAY’21</span>
								<div class="overlay-inner">
									<div class="overlay-content">
										<h5 ><a href="blog-detail.html" class="text-danger">${allpro[i].titleAr}</a></h5>
										<div class="text-danger">${allpro[i].description}</div>
										<a href="blog-detail.html" class="read-more">Read more <span class="flaticon-next-3"></span></a>
									</div>
								</div>
							</div>
						</div>
					</div>
			</div>
  
  `




    document.getElementById('secondcarosel').innerHTML = products;
}

}

function datasend(){
	formValue()
	// alert('wowo');
	const form = document.querySelector('form');
 
form.addEventListener("submit", (e) => {
	insertForm();
})
};

function formValue(){
	const name =document.getElementById("name").value;
	const email =document.getElementById("email").value;
	const mobile =document.getElementById("mobile").value;
	console.log(name  , email , mobile);

	return name  , email , mobile;
}

function insertForm(){
	const name =document.getElementById("name").value;
	const email =document.getElementById("email").value;
	const mobile =document.getElementById("mobile").value;
	const message =document.getElementById("message").value;
	const organization =document.getElementById("organization").value;
	const productId =document.getElementById("product").value;
	const serviceId =document.getElementById("service").value;
	const inquiryTypeId =document.getElementById("inquiryType").value;
	
	let data = {
		    name: name,
			email: email,
			mobile: mobile,
			message: message,
			inquiryTypeId:1,
			organization: organization,
			inquiryTypeId : 1,
	}
	fetch(`${localStorage.getItem('url')}${localStorage.getItem('language')}/ContactInquiry/Create`, {
		method: 'POST', // or 'PUT'
		
		body: JSON.stringify(data),
		headers: {"Content-type": "application/json; charset=UTF-8"}
	  })
		.then((response) => {
			alert('the data is sent')
		})
		.catch((error) => {
		  console.error('Error:', error);
		});


}
