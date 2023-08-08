<template>
    <div class="tingshu">
      <div class="tingshu_tit">微信图书</div>
    </div>
</template>
  
  <script>
 export default {
     name: 'TingShu',
     props: {
       msg: String
     },
   }
  </script>
  <style>
  .tingshu{
    width: 100%;
    height: 800px;
    background-color: blueviolet;
  }
  .tingshu_tit{
    width: 100%;
    font-size: 18px;
     font-weight: bold;
    height:90px ;
    line-height: 70px;
    text-align: center;
}
  </style>