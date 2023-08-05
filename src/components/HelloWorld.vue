<template>
  <div class="thead">
        <div class="thead_tit">微信图书</div>
        <div class="search_kuan">
          <svg
            t="1691067701455"
            class="icon icon1"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="8157"
            width="30"
            height="30"
          >
            <path
              d="M889.6 838.4l-192-192C742.4 595.2 768 524.8 768 448c0-179.2-140.8-320-320-320S128 268.8 128 448s140.8 320 320 320c76.8 0 147.2-25.6 198.4-70.4l192 192c12.8 12.8 32 12.8 44.8 0C896 876.8 896 851.2 889.6 838.4zM192 448c0-140.8 115.2-256 256-256s256 115.2 256 256c0 140.8-115.2 256-256 256S192 588.8 192 448z"
              p-id="8158"
            ></path>
          </svg>
          <input type="text" class="search" placeholder="搜索" />
        </div>
      </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.thead{
     width: 100%;
     height: 140px;
     position: fixed;
     top: 0;
     z-index: 99;
     background-color:#fff;
}
.thead_tit{
    font-size: 18px;
     font-weight: bold;
    height:70px ;
    line-height: 70px;
    text-align: center;
}
.search_kuan{
    position: relative;
    width: 375px;
    height:60px ;
}
.search{
    outline: none;
    border-radius: 15px;
    background-color: rgb(245, 247, 249);
    border: none;
    font-weight: bold;
    padding-left:45px ;
    margin: 0  10px;
    width: 305px;
    height:40px ;
}
.icon1{
    position: absolute;
    top: 10px;
    left:  20px;
    width: 25px;
    height: 25px;
}
</style>
