<template>
    <div class="">
        商品页
    </div>
</template>
<script>
export default {
    mounted(){
        console.log(this.$route.params.id)
        // 根据id请求商品信息
        // this.$axios.get()
        console.log(this)
    }
}
</script>
