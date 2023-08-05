<template>
    <div class="twotag">
      <ul>
        <li 
         v-for="(category,index) in classify"
         :key="index"
        >
          <div class="twotag_left">
            <p>{{category.name}}</p>
              <div class="twotag_ranking"
                v-for="(book,bookIndex) in category.books"
                :key="bookIndex"
                >
                {{bookIndex+1}}.{{ book }}
              </div>
          </div>
          <div class="twotag_right">
            <img :src="category.image">
          </div>
        </li>
      </ul>
    </div>
   </template>
   <script>
   export default {
     name: 'TowTag',
     props: {
       msg: String
     },
     data() {
      return {
        classify:[
          {
            name:"精品小说",
            books:[
              "长相思（杨紫 张晚意 邓为 檀健次 代露娃 王弘毅主演)",
              "剑来",
              "三体（全集）"
            ],
            image:"https://weread-1258476243.file.myqcloud.com/weread/cover/47/cpplatform_sspctx3x4akwtsgd5ewnmu/t6_cpplatform_sspctx3x4akwtsgd5ewnmu1682668724.jpg"
          },
          {
            name:"历史",
            books:[
              "明朝那些事儿（全集）",
              "长安的荔枝",
              "葛商:殷周之变与华夏新生"
            ],
            image:"https://weread-1258476243.file.myqcloud.com/weread/cover/3/YueWen_35090602/t6_YueWen_35090602.jpg"
          },
          {
            name:"文学",
            books:[
              "我与地坛",
              "红楼梦",
              "平凡的世界（全三册）"
            ],
            image:"https://wfqqreader-1252317822.image.myqcloud.com/cover/44/674044/t6_674044.jpg"
          },
          {
            name:"艺术",
            books:[
              "生活蒙太奇",
              "故事:质、结构、风格和银幕剧作的原理",
              "新摄影笔记",
            ],
            image:"https://weread-1258476243.file.myqcloud.com/weread/cover/84/YueWen_33514727/t6_YueWen_33514727.jpg"
          },
          {
            name:"人物传记",
            books:[
              "邓小平时代",
              "毛泽东传（全6卷）",
              "苏东坡传(纪念典藏版)",
            ],
            image:"https://wfqqreader-1252317822.image.myqcloud.com/cover/48/674048/t6_674048.jpg"
          },
          {
            name:"哲学宗教",
            books:[
              "道德经",
              "次第花开(2017修订新版",
              "传习录"
            ],
            image:"https://weread-1258476243.file.myqcloud.com/weread/cover/50/YueWen_832038/t6_YueWen_832038.jpg"
          },
          {
            name:"计算机",
            books:[
              "Python编程: 从入门到实践",
              "Python编程:从入门到实践(第2版)",
              "网络是怎样连接的",
            ],
            image:"https://weread-1258476243.file.myqcloud.com/weread/cover/8/YueWen_22806930/t6_YueWen_22806930.jpg"
          },
          {
            name:"心理",
            books:[
              "的原动力认知觉醒:开启自我改变",
              "被讨厌的勇气:“自我启发之父”阿德勒的哲学课",
              "蛤蟆先生去看心理医生",
            ],
            image:"https://weread-1258476243.file.myqcloud.com/weread/cover/86/YueWen_33628204/t6_YueWen_33628204.jpg"
          },
          {
            name:"社会文化",
            books:[
              "厌女(增订本)",
              "法治的细节",
              "快乐上等:女性怎样自在地活(独家首发)",
            ],
            image:"https://weread-1258476243.file.myqcloud.com/weread/cover/40/3300012940/t6_3300012940.jpg"
          },
          {
            name:"个人成长",
            books:[
              "人性的弱点",
              "金钱心理学: 财富、人性和幸福的永恒真相",
              "当下的力量(白金版)",
            ],
            image:"https://weread-1258476243.file.myqcloud.com/weread/cover/94/YueWen_522205/t6_YueWen_522205.jpg"
          },
          {
            name:"经济理财",
            books:[
              "置身事内: 中国政府与经济发展",
              "纳瓦尔宝典",
              "富爸爸穷爸爸(20周年修订版)",
            ],
            image:"https://weread-1258476243.file.myqcloud.com/weread/cover/52/YueWen_40055543/t6_YueWen_40055543.jpg"
          },
          {
            name:"政治军事",
            books:[
              "毛泽东选集(全四卷)",
              "邓小平时代",
              "华杉讲透《孙子兵法》",
            ],
            image:"https://weread-1258476243.file.myqcloud.com/weread/cover/84/3300024284/t6_3300024284.jpg"
          },
          {
            name:"童书",
            books:[
              "小王子(英文版)",
              "柳林风声",
              "格林童话(全集)",
            ],
            image:"https://weread-1258476243.file.myqcloud.com/weread/cover/53/YueWen_22720170/t6_YueWen_22720170.jpg"
          },
          {
            name:"教育学习",
            books:[
              "金榜题名之后:大学生出路分化之谜",
              "如何阅读一本书",
              "零基础学好英语语法",
            ],
            image:"https://weread-1258476243.file.myqcloud.com/weread/cover/71/cpplatform_aftwrezfyfjnrtaahokipe/t6_cpplatform_aftwrezfyfjnrtaahokipe1685436175.jpg"
          },
        ]
      };
     
     },
   }
   </script>
   
   <!-- Add "scoped" attribute to limit CSS to this component only -->
   <style>
   .twotag{
     width: 100%;
   }
   .twotag>ul{
    width: 100%;
    height: 100%;
    overflow: auto
   }
   .twotag>ul li{
    list-style: none;
    width: 90%;
    margin: 0 auto;
    height: 130px;
    border-radius: 15px;
    margin-top: 10px;
    border: 1px solid rgba(204,204,204,0.6);
    background-color: rgba(248, 248, 250,0.4);
   }
   .twotag_left{
    float: left;
    width: 230px;
    height: 90px;
    border-radius: 15px 0 0  15px;
    padding: 20px 15px;
   }
   .twotag_left p{
    font-size: 20px;
   }
   .twotag_ranking{
    width: 240px;
    font-size: 14px;
    margin: 5px 0;
    color: rgba(0,0,0,0.4);
    white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
   }
   .twotag_right{
    width: 77.5px;
    height: 100%;
    float: right;
    border-radius:0 15px 15px 0;
    overflow: hidden;
   }
   .twotag_right img{
    width: 80px;
    height: 130px;
   }
   .twotag>ul li:last-child{
    margin-bottom: 50px;
   }
   </style>
   