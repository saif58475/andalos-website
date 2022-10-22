// function products(){
//     var productHttp = new XMLHttpRequest();
// var allproducts = [];
// productHttp.open('GET', `${localStorage.getItem('url')}${localStorage.getItem('language')}/Product/GetWeb`);
// productHttp.send();
// productHttp.addEventListener('readystatechange', function(){
//     if(productHttp.readyState == 4 && productHttp.status == 200){
//         allproducts = JSON.parse(productHttp.response).data;
//         console.log(allproducts);
//         displayproducts();
        
//     }
// })

// function displayproducts(){
    
//     var products = `` ;
//     for(var i = 0; i < allproducts.length; i++ ){
//         products += `
//         <!-- Project Block Two -->
//         <div class="inner-box col-lg-6 p-3" >
//         <div class="image">
//             <img src="${localStorage.getItem('url_photo')}${allproducts[i].image}" alt="" />
//             <div class="overlay-box">
//                 <a class="plus flaticon-plus" href="project-detail.html"></a>
//                 <div class="content">
//                     <div class="title">${allproducts[i].title}</div>
//                     <h4><a href="project-detail.html">House Building Wind <br> Energy Plant</a></h4>
//                 </div>
//             </div>
//         </div>
//     </div>
//   `;
//   document.getElementById('products').innerHTML = products; 

//     }
// }

// }




// for product category
function product_category(){
    var categoryHttp = new XMLHttpRequest();
    var allproductcategory = [];
    categoryHttp.open('GET', `${localStorage.getItem('url')}${localStorage.getItem('language')}/ProductCategory/GetWeb`);
    categoryHttp.send();
    categoryHttp.addEventListener('readystatechange', function(){
        if(categoryHttp.readyState == 4 && categoryHttp.status == 200){
            allproductcategory = JSON.parse(categoryHttp.response).data;
            console.log(allproductcategory);
            displayproductcategory();
            
        }
    })
    function displayproductcategory(){
    
        var products = `` ;
        for(var i = 0; i < allproductcategory.length; i++ ){
            products += `
            <div class="inner-box">
							<div class="image">
								<img src="images/gallery/7.jpg" alt="" />
								<div class="overlay-box">
									<a class="plus flaticon-plus" href="project-detail.html"></a>
									<div class="content">
										<div class="title">${allproductcategory[i].title}</div>
										<h4><a href="project-detail.html">House Building Wind <br> Energy Plant</a></h4>
									</div>
								</div>
							</div>
						</div>
      `;
      document.getElementById('category').innerHTML = products; 
    
        }
    }
}