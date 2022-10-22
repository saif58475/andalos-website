

$(document).ready(function () {
    $('#preloader').html(`
    <div class="preloader">
    <div class="preloader-close">x</div>
    <div id="handle-preloader" class="handle-preloader">
        <div class="animation-preloader">
            <div class="spinner"></div>
            <div class="txt-loading">
                <span data-text-preloader="A" class="letters-loading">
                    A
                </span>
                <span data-text-preloader="N" class="letters-loading">
                    N
                </span>
                <span data-text-preloader="D" class="letters-loading">
                    D
                </span>
                <span data-text-preloader="A" class="letters-loading">
                    A
                </span>
                <span data-text-preloader="L" class="letters-loading">
                    L
                </span>
                <span data-text-preloader="U" class="letters-loading">
                    U
                </span>
                <span data-text-preloader="S" class="letters-loading">
                    S
                </span>
            </div>
        </div>  
    </div>
</div>`)
})



$(document).ready(function () {
    $('header').html(`
    <div class="header-top">
    <div class="auto-container">
        <div class="clearfix">

            <!-- Top Left -->
            <div class="top-left">
                <span class="text" data-i18n="selectlanguage">select a language</span>
                <select name="language" id="" class="btn p-0 btn-primary">
                    <option value="en" data-i18n="english">English</option>
                    <option value="ar" data-i18n="arabic">Arabic</option>
                </select>
                |
            </div>

            <!-- Top Left -->
            <div class="top-left">
                <div class="text" data-i18n="welcometoourandaluswebsite">| Welcome to our <a
                        href="#" class="text-primary">Andalus</a> WebSite</div>
            </div>

            <!-- Top Right -->
            <div class="top-right pull-right">
                <div class="clock">We'are Open: Sat - Thursday 8:00 am - 6:00 pm</div>
                <div class="social-box">
                    <a href="https://www.facebook.com" target="_blank" class="fa fa-facebook"></a>
                    <a href="https://www.twitter.com" target="_blank" class="fa fa-twitter"></a>
                    <a href="https://www.whatsapp.com" target="_blank" class="fa fa-whatsapp"></a>
                </div>
            </div>

        </div>
    </div>
</div>
<!-- Header Upper -->
<div class="header-upper">
    <div class="auto-container">
        <div class="clearfix">

            <div class="pull-left logo-box">
                <div class="logo"><a href="index.html"><img src="images/logo.png" alt="" title=""></a></div>
            </div>

            <div class="pull-right upper-right clearfix">

                <!--Info Box-->
                <div class="upper-column info-box">
                    <div class="icon-box"><span class="flaticon-telephone"></span></div>
                    <ul>
                        <li><strong data-i18n="CallUsforhelp">Call Us for help!</strong></li>
                        <li>+201033884919</li>
                    </ul>
                </div>

                <!--Info Box-->
                <div class="upper-column info-box">
                    <div class="icon-box"><span class="flaticon-message"></span></div>
                    <ul>
                        <li><strong data-i18n="MailUs">Mail Us</strong></li>
                        <li> Info@Alandalusbimex.Com</li>
                    </ul>
                </div>

            </div>

        </div>
    </div>
</div>
<!-- End Header Upper -->

<!-- Header Upper -->
<div class="header-lower">
    <div class="auto-container">
        <div class="inner-container clearfix">

            <div class="nav-outer">
                <!-- Mobile Navigation Toggler -->
                <div class="mobile-nav-toggler"><span class="icon flaticon-menu-3"></span></div>
                <!-- Main Menu -->
                <nav class="main-menu navbar-expand-md">
                    <div class="navbar-header">
                        <!-- Toggle Button -->
                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>

                    <div class="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                        <ul class="navigation clearfix">
                            <li><a href="index.html" data-i18n="home">Home</a>

                            </li>
                            <li><a href="aboutus.html" data-i18n="aboutus">About us</a></li> 

                        <li class=""><a href="products.html" data-i18n="products">Products</a></li>
                            <li class=""><a href="clients.html" data-i18n="clients">Clients</a>

                            </li>
                            <li class="dropdown"><a href="#" data-i18n="mediacenter">Media Center </a>
                                <ul>
                                    
                                    <li><a href="events.html" data-i18n="events">Events</a></li>
                                    <li><a href="news.html" data-i18n="news">News</a></li>
                                    <li class="dropdown"><a href="videoalbum.html">Video Album</a>
												<ul>
													<li><a href="video.html">Videos</a></li>
												</ul>
											</li>
                                    <li class="dropdown"><a href="photoalbum.html">Photo Album</a>
												<ul>
													<li><a href="photo.html">Photos</a></li>
												</ul>
											</li>
                                   
                                </ul>
                            </li>
                            <li><a href="services.html" data-i18n="services">Services</a> </li>
                            <li><a href="careers.html" data-i18n="careers">Careers</a> </li>
                            <li><a href="contactus.html" data-i18n="contactus">Contact Us</a></li>

                            <li class="dropdown">



                            </li>
                        </ul>
                    </div>
                </nav>

                <!-- Main Menu End-->
              
            </div>

        </div>
    </div>
</div>
<!--End Header Upper-->

<!-- Sticky Header  -->
<div class="sticky-header">
    <div class="auto-container clearfix">
       
        <!--Right Col-->
        <div class="pull-right">
            <!-- Main Menu -->
            <nav class="main-menu">
                <!--Keep This Empty / Menu will come through Javascript-->

            </nav><!-- Main Menu End-->

            <!-- Mobile Navigation Toggler -->
            <div class="mobile-nav-toggler"><span class="icon flaticon-menu-3"></span></div>

        </div>
    </div>
</div><!-- End Sticky Menu -->

<!-- Mobile Menu  -->
<div class="mobile-menu">
    <div class="menu-backdrop"></div>
    <div class="close-btn"><span class="icon fa fa-close"></span></div>

    <nav class="menu-box">
        <div class="nav-logo"><a href="index.html"><img src="images/logo.png" alt="" title=""></a></div>
        <div class="menu-outer">
            <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
        </div>
    </nav>
</div><!-- End Mobile Menu -->

    `)
})


$(document).ready(function () { 
    $('footer').html(` 
    <div class="auto-container">
    <!-- Widgets Section -->
    <div class="widgets-section">
        <div class="row clearfix">

            <!-- Big Column -->
            <div class="big-column col-lg-6 col-md-12 col-sm-12 ">
                <div class="row clearfix">

                    <!-- Footer Column -->
                    <div class="footer-column col-lg-10 col-md-6 col-sm-12">
                        <div class="footer-widget logo-widget">
                            <div class="logo">
                                <a href="index.html"><img src="images/footer-logo.png" alt="" /></a>
                            </div>
                            <div class="text">
                                <p class="text-white">At Al Andalus Group - BIMEX, We focus on meeting the
                                    needs of our local and worldwide customers for Valves, fire hydrant,
                                    Anti-water hammer systems, ductile iron fitting, compact waste water
                                    treatment plants, RO sea water desalination Plants & Potable and sewage
                                    water networks and stations. After about 20 years in business, owning
                                    the Highest Productivity Factory in Egypt and selling more than 6
                                    million valves, our customers remain our first priority.</p>
                            </div>
                            <a href="aboutus.html" class="theme-btn about-btn" data-i18n='aboutus'>About us</a>
                        </div>
                    </div>


                </div>
            </div>

            <!-- Big Column -->
            <div class="big-column col-lg-6 col-md-12 col-sm-12">
                <div class="row clearfix">

                    <!-- Footer Column -->
                    <div class="footer-column col-lg-6 col-md-6 col-sm-12">
                        <div class="footer-widget contact-widget">
                            <h4 data-i18n="Officialinfo">Official info :</h4>
                            <section class="text-white">
    
                                <ul class="">
                                    <li class="my-3">H.Q: <span>31 El-Fareek Ali Ali Amer St. Makaram Abead,
                                            Nasr Ciy, Cairo, Egypt</span></li>
                                    <li class="my-3">Factory: <span>Block 20035, 4th Zone, Industrial Area,
                                            Al-Obour City, Egypt</span></li>
                                    <li class="my-3">Phone: <span>+2.02.2270.6035 - +2.02.2274.8846</span>
                                    </li>
                                    <li class="my-3">Fax: <span>+2.02.2274.1210</span></li>
                                    <li class="my-3">Email: <span>info@alandalusbimex.com</span></li>

                                </ul>


                            </section>
                        </div>
                    </div>

                    <!-- Footer Column -->
                    <div class="footer-column col-lg-6 col-md-6 col-sm-12">
                        <div class="footer-widget instagram-widget">
                            <h4 data-i18n="Locationonmap">Location on map</h4>
                            <div class="map-containera">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13812.522501155237!2d31.343428!3d30.06179!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7c8f0008fa37c6b7!2sAl-Andalus+Group+BIMEX+HQ!5e0!3m2!1sen!2seg!4v1475676441437"
                                    width="408" height="223" frameborder="0" style="border:0"
                                    allowfullscreen></iframe>



                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>

    <div class="footer-bottom">
        <div class="copyright">&copy; 2022 alandalusBimex - All rights reserved to <a
                href="https://wecancity.com/" target="_blank">WeCanCity</a></div>
    </div>

</div>`)
})

