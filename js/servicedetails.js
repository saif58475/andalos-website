servicerecord = JSON.parse(localStorage.getItem('servicedetail')) ;
displayservicesdetails();

console.log(servicerecord.id);

function displayservicesdetails(){
    

//this is for the servic form 

var fileOne = servicerecord.serviceFile.replace("\\",'/');
    var filetwo = fileOne.replace("\\",'/');
var serviceform = `

     <div class="widget-content">
         <div class="sidebar-title">
             <h4>Download Now</h4>
         </div>
         <ul class="download-list">
             <li><a target="_blank" href="${localStorage.getItem('url_photo')}${filetwo}">File of the service <span class="icon flaticon-edit"></span></a></li>
         </ul>
     </div>
 
                    
` ;

document.getElementById('formservice').innerHTML = serviceform; 













//this is for the service details 
    var stepOne = servicerecord.image.replace("\\",'/');
    var two = stepOne.replace("\\",'/');
    var services = `
    <div class="inner-box">
                        <div class="image">
                            <img src="${localStorage.getItem('url_photo')}${two}" alt="" />
                        </div>
                        <div class="lower-content">
                            <h3>${servicerecord.title}</h3>
                            <p>${servicerecord.description}</p>
                            <h4>Quality Industrial Working</h4>
                            <p>We have more than twenty years of experience. During that time, we’ve become expert in freight transportation by air and all its related services. We work closely with all major airlines around the world. Ongoing negotiations ensure that we always.</p>
                            <!-- Gallery Images -->
                            <div class="gallery-images">
                                <div class="row clearfix">
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <div class="image">
                                            <img src="images/resource/news-12.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <div class="image">
                                            <img src="images/resource/news-13.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End Gallery Images -->
                            
                            <!-- Accordion Outer -->
                            <div class="accordion-outer">
                                <div class="title-box">
                                    <h4>Frequently seif Question</h4>
                                    <div class="text">With whom you will work, it totally depends on your project requirements They are highly trained for quickly response and provide great service to our customers. Experts are give profitability and success of our business growth & marketing.</div>
                                </div>
                                
                                <!-- Accordian Box -->
                                <ul class="accordion-box">

                                    <!--Block-->
                                    <li class="accordion block">
                                        <div class="acc-btn"><div class="icon-outer"><span class="icon icon-plus fa fa-plus"></span> <span class="icon icon-minus fa fa-minus"></span></div>How Much Time The Service Will Take?</div>
                                        <div class="acc-content">
                                            <div class="content">
                                                <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</div>
                                            </div>
                                        </div>
                                    </li>

                                    <!--Block-->
                                    <li class="accordion block active-block">
                                        <div class="acc-btn active"><div class="icon-outer"><span class="icon icon-plus fa fa-plus"></span> <span class="icon icon-minus fa fa-minus"></span></div>How Much Time The Service Will Take?</div>
                                        <div class="acc-content current">
                                            <div class="content">
                                                <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</div>
                                            </div>
                                        </div>
                                    </li>
                                    
                                    <!--Block-->
                                    <li class="accordion block">
                                        <div class="acc-btn"><div class="icon-outer"><span class="icon icon-plus fa fa-plus"></span> <span class="icon icon-minus fa fa-minus"></span></div>How Much Time The Service Will Take?</div>
                                        <div class="acc-content">
                                            <div class="content">
                                                <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</div>
                                            </div>
                                        </div>
                                    </li>
                                    
                                </ul>
                                
                            </div>
                            <!-- End Accordion Outer -->
                            
                        </div>
                    </div>
    ` ;
    
  document.getElementById('servicerecord').innerHTML = services; 

    

    
}


function insertForm(){

	const name =document.getElementById("name").value;
	const email =document.getElementById("email").value;
	const mobile =document.getElementById("mobile").value;
	const message =document.getElementById("message").value;
	const organization =document.getElementById("organization").value;
	const serviceId = servicerecord.id;
	// alert(name);
	// alert(email);
	// alert(mobile);
	// alert(message);
	// alert(organization);
	// alert(serviceId);
	let data = {
		    name: name,
			email: email,
			mobile: mobile,
			message: message,
			serviceId: serviceId,
			organization: organization,
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