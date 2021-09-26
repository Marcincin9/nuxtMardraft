<template>
<div>
  <Header/>
    <div id="intro" class="intro">
             <div class="overlayBg"></div> 
        <div class="content static">
          <div class="container">
              <div class="row">
                <div class="static-intro ">                  
                  <h3>Graphics</h3>
                  <p>Please familiarize yourself with the work that I had the pleasure of doing so far for companies and private persons.</p>
                </div>
  
              <div class="gallery-image">
                <div class="img-box rounded-md border-4 border-yellow-300 hover:border-white" >
                  <img src="@/assets/img/dbsm.jpg" alt="" />
                  <div class="transparent-box">
                    <div class="caption">
                      <p>DBSM - Logo</p>
                      <p class="opacity-low">Driving School</p>
                    </div>
                  </div> 
                </div>
                <div class="img-box rounded-md border-4 border-yellow-300 hover:border-white">
                  <img src="@/assets/img/quilling.jpg" alt="" />
                  <div class="transparent-box">
                    <div class="caption">
                      <p>Quilling Art - Logo</p>
                      <p class="opacity-low">Paper quilling</p>
                    </div>
                  </div>
                </div>               
                <div class="img-box rounded-md border-4 border-yellow-300 hover:border-white">
                  <img src="@/assets/img/stork.jpg" alt="" />
                  <div class="transparent-box">
                    <div class="caption">
                      <p>Stork - Logo</p>
                      <p class="opacity-low">Polish Deli</p>
                    </div>
                  </div> 
                </div>              
              </div>
                <NuxtLink to="/projects">BACK</NuxtLink>
         </div>                 
       </div> 
      </div>
    </div>
    <Footer />


</div>
</template>


