<template>
    <div class="welfare">
        <div class="welfare_tit">微信图书</div>
        <div class="welfare_con">
          <ul>
            <li v-for="(item,i) in showList" :key="i">
              <img :src="item.img">
              <div class="btm">
                <div class="btm_left">
                  <p>{{item.name}}</p>
                  <p>{{ item.brief }}</p>
                </div>
                <div class="btm_right">
                  <button>{{ item.btn_name }}</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="welfare_ending">
          <p>你还可以通过“阅读时长积累”获得无限卡</p>
          <p>1.阅读即送无限卡。阅读时间越长，赠送无限卡越多。每周最多可获得4天无限卡。</p>
        </div>
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
                img:"http://localhost:8080/learning/img/001.46d39bf5.png"
            },
            {
                name:"读书小队",
                brief:"3人成对·共赞积分兑大奖",
                btn_name:"立即组队",
                img:"http://localhost:8080/learning/img/002.fffc908e.png"
            },
            {
                name:"周二翻一翻",
                brief:"第228期 08.08 - 08.15",
                btn_name:"翻一翻",
                img:"http://localhost:8080/learning/img/003.9bf3ff85.png"
            },
            {
                name:"周六组队抽体验卡",
                brief:"第253期 08.05 - 08.12",
                btn_name:"玩一玩",
                img:"http://localhost:8080/learning/img/004.678ee0f6.png"
            },
            {
                name:"周五集赞得12天体验卡",
                brief:"第195期 08.04 - 08.11",
                btn_name:"玩一玩",
                img:"http://localhost:8080/learning/img/005.09813e81.png"
            },
            {
                name:"周四免费图书馆",
                brief:"第316期 08.03 - 08.10",
                btn_name:"玩一玩",
                img:"http://localhost:8080/learning/img/006.58c5789a.png"
            },
         ]
       }
     },
   }
  </script>
  <style>
  *{
    margin: 0;
    padding: 0;
  }
  .welfare{
    width: 100%;
    background-color:rgb(247, 247, 247);
    position: relative;
  }
  .welfare_tit{
    position: sticky;
    top: 0;
    z-index: 99;
    width: 100%;
    height:90px ;
    font-size: 18px;
    font-weight: bold;
    line-height: 70px;
    text-align: center;
    background-color:rgb(247, 247, 247);
}
.welfare_con{
    width: 90%;
    overflow: auto;
    margin: 0 auto;
}
.welfare_con ul li{
  width: 100%;
  list-style: none;
  height: 200px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px 1px #ccc;
  background-color: #fff;
  margin-bottom: 20px;
}
.welfare_con ul li img{
  width: 100%;
  height:130px;
  float: left;
  border-radius:10px 10px 0px 0px;
}
.btm{
  width: 100%;
  height: 70px;
  float: right;
}
.btm_left{
  width: 60%;
  height: 100%;
  padding-left: 5%;
  float: left;
}
.btm_left p:nth-child(1){
  font-family: "新宋体";
  font-size: 19px;
  font-weight: bold;
  margin: 10px 0;
}
.btm_left p:nth-child(2){
  font-size: 14px;
  color: rgb(173, 180, 190);
}
.btm_right{
  width: 35%;
  height: 100%;
  float: right;
}
.btm_right button{
  font-size: 18px;
  font-family: "新宋体";
  background-color: #e8be90;
  border: none;
  border-radius: 20px;
  padding: 5px 0;
  width: 80px;
  margin: 18px 22px;
}
.welfare_ending{
  width: 90%;
  height: 200px;
  padding: 0 5%;
}
.welfare_ending p:nth-child(1){
  font-size: 15px;
  margin-bottom: 20px;
}
.welfare_ending p:nth-child(2){
  font-size: 13px;
  color: #858c96;
  line-height: 20px;
}
  </style>
  