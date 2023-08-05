<template>
    <div class="onetag">
        <ul>
            <li v-for="(item,index) in booksWithRecommendLabel"
            :key="index"
            >
           <div class="onetag_left">
            <img :src="item.image">
           </div>
           <div class="onetag_right">
            <p class="p_1">{{item.name}}</p>
            <div class="p_2">
                <span>{{item.author}}</span><span class="span2">&nbsp;|&nbsp;</span>
                <span>推荐值&nbsp;{{item.recommend}}%&nbsp;</span>
                <span style="color: red;">{{item.recommendLabel}}</span>
            </div>
            <p class="p_3">{{item.state}}</p>
           </div>
        </li>
        </ul>
    </div>
   </template>
   <script>
   export default {
     name: 'OneTag',
     props: {
       msg: String
     },
     data() {
        return {
            books:[
                {
                    name:"长相思（杨紫 张晚意 邓为 檀健次 代露娃 王弘毅主演)",
                    author:"桐华",
                    recommend:89.5,
                    state:"大家都在读",
                    category:1,
                    image:"https://weread-1258476243.file.myqcloud.com/weread/cover/47/cpplatform_sspctx3x4akwtsgd5ewnmu/t6_cpplatform_sspctx3x4akwtsgd5ewnmu1682668724.jpg"
                },
                {
                    name:"长安的荔枝",
                    author:"马伯庸",
                    recommend:95.5,
                    state:"大家都在读",
                    category:1,
                    image:"https://weread-1258476243.file.myqcloud.com/weread/cover/51/YueWen_40726691/t6_YueWen_40726691.jpg"
                },
                {
                    name:"明朝那些事儿(全集)",
                    author:"当前明月",
                    recommend:92.4,
                    state:"大家都在读",
                    category:2,
                    image:"https://weread-1258476243.file.myqcloud.com/weread/cover/25/cpplatform_6z3wjuzzpanewx6h8zgjvy/t6_cpplatform_6z3wjuzzpanewx6h8zgjvy1675915252.jpg"
                },
                {
                    name:"长相思1 （杨紫 张晚意 邓为 檀健次 代露娃 王弘毅主演)",
                    author:"桐华",
                    recommend:88.4,
                    state:"大家都在读",
                    category:2,
                    image:"https://weread-1258476243.file.myqcloud.com/weread/cover/33/cpplatform_nxkyuocaxczycncqyfugye/t6_cpplatform_nxkyuocaxczycncqyfugye1675999568.jpg"
                },
                {
                    name:"认知觉醒:开启自我改变的原动力",
                    author:"周岭",
                    recommend:91.3,
                    state:"大家都在读",
                    category:3,
                    image:"https://weread-1258476243.file.myqcloud.com/weread/cover/27/YueWen_706059/t6_YueWen_706059.jpg"
                },
                {
                    name:"长夜余火",
                    author:"爱潜水的乌贼",
                    recommend: 90.0,
                    state:"大家都在读",
                    category:3,
                    image:"https://wfqqreader-1252317822.image.myqcloud.com/cover/294/22717294/t6_22717294.jpg"
                },
                {
                    name:"追风筝的人",
                    author:"卡勒德·胡赛尼",
                    recommend:91.9,
                    state:"大家都在读",
                    category:3,
                    image:"https://weread-1258476243.file.myqcloud.com/weread/cover/44/YueWen_33140005/t6_YueWen_33140005.jpg"
                },
                {
                    name:"罪全书:完整收录版(全套8册)",
                    author:"蜘蛛",
                    recommend:84.0,
                    state:"大家都在读",
                    category:4,
                    image:"https://weread-1258476243.file.myqcloud.com/weread/cover/17/yuewen_23484983/t6_yuewen_234849831690286968.jpg"
                },
                {
                    name:"从红月开始",
                    author:"黑山老鬼",
                    recommend:90.9,
                    state:"大家都在读",
                    category:2,
                    image:"https://weread-1258476243.file.myqcloud.com/weread/cover/75/cpPlatform_dbb14284a55f1e733b60202b0777255d/t6_cpPlatform_dbb14284a55f1e733b60202b0777255d.jpg"
                },
                {
                    name:"异兽迷城",
                    author:"彭拜",
                    recommend:84.9,
                    state:"大家都在读",
                    category:1,
                    image:"https://wfqqreader-1252317822.image.myqcloud.com/cover/544/27370544/t6_27370544.jpg"
                },
                {
                    name:"驻京办主任3",
                    author:"王晓方",
                    recommend:74.9,
                    state:"大家都在读",
                    category:4,
                    image:"https://weread-1258476243.file.myqcloud.com/weread/cover/86/YueWen_33628204/t6_YueWen_33628204.jpg"
                },
                {
                    name:"簪花扶鬓长安步",
                    author:"桃花小茶",
                    recommend:73.7,
                    state:"大家都在读",
                    category:5,
                    image:"https://wfqqreader-1252317822.image.myqcloud.com/cover/464/834464/t6_834464.jpg"
                },
                {
                    name:"龙族V:悼亡者的归来",
                    author:"江南",
                    recommend:76.3,
                    state:"大家都在读",
                    category:5,
                    image:""
                },
                {
                    name:"天神诀",
                    author:"太一生水",
                    recommend:71.2,
                    state:"大家都在读",
                    category:4,
                    image:"https://wfqqreader-1252317822.image.myqcloud.com/cover/791/36059791/t6_36059791.jpg"
                },
                {
                    name:"饕餮娘子 (全集)",
                    author:"佟婕",
                    recommend:82.1,
                    state:"大家都在读",
                    category:6,
                    image:"https://weread-1258476243.file.myqcloud.com/weread/cover/86/YueWen_33628204/t6_YueWen_33628204.jpg"
                },
                {
                    name:"道印",
                    author:"贪睡的龙",
                    recommend:70.0,
                    state:"大家都在读",
                    category:5,
                    image:"https://weread-1258476243.file.myqcloud.com/weread/cover/75/cpPlatform_dbb14284a55f1e733b60202b0777255d/t6_cpPlatform_dbb14284a55f1e733b60202b0777255d.jpg"
                },
                {
                    name:"野滩镇",
                    author:"贺绪林",
                    recommend:81.3,
                    state:"大家都在读",
                    category:6,
                    image:"https://weread-1258476243.file.myqcloud.com/weread/cover/75/cpPlatform_dbb14284a55f1e733b60202b0777255d/t6_cpPlatform_dbb14284a55f1e733b60202b0777255d.jpg"
                },
                {
                    name:"骆驼祥子",
                    author:"老舍",
                    recommend:96.3,
                    state:"大家都在读",
                    category:7,
                    image:"https://weread-1258476243.file.myqcloud.com/weread/cover/86/YueWen_33628204/t6_YueWen_33628204.jpg"
                },
                {
                    name:"牧神记",
                    author:"宅猪",
                    recommend:88.4,
                    state:"大家都在读",
                    category:6,
                    image:"https://weread-1258476243.file.myqcloud.com/weread/cover/75/cpPlatform_dbb14284a55f1e733b60202b0777255d/t6_cpPlatform_dbb14284a55f1e733b60202b0777255d.jpg"
                },
                {
                    name:"天医凤九",
                    author:"凤炅",
                    recommend:81.4,
                    state:"大家都在读",
                    category:7,
                    image:"https://weread-1258476243.file.myqcloud.com/weread/cover/86/YueWen_33628204/t6_YueWen_33628204.jpg"
                },
                {
                    name:"武神",
                    author:"苍天白鹤",
                    recommend:70.8,
                    state:"大家都在读",
                    category:7,
                    image:"https://weread-1258476243.file.myqcloud.com/weread/cover/75/cpPlatform_dbb14284a55f1e733b60202b0777255d/t6_cpPlatform_dbb14284a55f1e733b60202b0777255d.jpg"
                },
                {
                    name:"异兽迷城",
                    author:"彭拜",
                    recommend:84.9,
                    state:"大家都在读",
                    category:7,
                    image:"https://weread-1258476243.file.myqcloud.com/weread/cover/86/YueWen_33628204/t6_YueWen_33628204.jpg"
                },
                {
                    name:"野滩镇",
                    author:"贺绪林",
                    recommend: 81.3,
                    state:"大家都在读",
                    category:1,
                    image:"https://weread-1258476243.file.myqcloud.com/weread/cover/86/YueWen_33628204/t6_YueWen_33628204.jpg"
                },
                {
                    name:"玉台碧",
                    author:"桩桩",
                    recommend:70.5,
                    state:"大家都在读",
                    category:1,
                    image:"https://weread-1258476243.file.myqcloud.com/weread/cover/86/YueWen_33628204/t6_YueWen_33628204.jpg"
                },
            ],
        };
     },
     computed: {
    booksWithRecommendLabel() {
      return this.books.map((item) => {
        if (item.recommend >= 90) {
          item.recommendLabel = "神作";
        } else if (item.recommend > 85 && item.recommend < 90) {
          item.recommendLabel = "好评如潮";
        } else {
          item.recommendLabel = "脍炙人口";
        }
        return item;
      });
    }
  }
   }
   </script>
   
   <!-- Add "scoped" attribute to limit CSS to this component only -->
   <style>
   .onetag{
     width: 100%;
   }
   .onetag ul{
    width: 100%;
   }
   .onetag ul li{
    width: 100%;
    height: 100px;
    margin-bottom: 20px;
   }
   .onetag_left{
    width: 80px;
    height: 100px;
    margin-left: 10px;
    float: left;
   } 
   .onetag_left img{
    width: 80px;
    height: 100px;
   }
   .onetag_right{
    width: 260px;
    margin-right: 10px;
    height: 100px;
    margin-left: 10px;
    float: right;
   } 
   .p_1{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 15px;
   }
   .p_2{
    margin-top: 8px;
    color: rgb(130, 136, 145);
    font-size: 14px;
   }
   .p_2 .span2{
    opacity: 0.3;
   }
   .p_3{
    margin-top: 8px;
    color: rgb(130, 136, 145);
    font-size: 14px;
   }
   .onetag ul li:last-child{
    margin-bottom: 50px;
   }
   </style>
   