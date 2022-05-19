<template>

    <div class="bgFooter py-md shadow-inner">
      <div class="footMargin">      
          <p>This site uses cookies. Use of this site constitutes acceptance of them. For more, see: <a href="/en/PrivacyPolicy" title="Privacy policy">Privacy policy</a></p>
      
         <span>Copyright &copy; 2022 <a href="http://mardraft.co.uk">www.mardraft.co.uk </a></span>
    </div>
   </div>
</template>

<script>
export default {    
  name: 'Footer',
  layout: 'default',
}
</script>

<style>

.bgFooter{
  font-size: 14px;
  background: #2a3956;
  color: #e4e4e4;
  text-align: center; 
  padding:15px; 
   position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
}

@media (max-width: 767px) {
  .bgFooter {
    font-size: 13px;
    padding:10px;
  }

}


.footMargin{
  padding: 10px 0 10px 0;
}
</style>