<template>
     <div class="theme">
       <div class="theme_vue">
         <ul>
           <li 
           v-for="(item) in showList"
           :key="item.id"
           >{{item.name}}</li>
         </ul>
       </div>
       <div>
      <component :is="currentComponent"></component>
    </div>
     </div>
 </template>
 
 <script>
 
 export default {
   name: 'THemeNev',
   props: {
     msg: String
   },
   data() {
     return {
       showList:[
         {
           id:1,
           name:"推荐",
         },
         {
           id:2,
           name:"分类",
         },
         {
           id:3,
           name:"排名",
         },
         {
           id:4,
           name:"文学艺术",
         },
         {
           id:5,
           name:"哲学社科",
         },
       ]
     }
   },
   methods: {
     
   }
 }

 </script>
 <style>
.theme{
 width: 100%;
}
.theme_vue{
 width: 100%;
 height: 50px;
}
.theme_vue ul {
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: space-around;
   align-items: center;
}
.theme_vue ul li{
 list-style: none;
 font-size: 20px;
 font-weight: bold;
 color: rgb(133, 140, 150);
 font-family:"新宋体";
}
.theme_vue ul li:nth-child(1){
 color: rgb(27, 136, 238);
}
.theme_con{
 width: 375px;
}
</style>