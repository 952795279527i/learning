<template>
     <div class="tbody">
      <div class="con-top">
        <div class="contop_banner">
          <div class="image"></div>
          <div class="xinxi">
            <p>要看到明天第一束光</p>
            <p>体验卡剩余1天</p>
          </div>
         <div class="feedback">反馈</div>
        </div>
        <div class="zhanzian">
          <div class="zhanzian_1">
            <img src="https://weread-1258476243.file.myqcloud.com/weread/cover/75/cpplatform_vkins1c9mzkmfbt3kjlrn9/t6_cpplatform_vkins1c9mzkmfbt3kjlrn91677476708.jpg">
            <img src="https://weread-1258476243.file.myqcloud.com/weread/cover/43/cpplatform_uksuobynut7k8guvdp7jpb/t6_cpplatform_uksuobynut7k8guvdp7jpb1690794764.jpg">
            <img src="https://weread-1258476243.file.myqcloud.com/weread/cover/75/cpPlatform_dbb14284a55f1e733b60202b0777255d/t6_cpPlatform_dbb14284a55f1e733b60202b0777255d.jpg">
          </div>
          <div class="shu">
            <p>书<br>架</p>
            <span>></span>
          </div>
        </div>
      </div>
     </div>
  </template>
  
  <script>
  export default {
    name: 'ConTent',
    props: {
      msg: String
    },
  }

  </script>
  <style>
  .tbody{
    width: 100%;
}
.con-top{
  width: 90%;
  height: 150px;
  margin: 20px auto;
  border-radius: 10px;
  background-color: rgb(87, 89, 96);
}
.contop_banner{
  width: 100%;
  height: 50px;
  border-radius: 10px 10px 0 0 ;
}
.xinxi{
  float: left;
  width: 230px;
  height: 100%;
  font-size: 13px;
  color: #fff;
  line-height: 50px;
}
.xinxi p:nth-child(1){
  display: inline-block;
}
.xinxi p:nth-child(2){
  margin-left: 10px;
  color: rgb(169, 170, 174);
  display: inline-block;
}
.image{
  float: left;
  width: 25px;
  height: 24px;
  border-radius: 30px;
  margin: 13px 5px;
  background-color: #fff;
}
.feedback{
  float: right;
  width: 50px;
  height: 30px;
  margin: 10px 0;
  border-radius: 15px 0 0 15px;
  font-size: 13px;
  text-align: center;
  line-height: 30px;
  color: #fff;
  background-color: rgba(105, 107, 112);
}
.zhanzian{
  width: 100%;
  height: 85px;
}
.zhanzian_1{
  float: left;
  margin-left: 25px;
  width: 250px;
}
.zhanzian_1 img{
  height: 80px;
  margin: 0 5px;
}
.shu {
  width: 50px;
  height: 85px;
  float: right;
}
.shu p{
 margin: 22px 2px;
 float: left;
  width: 20px;
  color: #fff;
  font-size: 14px;
}
.shu span{
  float: left;
 margin: 32px 2px;
 color: rgb(131, 132, 137);
}
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