<template>
  <div>
      <div id="intro" class="front image-background"> 
        <div class="overlayBg"></div> 
        <div class="content">
          <div class="container">
              <div class="row text-center">
                <div class="grid grid-cols-2">
                  <h2>
                    <span class="text-yellow-300">Designer</span> <br>
                    UI/UX with a passion for design user experiences.
                  </h2> 
                  <h2>
                    <span class="text-yellow-300">Coder</span> <br>
                      FrontEnd Developer focused on writing a clean code.
                  </h2>
                </div>
          <p class="intro-paragraph">Hello, My name is Marcin Olszynski and I am a Designer / FrontEnd Developer living in Walsall, England</p>
        </div>
      </div>
      </div>
      <div class="socials">
        <svg viewBox="0 0 24 24" fill="#FCD34D" width="3em" height="3em"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
        <svg viewBox="0 0 24 24" fill="#FCD34D" width="3em" height="3em"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
      </div>
    </div>    
</div>
</template>

<script>
export default {
    layout: 'default',
}
</script>

<style scoped>

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

.socials{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 85px;  
  }
.socials svg{
  margin-right: 20px;
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
