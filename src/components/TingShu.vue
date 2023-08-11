<template>
    <div id="tingshu">
      <HelloWorld/>
      <ConTent/>
      <div class="tingshu_con">
        <div class="caiBe_fond_Of">
          <p class="p1">猜你喜欢</p>
          <ul>
            <li
              v-for="(item,index) in users" :key="index"
             >
              <img :src="item.img">
              <div class="Introduce">
                <p>{{item.name}}</p>
                <p>{{item.zuoze}}&nbsp;|&nbsp;讲述人：{{ item.teller }}</p>
                <p>根据你的收听兴趣推荐</p>
              </div>
            </li>
          </ul>
          <div class="caiBe_fond_Of-btn">换一批</div>
        </div>
        <div class="caiBe_fond_Of">
          <p class="p1">影视热门榜</p>
          <ul>
            <li
              v-for="(item,index) in users1" :key="index"
             >
              <img :src="item.img">
              <div class="Introduce">
                <p>{{item.name}}</p>
                <p>{{item.zuoze}}&nbsp;|&nbsp;讲述人：{{ item.teller }}</p>
                <p>{{item.ren}}人今日在听</p>
              </div>
            </li>
          </ul>
          <div class="caiBe_fond_Of-btn">查看更多</div>
        </div>
        <div class="caiBe_fond_Of">
          <p class="p1">免费榜</p>
          <ul>
            <li
              v-for="(item,index) in users2" :key="index"
             >
              <img :src="item.img">
              <div class="Introduce">
                <p>{{item.name}}</p>
                <p>{{item.zuoze}}&nbsp;|&nbsp;讲述人：{{ item.teller }}</p>
                <p>{{item.ren}}人今日在听</p>
              </div>
            </li>
          </ul>
          <div class="caiBe_fond_Of-btn">查看更多</div>
        </div>
        <div class="caiBe_fond_Of">
          <p class="p1">古言穿越榜</p>
          <ul>
            <li
              v-for="(item,index) in users3" :key="index"
             >
              <img :src="item.img">
              <div class="Introduce">
                <p>{{item.name}}</p>
                <p>{{item.zuoze}}&nbsp;|&nbsp;讲述人：{{ item.teller }}</p>
                <p>{{item.ren}}人今日在听</p>
              </div>
            </li>
          </ul>
          <div class="caiBe_fond_Of-btn">查看更多</div>
        </div>
        <div class="caiBe_fond_Of">
          <p class="p1">玄幻灵异榜</p>
          <ul>
            <li
              v-for="(item,index) in users4" :key="index"
             >
              <img :src="item.img">
              <div class="Introduce">
                <p>{{item.name}}</p>
                <p>{{item.zuoze}}&nbsp;|&nbsp;讲述人：{{ item.teller }}</p>
                <p>{{item.ren}}人今日在听</p>
              </div>
            </li>
          </ul>
          <div class="caiBe_fond_Of-btn">查看更多</div>
        </div>
        <div class="caiBe_fond_Of">
          <p class="p1">科幻悬疑榜</p>
          <ul>
            <li
              v-for="(item,index) in users5" :key="index"
             >
              <img :src="item.img">
              <div class="Introduce">
                <p>{{item.name}}</p>
                <p>{{item.zuoze}}&nbsp;|&nbsp;讲述人：{{ item.teller }}</p>
                <p>{{item.ren}}人今日在听</p>
              </div>
            </li>
          </ul>
          <div class="caiBe_fond_Of-btn">查看更多</div>
        </div>
        <div class="caiBe_fond_Of">
          <p class="p1">青春现言榜</p>
          <ul>
            <li
              v-for="(item,index) in users6" :key="index"
             >
              <img :src="item.img">
              <div class="Introduce">
                <p>{{item.name}}</p>
                <p>{{item.zuoze}}&nbsp;|&nbsp;讲述人：{{ item.teller }}</p>
                <p>{{item.ren}}人今日在听</p>
              </div>
            </li>
          </ul>
          <div class="caiBe_fond_Of-btn">查看更多</div>
        </div>
        <div class="caiBe_fond_Of">
          <p class="p1">历史争霸榜</p>
          <ul>
            <li
              v-for="(item,index) in users7" :key="index"
             >
              <img :src="item.img">
              <div class="Introduce">
                <p>{{item.name}}</p>
                <p>{{item.zuoze}}&nbsp;|&nbsp;讲述人：{{ item.teller }}</p>
                <p>{{item.ren}}人今日在听</p>
              </div>
            </li>
          </ul>
          <div class="caiBe_fond_Of-btn">查看更多</div>
        </div>
        <div class="caiBe_fond_Of">
          <p class="p1">出版经典榜</p>
          <ul>
            <li
              v-for="(item,index) in users8" :key="index"
             >
              <img :src="item.img">
              <div class="Introduce">
                <p>{{item.name}}</p>
                <p>{{item.zuoze}}&nbsp;|&nbsp;讲述人：{{ item.teller }}</p>
                <p>{{item.ren}}人今日在听</p>
              </div>
            </li>
          </ul>
          <div class="caiBe_fond_Of-btn">查看更多</div>
        </div>
        <div class="caiBe_fond_Of">
          <p class="p1">签约讲师榜</p>
          <ul>
            <li
              v-for="(item,index) in users9" :key="index"
             >
              <img :src="item.img">
              <div class="Introduce">
                <p>{{item.name}}</p>
                <p>{{item.zuoze}}&nbsp;|&nbsp;讲述人：{{ item.teller }}</p>
                <p>{{item.ren}}人今日在听</p>
              </div>
            </li>
          </ul>
          <div class="caiBe_fond_Of-btn">查看更多</div>
        </div>
      </div>
    </div>
</template>
  
  <script>
  import HelloWorld from './HelloWorld.vue'
  import ConTent from './ConTent.vue'
  import tingDate from './tingshuData.json';
 export default {
     name: 'TingShu',
     props: {
       msg: String
     },
     components: {
      HelloWorld,
      ConTent,
    },
    data(){
        return{
            users:[],
            users1:[],
            users2:[],
            users3:[],
            users4:[],
            users5:[],
            users6:[],
            users7:[],
            users8:[],
            users9:[],
        }
     },
     mounted() {
        let ser = tingDate.filter((item) => {
             return item.name == "猜你喜欢"
         }); 
        let ser1 = tingDate.filter((item)=>{
          return item.name == "影视热门榜"
        })
        let ser2 = tingDate.filter((item)=>{
          return item.name == "免费榜"
        })
        let ser3 = tingDate.filter((item) => {
             return item.name == "古言穿越榜"
         }); 
        let ser4 = tingDate.filter((item)=>{
          return item.name == "玄幻灵异榜"
        })
        let ser5 = tingDate.filter((item)=>{
          return item.name == "科幻悬疑榜"
        })
        let ser6 = tingDate.filter((item) => {
             return item.name == "青春现言榜"
         }); 
        let ser7 = tingDate.filter((item)=>{
          return item.name == "历史争霸榜"
        })
        let ser8 = tingDate.filter((item)=>{
          return item.name == "出版经典榜"
        })
        let ser9 = tingDate.filter((item)=>{
          return item.name == "签约讲师榜"
        })
        this.users = ser[0].conList
        this.users1 = ser1[0].conList
        this.users2 = ser2[0].conList
        this.users3 = ser3[0].conList
        this.users4 = ser4[0].conList
        this.users5 = ser5[0].conList
        this.users6 = ser6[0].conList
        this.users7 = ser7[0].conList
        this.users8 = ser8[0].conList
        this.users9 = ser9[0].conList
      },
   }
  </script>
  <style>
  .tingshu{
    width: 100%;
  }
  .tingshu_con{
    width: 90%;
    margin: 0 auto;
}
.caiBe_fond_Of{
  width: 100%;
}
.caiBe_fond_Of ul{
  margin-bottom: 20px;
}
.caiBe_fond_Of ul li{
  list-style: none;
  width: 100%;
  height: 100px;
  margin-bottom:20px ;
}
.caiBe_fond_Of ul li img{
  width: 80px;
  height: 100%;
  float: left;
}
.Introduce{
  width: 70%;
  height: 90%;
  padding: 1% 3%;
  float: right;
}
.Introduce p{
  margin: 5px 0;
}
.Introduce p:nth-child(1){
  font-size: 18px;
}
.Introduce p:nth-child(2){
  font-size: 13px;
  color: #51565e;
}
.Introduce p:nth-child(3){
  font-size: 12px;
  color: #99a0aa;
}
.caiBe_fond_Of-btn{
  width: 100%;
  height: 50px;
  margin: 0 auto;
  border-radius: 20px;
  text-align: center;
  line-height: 50px;
  color: rgb(93, 100, 110);
  background-color:rgba(246, 246, 246);
  margin-bottom: 20px;
}
.p1{
  font-size: 24px;
  font-family: "新宋体";
  font-weight: bold;
  margin-bottom: 20px;
}
  </style>