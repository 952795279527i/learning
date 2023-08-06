<template>
    <div class="threetag">
        <div class="soaring">
            <img src="https://weread-1258476243.file.myqcloud.com/assets/ranklist.rising.chart_title.YqPFOS9Gin.png" width="240px" height="36px">
            <ul class="ranking">
                <li 
                v-for="(item,index) in soaringList"
                :key="index"
                >
                    <img :src="item.img">
                    <div class="ranking_div">
                        <p>{{index+1}}&nbsp;{{item.name}}</p>
                        <p>&emsp;{{item.zuoze}}</p>
                    </div>
                </li>
            </ul>
            <div class="soaring_more">查看全部</div>
        </div>
        <div class="new_book">
            <img src="https://weread-1258476243.file.myqcloud.com/assets/ranklist.newbook.chart_title.GWZVW5nl3Z.png" width="240px" height="36px">
            <ul class="ranking1">
                <li 
                v-for="(item,index) in formattBooks"
                :key="index"
                >
                    <img :src="item.img">
                    <div class="ranking1_div">
                        <p>{{index+1}}&nbsp;{{item.name}}</p>
                        <p>&emsp;{{item.zuoze}}</p>
                    </div>
                </li>
            </ul>
            <div class="soaring_more1">查看全部</div>
        </div>
        <div class="all_book">
            <img src="https://weread-1258476243.file.myqcloud.com/assets/ranklist.all.chart_title.JPnYFfuPbm.png" width="240px" height="36px">
            <ul class="ranking2">
                <li 
                v-for="(item,index) in formattAllBooks"
                :key="index"
                >
                    <img :src="item.img">
                    <div class="ranking2_div">
                        <p>{{index+1}}&nbsp;{{item.name}}</p>
                        <p>&emsp;{{item.zuoze}}</p>
                    </div>
                </li>
            </ul>
            <div class="soaring_more2">查看全部</div>
        </div>
    </div>
   </template>
   <script>
   export default {
     name: 'ThreeTag',
     props: {
       msg: String
     },
     data(){
        return {
            soaringList:[
                {
                    name:"资本的秘密",
                    img:"https://weread-1258476243.file.myqcloud.com/weread/cover/25/cpplatform_8numzl8erzinxvfsk3p9jv/t6_cpplatform_8numzl8erzinxvfsk3p9jv1685508354.jpg",
                    zuoze:"赫尔南多·德·索托"
                },
                {
                    name:"让人拍案叫绝的中国史",
                    img:"https://weread-1258476243.file.myqcloud.com/weread/cover/67/YueWen_36235932/t6_YueWen_36235932.jpg",
                    zuoze:"渤海小吏"
                },
                {
                    name:"生活即禅，笑看平凡",
                    img:"https://weread-1258476243.file.myqcloud.com/weread/cover/98/cpPlatform_3300025251/t6_cpPlatform_3300025251.jpg",
                    zuoze:"林帝浣"
                }
            ],
            Newbook:[
                {
                    name:"法医秦明:白卷法医",
                    zuoze:"秦明",
                    img:"https://weread-1258476243.file.myqcloud.com/weread/cover/55/cpplatform_2thuj2jlv1odkiylmdlcjr/t6_cpplatform_2thuj2jlv1odkiylmdlcjr1689825647.jpg"
                },
                {
                    name:"宋慈洗冤笔记(独家首发1-3册)",
                    zuoze:"巫童",
                    img:"https://weread-1258476243.file.myqcloud.com/weread/cover/95/cpplatform_bxra3sweeea8uuujb6jghh/t6_cpplatform_bxra3sweeea8uuujb6jghh1689755652.jpg"
                },
                {
                    name:"饮鸠(独家首发)",
                    zuoze:"一枚铜钱",
                    img:"https://weread-1258476243.file.myqcloud.com/weread/cover/39/cpplatform_uavwwbmcljz28lruduqj72/t6_cpplatform_uavwwbmcljz28lruduqj721690363640.jpg"
                },
                {
                    name:"挣脱 (独家首发|一个律师的女性辩护记录)",
                    zuoze:"刘任侠",
                    img:"https://weread-1258476243.file.myqcloud.com/weread/cover/9/cpplatform_ffxxfh9zishrhh1gdece8z/t6_cpplatform_ffxxfh9zishrhh1gdece8z1690196853.jpg"
                },
            ],
            Allbook:[
                {
                    name:"三体（全集）",
                    zuoze:"刘慈欣",
                    img:"https://weread-1258476243.file.myqcloud.com/weread/cover/80/yuewen_695233/t6_yuewen_6952331677562148.jpg"
                },
                {
                    name:"长安的荔枝",
                    zuoze:"马伯庸",
                    img:"https://weread-1258476243.file.myqcloud.com/weread/cover/43/cpplatform_uksuobynut7k8guvdp7jpb/t6_cpplatform_uksuobynut7k8guvdp7jpb1690794764.jpg"
                },
                {
                    name:"明朝那些事儿(全集)",
                    zuoze:"当年明月",
                    img:"https://weread-1258476243.file.myqcloud.com/weread/cover/61/YueWen_822995/t6_YueWen_822995.jpg"
                },
                {
                    name:"活着",
                    zuoze:"余华",
                    img:"https://wfqqreader-1252317822.image.myqcloud.com/cover/464/834464/t6_834464.jpg"
                },
            ]
        }
     },
     computed: {
    formattBooks() {
      const eleven = 11;
      return this.Newbook.map(book => {
        if (book.name.length > eleven) {
          return {
            ...book,
            name: book.name.slice(0, eleven) + '...'
          };
        } else {
          return book;
        }
      });
    },
    formattAllBooks() {
      const eleven = 11;
      return this.Newbook.map(book => {
        if (book.name.length > eleven) {
          return {
            ...book,
            name: book.name.slice(0, eleven) + '...'
          };
        } else {
          return book;
        }
      });
    }
  }
   }
   </script>
   
   <!-- Add "scoped" attribute to limit CSS to this component only -->
   <style>
      .threetag{
        width: 100%;
      }
      .soaring{
        width: 100%;
        background-color: #fff;
      }
      .soaring>img{
        margin-left: 22px;
      }
      .soaring_more{
        width: 90%;
        height: 50px;
        margin: 0 auto 30px;
        border-radius: 20px;
        text-align: center;
        line-height: 50px;
        color: rgb(93, 100, 110);
        background-color:rgba(246, 246, 246);
      }
      .new_book{
        width: 100%;
        background-color: rgb(247, 247, 249);
      }
      .new_book img{
        margin-left: 22px;
      }
      .soaring_more1{
        width: 90%;
        height: 50px;
        margin: 0 auto 30px;
        border-radius: 20px;
        text-align: center;
        line-height: 50px;
        color: rgb(93, 100, 110);
        background-color:rgba(238, 238, 240);
      }
      .soaring_more2{
        width: 90%;
        height: 50px;
        margin: 0 auto;
        border-radius: 20px;
        text-align: center;
        line-height: 50px;
        color: rgb(93, 100, 110);
        background-color:rgba(246, 246, 246);
      }
      .all_book{
        width: 100%;
        background-color: #fff;
      }
      .all_book img{
        margin-left: 22px;
      }
      .ranking{
        width: 100%;
      }
      .ranking li{
        width: 95%;
        height: 80px;
        list-style: none;
        margin: 10px 0 0 18px;
      }
      .ranking li img{
        width: 60px;
        height: 80px;
        float: left;
      }
      .ranking_div{
       float: left;
        width: 200px;
        height: 50px;
        padding: 15px;
      }
      .ranking_div p:nth-child(2){
        font-size: 14px;
        margin-top: 5px;
        color: rgb(133, 140, 150);
      }
      .ranking1{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
      }
      .ranking1 li{
        width: 50%;
        height: 80px;
        list-style: none;
        margin: 10px 0;
      }
      .ranking1 li img{
        width: 60px;
        height: 80px;
        float: left;
      }
      .ranking1_div{
        width: 105px;
        height: 50px;
        padding: 15px 0;
        float: left;
      }
      .ranking1_div p:nth-child(1){
        font-size: 14px;
        
      }
      .ranking1_div p:nth-child(2){
        font-size: 13px;
        margin-top: 5px;
        color: rgb(133, 140, 150);
      }
      .ranking2{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
      }
      .ranking2 li{
        width: 50%;
        height: 80px;
        list-style: none;
        margin: 10px 0;
      }
      .ranking2 li img{
        width: 60px;
        height: 80px;
        float: left;
      }
      .ranking2_div{
        width: 105px;
        height: 50px;
        padding: 15px 0;
        float: left;
      }
      .ranking2_div p:nth-child(1){
        font-size: 14px;
        
      }
      .ranking2_div p:nth-child(2){
        font-size: 13px;
        margin-top: 5px;
        color: rgb(133, 140, 150);
      }
   </style>
   