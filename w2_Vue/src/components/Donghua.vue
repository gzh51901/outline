<template>
    <div class="transition">
        <button @click="show=!show">显示隐藏</button>
        <div>
            <transition-group name="laoxie"

            enter-class="dspn"
            enter-active-class="animated"
            enter-to-class="bounceInDown"
            leave-class="dspb"
            leave-active-class="animated"
            leave-to-class="bounceOutDown"

            :css="true"

            
            >
                <img :src="imgurl" key="laoxie" v-show="show"/>
                <img src="../img/lemon.jpg" key="lemon" v-show="show"/>
            </transition-group>
        </div>
    </div>
</template>
<script>
/**
 * 图片被webpack处理
    * require
    * import
    * 相对路径（在html或css中的相对路径）
* 不被webpack处理的情况
    * 绝对路径
    * js中的相对路径
 */
import 'animate.css';
export default {
    data(){
        return {
            show:true,
            imgurl:"../img/laoxie.jpg"
        }
    },
    methods: {
      // 过渡进入
      // 设置过渡进入之前的组件状态
      beforeEnter: function (el) {
        // ...
        console.log('beforeEnter:',el)
        el.style.width = 100 + 'px'
      },
      // 设置过渡进入完成时的组件状态
      enter: function (el, done) {
          console.log('enter:',el)
        // ...
        setTimeout(()=>{
            done()

        },3000)
      },
      // 设置过渡进入完成之后的组件状态
      afterEnter: function (el) {
          console.log('afterEnter:',el)
          el.style.width = 320 + 'px'
        // ...
      },
      enterCancelled: function (el) {
          console.log('enterCancelled:',el)
        // ...
      },
      // 过渡离开
      // 设置过渡离开之前的组件状态
      beforeLeave: function (el) {
          console.log('beforeLeave:',el)
        // ...
      },
      // 设置过渡离开完成时地组件状态
      leave: function (el, done) {
          console.log('leave:',el)
        // ...
        done()
      },
      // 设置过渡离开完成之后的组件状态
      afterLeave: function (el) {
          console.log('afterLeave:',el)
        // ...
      },
      // leaveCancelled 只用于 v-show 中
      leaveCancelled: function (el) {
          console.log('leaveCancelled:',el)
        // ...
      }
    }
}
</script>
<style>
    img{transition:all 3s}
    .dspn{display:none}
    .dspb{display:block}
    .v-enter-active,.v-leave-active{transition:opacity 5s;}
    .v-enter{opacity: 0;}
    .v-enter-to{opacity:1}

    /* 离开 */
    .v-leave{opacity:1}
    .v-leave-to{opacity: 0;}

    .laoxie-enter-active,.laoxie-leave-active{transition:width 5s;}
    .laoxie-enter{width: 100px;}
    .laoxie-enter-to{width: 320px;}

    .laoxie-leave{width: 320px;}
    .laoxie-leave-to{width: 100px;}
</style>
