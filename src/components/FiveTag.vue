<template>
    <div class="fivetag">
        <ul>
            <li 
            v-for="(item,index) in booksWithRecommendLabel"
            :key="index"
            @click="Clickhim(index)"
            >
               <div class="sort_figure">{{ index+1 }}</div> 
               <img :src="item.img">
               <div class="particulars">
                <p>{{ item.name }}</p>
                <p>{{ item.zuo }}</p>
                <p>推销值 {{ item.tui }}% <span style="color: red;">{{item.recommendLabel}}</span></p>
               </div>
               <div class="browse">
                <svg t="1691251531531" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3143" width="16" height="16"><path d="M512 1255.489906M888.810714 711.048571c-20.570058-48.713172-50.145912-92.514092-87.704177-130.072357s-81.359184-67.13412-130.072357-87.704177c-14.020388-5.935639-28.347791-11.052568-42.879872-15.35079 59.151709-38.274635 98.44973-104.897062 98.44973-180.525285 0-118.508095-96.402958-214.911053-214.911053-214.911053s-214.911053 96.402958-214.911053 214.911053c0 75.628223 39.298021 142.25065 98.44973 180.525285-14.532081 4.298221-28.859484 9.415151-42.879872 15.35079-48.713172 20.570058-92.514092 50.145912-130.072357 87.704177s-67.13412 81.359184-87.704177 130.072357c-21.388767 50.452928-32.134319 104.078353-32.134319 159.341195 0 14.122726 11.461923 25.584649 25.584649 25.584649s25.584649-11.461923 25.584649-25.584649c0-95.686588 37.251249-185.642215 104.897062-253.288027 67.645813-67.645813 157.601439-104.897062 253.288027-104.897062 95.686588 0 185.642215 37.251249 253.288027 104.897062s104.897062 157.601439 104.897062 253.288027c0 14.122726 11.461923 25.584649 25.584649 25.584649s25.584649-11.461923 25.584649-25.584649C920.945033 815.126924 910.097142 761.501499 888.810714 711.048571zM347.848891 297.293624c0-90.262642 73.479113-163.741755 163.741755-163.741755s163.741755 73.479113 163.741755 163.741755-73.479113 163.741755-163.741755 163.741755S347.848891 387.556266 347.848891 297.293624z" fill="#272636" p-id="3144"></path></svg>
                  {{ item.browse }}
               </div> 
            </li>
        </ul>
    </div>
   </template>
   <script>
   import jsonData from './data.json';
   export default {
     name: 'FourTag',
     props: {
       msg: String
     },
     data(){
        return{
            users:[]
        }
     },
     mounted() {
        
       let ser = jsonData.filter((item) => {
            return item.category == "哲学社科"
        }); 
        this.users = ser[0].books
        console.log(this.users);
     },
     computed: {
    booksWithRecommendLabel() {
      return this.users.map((item) => {
        if (item.tui >= 90) {
          item.recommendLabel = "神作";
        } else if (item.tui > 85 && item.tui < 90) {
          item.recommendLabel = "好评如潮";
        } else {
          item.recommendLabel = "脍炙人口";
        }
        return item;
      });
    }
  },
  methods:{
    Clickhim(index){
        if (this.users[index].clicked) {
            return;
         }

    this.users[index].browse = parseInt(this.users[index].browse) + 1;
    this.users[index].clicked = true;
    }
  }
   }
   </script>
   <style>
   .fivetag{
    width: 100%;
   }
   .fivetag ul li{
    width: 100%;
    height: 120px;
    margin-bottom: 30px;
   }
   .sort_figure{
    width: 50px;
    height: 100%;
    text-align: center;
    font-weight: bold;
    line-height: 120px;
    float: left;
   }
   .fivetag ul li img{
    float: left;
    height: 120px;
    width: 80px;
   }
   .particulars{
    float: left;
    width: 160px;
    height: 100px;
    padding: 10px 8px;
   }
   .particulars p:nth-child(1){
    font-family: "新宋体";
    font-weight: bold;
    font-size: 18px;
   }
   .particulars p:nth-child(2){
    font-size: 15px;
    font-family: "新宋体";
    color: rgb(151, 154, 158);
    margin-top: 5px;
   }
   .particulars p:nth-child(3){
    font-size: 13px;
    color: rgb(157, 163, 173);
    margin-top: 5px;
   }
   .browse{
    height: 20px;
    width: 46px;
    line-height: 20px;
    margin:10px;
    float: right;
    font-size: 12px;
    color: rgb(153, 160, 170);
   background-color: rgb(242, 239, 239);
   border-radius: 8px;
   }
   .browse svg{
    float: left;
   }
   .fivetag ul li:last-child{
    margin-bottom: 50px;
   }
   </style>