<template>
<div>
  <Header/>
    <div id="intro" class="intro">
             <div class="overlayBg"></div> 
        <div class="content static">
          <div class="container">
              <div class="row">
                <div class="static-intro ">                  
                  <h3>Webpages</h3>
                  <p>Projekty stron internetowych dla klientów z różnych krajów</p>
                </div>
  
              <div class="gallery-image">
                <div class="img-box rounded-md border-4 border-yellow-300 hover:border-white">
                  <img src="@/assets/img/dbsmschool.jpg" alt="" />
                  <div class="transparent-box">
                    <div class="caption">
                      <p>DBSM</p>
                      <p class="opacity-low">Driving School</p>
                    </div>
                  </div> 
                </div>
                <div class="img-box rounded-md border-4 border-yellow-300 hover:border-white">
                  <img src="@/assets/img/reifen.jpg" alt="" />
                  <div class="transparent-box">
                    <div class="caption">
                      <p>Reifen Boerse</p>
                      <p class="opacity-low">Tyres and Autocare</p>
                    </div>
                  </div>
                </div>
                <div class="img-box rounded-md border-4 border-yellow-300 hover:border-white">
                  <img src="@/assets/img/transport.jpg" alt="" />
                  <div class="transparent-box">
                    <div class="caption">
                      <p>Ruminscy Transport</p>
                      <p class="opacity-low">Transport and services</p>
                    </div>
                  </div>
                </div>
                <div class="img-box rounded-md border-4 border-yellow-300 hover:border-white">
                  <img src="@/assets/img/slr.jpg" alt="" />
                  <div class="transparent-box">
                    <div class="caption">
                      <p>SLR Automaten</p>
                      <p class="opacity-low">Gaming machines</p>
                    </div>
                  </div> 
                </div>
                <div class="img-box rounded-md border-4 border-yellow-300 hover:border-white">
                  <img src="@/assets/img/quillingart.jpg" alt="" />
                  <div class="transparent-box">
                    <div class="caption">
                      <p>Quillingart</p>
                      <p class="opacity-low">Paper quilling</p>
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


<style>

.gallery-image {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.gallery-image img {
  transform: scale(1.0);
  transition: transform 0.4s ease;
}

.img-box {
  box-sizing: content-box;
  margin: 10px;
  overflow: hidden;
  display: inline-block;
  color: rgb(0, 0, 0);
  position: relative;
  background-color: rgb(0, 0, 0);
}

.caption {
  position: absolute;
  bottom: 5px;
  opacity: 0.0;
  transition: transform 0.3s ease, opacity 0.3s ease;
  background-color: #FCD34D;
  padding:30px;
}
.caption p{
  margin-left: 5px;
  color: #000;  
}

.transparent-box {
  height: 100%;
  width: 100%;
  background-color:rgba(0, 0, 0, 0);
  position: absolute;
  top: 0;
  left: 0;
  transition: background-color 0.3s ease;
  
}

.img-box:hover img { 
  transform: scale(1.1);
}

.img-box:hover .transparent-box {
  background-color:rgba(0, 0, 0, 0.5);
}

.img-box:hover .caption {
  transform: translateY(-20px);
  opacity: 1.0;
}

/* .img-box:hover {
  cursor: pointer;
} */

.caption > p:nth-child(2) {
  font-size: 0.9em;
}

.opacity-low {
  opacity: 0.5;
}
</style>