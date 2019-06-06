<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
			<h4>好久不见，甚是想念</h4>
			<h1>约吗</h1>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello Lemon'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
	h4{color:#58bc58;}
	h1{font-size:100px;}
</style>
