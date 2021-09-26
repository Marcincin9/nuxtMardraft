<template>
<div>
  <Nuxt />
</div>
</template>

<style>
.bgContent {
    padding-top: 45px;
    padding-bottom: 45px;
    background-color: #fff;
}

.row {
    margin-left: -15px;
    margin-right: -15px;
    
}

.front.image-background {
    background: #008388 url('../assets/img/dark-wallpaper.jpg') center center no-repeat;
    background-size: auto;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    -webkit-backface-visibility: hidden;
}
.overlayBg{
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #004950 none repeat scroll 0 0;
    opacity: 0.80;
    filter: alpha(opacity=80);
    z-index: 2;

}

.front .content{
position: relative;
width: 100%;
z-index: 3;
top: 50%;
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
.front {
    padding-top: 100px;
    padding-bottom: 60px;
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 800px;
    text-align: left;
    color: #e4e4e4;
}
.front h2 {
    font-weight: 110;
    font-size: 40px;
    margin-bottom: 50px;
    margin-top:150px;
}
.front p {
    font-size: 19px;
    color: #f5f5f5;
    opacity: 0.8;
}
@media (max-width: 767px) {
  .front h2 {
    font-weight: 100;
    font-size: 28px;
    margin-top: 40px;
    margin-bottom: 50px;
  }
 
 .front p {
    font-size: 18px;
  }

}
</style>