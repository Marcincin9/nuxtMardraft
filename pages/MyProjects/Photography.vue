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
                  <img src="@/assets/photo/sunset.jpg" alt="" />
                  <div class="transparent-box">
                    <div class="caption">
                      <p>Sunset</p>
                      <p class="opacity-low">Barmouth Bay</p>
                    </div>
                  </div> 
                </div>
                <div class="img-box rounded-md border-4 border-yellow-300 hover:border-white">
                  <img src="@/assets/photo/rocks.jpg" alt="" />
                  <div class="transparent-box">
                    <div class="caption">
                      <p>Rocks</p>
                      <p class="opacity-low">Kuggar Beach</p>
                    </div>
                  </div>
                </div>               
                <div class="img-box rounded-md border-4 border-yellow-300 hover:border-white">
                  <img src="@/assets/photo/vulcano.jpg" alt="" />
                  <div class="transparent-box">
                    <div class="caption">
                      <p>Mount Teide</p>
                      <p class="opacity-low">Tenerife island</p>
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


