<template>
    <div class="welfare">
        <div class="welfare_tit">微信图书</div>
        <div class="welfare_con"></div>
    </div>
</template>
  
  <script>
 export default {
     name: 'WelFare',
     props: {
       msg: String
     },
     data() {
       return {
         showList:[
            {
                name:"每日一答",
                brief:"挑战连续答对12道题",
                btn_name:"玩一玩",
                img:""
            },
            {
                name:"读书小队",
                brief:"3人成对·共赞积分兑大奖",
                btn_name:"立即组队",
                img:""
            },
            {
                name:"周二翻一翻",
                brief:"第228期 08.08 - 08.15",
                btn_name:"翻一翻",
                img:""
            },
            {
                name:"周六组队抽体验卡",
                brief:"第253期 08.05 - 08.12",
                btn_name:"玩一玩",
                img:""
            },
            {
                name:"周五集赞得12天体验卡",
                brief:"第195期 08.04 - 08.11",
                btn_name:"玩一玩",
                img:""
            },
            {
                name:"周四免费图书馆",
                brief:"第316期 08.03 - 08.10",
                btn_name:"玩一玩",
                img:""
            },
         ]
       }
     },
   }
  </script>
  <style>
  .welfare{
    width: 100%;
    /* height: 800px; */
    overflow: auto;
    background-color: bisque;
  }
  .welfare_tit{
    width: 100%;
    font-size: 18px;
     font-weight: bold;
    height:90px ;
    line-height: 70px;
    text-align: center;
}
.welfare_con{
    width: 90%;
    height: 1000px;
    background-color: brown;
    margin: 0 auto;
}
  </style>
  