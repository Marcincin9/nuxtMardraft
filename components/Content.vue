<template>
  <div>
      <div id="intro" class="front"> 
        <div class="overlayBg"></div> 
        <div class="content">
        <section class="top-box">
          <div class="container">
              <div class="row entry-copy">
                <div class="grid grid-cols-2">
                    <div class="box-left top-intro">
                        <h3> Creating websites, content management systems and online stores. <br /> Design graphics, mockups and newsletters.</h3>
                    </div>

                    <div class="box-right top-intro">
                         <!-- <img src="@/assets/img/right-img.png" alt="pictue" /> -->
                    </div>
                </div><br>

        </div>
      </div>
  </section>
  <section class="mid-box">
       <div class="who-text entry-copy text-center container">
         <h4>Who we are?</h4>
         <div class="skills-intro">
          <p><a href="http://mardraft.co.uk">Mardraft</a> team creates websites and mockups for individual clients and companies. </p>
          <br />
          <p>We approach each client individually, paying attention to the needs and requirements during<br /> the development of the project, and offer reliable aftercare service.</p>
        </div>
       </div>
         <div class="social-links">
                <div class="icons"> <a href="https://www.facebook.com/Mardraft-Freelance-web-development-109635647881632" target="_blank"><i class="fab fa-facebook-f"></i></a></div>
                <div class="icons"><a href="https://github.com/Marcincin9" target="_blank"><i class="fab fa-github"></i></a></div>
                <div class="icons"><a href="https://www.linkedin.com/in/marcin-olszynski-5b14b2208/" target="_blank"><i class="fab fa-linkedin-in"></i></a></div>
            </div>
  </section>
   <section class="bottom-box">
       <div class="who-text entry-copy text-center">
         <h4>What we use?</h4>

           <div class="row text-center container">
                <div class="grid grid-cols-2">

                    <div class="box-left">
                        <div class="skills-area">
                          <div class="col-xs-2">
                            <i class="lnr lnr-screen"></i>
                          </div>
                          <div class="col-xs-10">
                            <h4>Front-end</h4>
                            <p>JavaScript frameworks, html / css frameworks</p>
                          </div>
                        </div>
                        <div class="skills-area">
                          <div class="col-xs-2">
                            <i class="lnr lnr-database"></i>
                          </div>
                          <div class="col-xs-10">
                            <h4>Back-end</h4>
                            <p>Database, server environments, php frameworks</p>
                          </div>
                        </div>
                    </div>
                   
                    <div class="box-right">
                      <div class="skills-area">
                        <div class="col-xs-2">
                          <i class="lnr lnr-magic-wand"></i>
                        </div>
                        <div class="col-xs-10">
                          <h4>Designing</h4>
                          <p>Mockups and patterns, Graphic design</p>
                        </div>
                      </div>
                      <div class="skills-area">
                        <div class="col-xs-2">
                          <i class="lnr lnr-laptop-phone"></i>
                        </div>
                        <div class="col-xs-10">
                          <h4>CMS</h4>
                          <p>Wordpress, Magento, PrestaShop</p>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
       
           </div>
    </section>
     <section class="mid-box">
       <div class="who-text entry-copy text-center">
         <h4>Our work process.</h4>

           <div class="row text-center container">
                <div class="grid grid-cols-2">

                    <div class="box-left">
                        <div class="skills-area">
                          <div class="col-xs-2">
                            <i class="lnr lnr-screen"></i>
                          </div>
                          <div class="col-xs-10">
                            <h4>Research and Planning</h4>
                            <p>Understending the customer requirements, followed by research and then begins the planning process.</p>
                          </div>
                        </div>
                        <div class="skills-area">
                          <div class="col-xs-2">
                            <i class="lnr lnr-database"></i>
                          </div>
                          <div class="col-xs-10">
                            <h4>Design concepts</h4>
                            <p>Careful planning and testing of the design until the final impression is achieved. </p>
                          </div>
                        </div>
                    </div>
                   
                    <div class="box-right">
                      <div class="skills-area">
                        <div class="col-xs-2">
                          <i class="lnr lnr-magic-wand"></i>
                        </div>
                        <div class="col-xs-10">
                          <h4>Front-End Development</h4>
                          <p>When the design is ready, we start producing HTML CSS and JavaScript for your chosen website.</p>
                        </div>
                      </div>
                      <div class="skills-area">
                        <div class="col-xs-2">
                          <i class="lnr lnr-laptop-phone"></i>
                        </div>
                        <div class="col-xs-10">
                          <h4>Back-End Development</h4>
                          <p>Wordpress, Magento, PrestaShop</p>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
       
           </div>
        </section>

      </div>
     
    </div>    
</div>
</template>

<script>
export default {
    layout: 'default',
}
</script>

<style>

.box-left{
  padding:20px;
  }

.box-right{
  padding:20px;
  
 }

 .top-intro{
  margin-top: 220px;
}


.top-box{
    width: 100%;
    background: url(@/assets/img/bg-top.jpg);
    height: 700px;
    margin-top: 85px;
      background-size: cover;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-position: center;
  box-shadow:inset 0 0 0 2000px rgba(76, 159, 200, 0.538);

}

.mid-box{
  width: 100%;
  background-color: #c5c5c5;
  height: 700px;
}

.bottom-box{
  width: 100%;
  background-color: #ffffff;
  height: 750px;
}

.entry-copy h2{
  margin-top: 100px;
}

.lnr{
  font-size: 1.5em;  
}

.skills-intro, .skills-area{
  padding-top: 35px;
}

.who-text h4{
    font-size: 30px;
    line-height: 50px;
    font-weight: 400;
     padding-top: 140px;
    color: #4C9EC8;

}

.skills h4 {
    font-size: 30px;
    line-height: 50px;
    font-weight: 400;
    margin-bottom: 10px;
    padding-top: 50px;
    color: #4C9EC8;
   
 
}

.skills, .who-text p{
    font-size: 20px;
    color: #000000;
    font-weight: 400;
    text-align: center; ;
}

.skills-area h4 {
    margin: 0px 0px 4px;
    padding: 8px 0 2px;
    font-size: 20px;
    font-weight: 400;
    line-height: 1em;
    color: #4C9EC8;
    margin-bottom: 10px;
}

.skills-area p{

    font-size: 15px;
    color: #000000;
    font-weight: 400;
    margin-bottom: 10px;
}

.drop-shadow-lg {text-shadow:3px 3px 6px rgb(0 0 0 / 26%), 0 0 5px rgb(15 3 86 / 22%) }
.row {
    margin-left: -15px;
    margin-right: -15px;
    
}

.container {
  margin-right: auto;
  margin-left: auto;
  padding-left: 35px;
  padding-right: 35px;
  z-index: 3;
}




@media (min-width: 768px) {
  .container {
    width: 750px;
    padding-left: 15px;
    padding-right: 15px;
  }

}
@media (min-width: 992px) {
  .container {
    width: 970px;
    padding-left: 15px;
    padding-right: 15px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
    padding-left:15px;
    padding-right: 15px;
  }
}

.front h2 {
    font-weight: 110;
    font-size: 35px;
    margin-top:80px;
}
.front h3 {
    font-size: 28px;
    margin-bottom: 50px;
  }

@media (max-width: 967px) {
   
    .boxes{
      margin-left: 0px;
    }

    .bgHeader{
          padding: 20px;
    }

    .top-box{
      margin-top: 0px;
      height: 400px;
    } 

    .top-intro {
    margin-top: 200px;
}
  .front h2 {
    font-weight: 100;
    font-size: 26px;
    margin-top: 40px;
   }
    .front h3 {
    font-size: 15px;
    margin-bottom: 30px;
  }
 
 .front p {
    font-size: 15px;
    padding: 0px;
  }

  .bgFooter p{
    font-size: 12px;
  }
  .box-left{
    padding:10px;
    width: 200px;
}
.box-right{
  padding:10px;
}

.skills-area h4 {
  font-size: 15px;
}

}

/* social icons */

.social-links {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:100px;
  
}
.icons{
  padding:20px;
  position: relative;
  overflow: hidden;
  transition: transform 0.5s;
}

.icons a{
  text-align: center;
  text-decoration: none;
  color: #1c2330;
}

.icons a .fab {
  font-size: 30px;
  position: relative;
  z-index: 2;
  transition: color 0.5s;
}

.social-links a:hover .fab {
  color: #4C9EC8;
}

/* social end */

</style>
