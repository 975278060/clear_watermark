<template>
	<view style="padding-top:14%">

		<hx-navbar title="关于全网去水印助手" :fixed="true" :background-color="[[28, 187, 180],[141, 198, 63]]" color="#ffffff" />

		<view class='margin-xl bg-white padding-xl radius shadow-lg'>


		  <view class='text-content'>
		    <view>Hi！你好~欢迎使用去水印助手！</view>
		    <view class='margin-top-sm'>该项目是由<span style="font-weight: 900;color: red">个人开发者</span>以学习为目的打造的一款自用的去水印工具集合，后续会不断添加各种产品的去水印或者图片等其他有用的内容。</view>
			  <view class='margin-top-sm'>喜欢或者有其他建议的朋友可以关注公众号<span style="font-weight: 900;color: red">“萌萌动漫”</span>给我留言哦~</view>

			<view class='margin-top-sm'>在此郑重承诺该小程序功能永久免费！</view>
			  <view class='margin-top-sm'>更多功能敬请期待！！!</view>
			<view class="cu-list grid col-2 no-border margin-top">
				<view class="cu-item" v-for="(item,index) in logoList" :key="index"
				style="display: flex;align-items: center;justify-content: center;">
					<image class="ibanimg" mode="aspectFill" :src="item.logoUrl"></image>
					<text>{{item.name}}</text>
				</view>
			</view>
			
			<view class='margin-top-sm' style="text-align: center;font-size: 16px;">热爱可抵岁月漫长</view>
		  </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				logoList:[
					{
						logoUrl: "../../static/image/1111.jpg",
						name:"萌萌动漫"
					},{
						logoUrl: "../../static/unicorn-base/about/logo-colorUI.png",
						name:"ColorUI"
					}
				]
			}
		}
	}
</script>

<style>
	.ibanimg {
	    width: 120rpx;
	    height: 120rpx;
	    margin-bottom: 10rpx;
	}
</style>
