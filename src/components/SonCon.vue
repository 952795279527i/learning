<template>
    <div id="app">
      <HelloWorld/>
      <ConTent/>
      <div class="theme">
         <div class="theme_vue">
           <ul>
             <li 
             v-for="(item) in showList"
             :key="item.id"
             @click="changeComponent(item)"
             :class="{ active: item.isActive }"
             >{{item.name}}</li>
           </ul>
         </div>
         <div>
        <component :is="currentComponent"></component>
      </div>
       </div>
    </div>
  </template>
  
  <script>
  import HelloWorld from './HelloWorld.vue'
  import ConTent from './ConTent.vue'
  import OneTag from './OneTag.vue'
  import THemeNev from './THemeNev.vue'
  import TowTag from './TwoTag.vue'
  import ThreeTag from './ThreeTag.vue'
  import FourTag from './FourTag.vue'
  import FiveTag from './FiveTag.vue'
  export default {
    name: 'App',
    components: {
      HelloWorld,
      ConTent,
      OneTag,
      THemeNev,
      TowTag,
      ThreeTag,
      FourTag,
      FiveTag
    },
    data() {
       return {
         showList:[
           {
             id:1,
             name:"推荐",
             component:OneTag,
             isActive: true
           },
           {
             id:2,
             name:"分类",
             component:TowTag,
             isActive: false
           },
           {
             id:3,
             name:"排名",
             isActive: false,
             component:ThreeTag
           },
           {
             id:4,
             name:"文学艺术",
             isActive: false,
             component:FourTag
           },
           {
             id:5,
             name:"哲学社科",
             isActive: false,
             component:FiveTag
           },
         ],
         currentComponent: "推荐",
       }
     },
     methods: {
       
      changeComponent(item) {
        this.currentComponent = item.component;
        this.showList.forEach((listItem) => {
          listItem.isActive = (listItem === item);
        });
      },
    },
    mounted() {
    document.title = "微信阅读-书城"
    this.currentComponent = this.showList.find(item => item.isActive).component;
  },
  }
  </script>
  
  <style>
  .theme{
   width: 100%;
  
  }
  .theme_vue{
   width: 100%;
   height: 50px;
   position: sticky;
   top: 140px;
   background-color: #fff;
   z-index: 100;
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
  .theme_con{
   width: 375px;
  }
  .active {
    color: rgb(27, 136, 238) !important;
  }
  </style>
  