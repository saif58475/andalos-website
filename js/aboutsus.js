var aboutus = new XMLHttpRequest();
var allaboutus = [];
aboutus.open('Get',`${localStorage.getItem('url')}${localStorage.getItem('language')}/About/Get`);
aboutus.send();

aboutus.addEventListener('readystatechange', function() {
    if(aboutus.readyState == 4 && aboutus.status == 200 ){
        allaboutus = JSON.parse(aboutus.response);
    console.log(allaboutus.data);
    allpro = allaboutus.data;
    // viewproducts();
    // secondview();
    viewaboutus();
    }

})

function viewaboutus(){
    var about = `
    <div class="row clearfix">
				<!-- Info Column -->
				<div class="info-column col-lg-4 col-md-6 col-sm-12">
                <div class="image">
                <img src="images/resource/team-17.jpg" alt="" />
            </div>
					<h3 data-i18n="CEOname">CEO Name</h3>
					<div class="designation">Industrial Manager</div>
					<ul class="list">
						<li>
							<span class="icon flaticon-call-1"></span>
							${allpro.phone}
						</li>
						<li>
							<span class="icon flaticon-maps-and-flags"></span>
							${allpro.hqaddress}
						</li>
						<li>
							<span class="icon flaticon-mail"></span>
                            ${allpro.email}
						</li>
					</ul>
					<div class="social-box clearfix">
						<a class="contact-btn theme-btn" href="contact.html">Contact Us <span class="flaticon-right-arrow-2"></span></a>
						<a href="#" class="facebook fa fa-facebook-f"></a>
						<a href="#" class="twitter fa fa-twitter"></a>
						<a href="#" class="youtube fa fa-youtube"></a>
					</div>
				</div>
				<!-- Content Column -->
				<div class="content-column col-lg-8 col-md-12 col-sm-12">
					<h3 data-i18n="aboutus">About Us</h3>
					<p>${allpro.history}</p>
					<p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
					<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from Lorem Ipsum passage, and going through the cites of the word in classical literature.</p>
					
					<h3 data-i18n="CEOMessage">CEO Message</h3>
					<p>${allpro.ceomessage}</p>

					<h3 data-i18n="Ourhistory">Our History</h3>
					<p>${allpro.history}</p>
					
				</div>
			</div> ` ;
  

    document.getElementById('viewaboutus').innerHTML += about;
}