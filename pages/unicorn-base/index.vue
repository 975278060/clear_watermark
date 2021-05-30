<template>

		<view class="top">
			<hx-navbar title="去水印工具助手" :fixed="true" :background-color="[[28, 187, 180],[141, 198, 63]]" color="#ffffff" />

			<!--		循环滚动-->
			<view class="top_1">
				<view class="top_w">
					<TextRoll ></TextRoll>
				</view>
			</view>
		<view class = "mad">
			<view class="top_2">
				<view class="far_1">
					<view class="ma1" v-for="(item,index) in array" :key="index">
						<view class="ma1_1">
								<image :style="{backgroundImage: 'url('+ item.src +')' }"></image>
						</view>
						<view class="ma1_2">
							<view class="image-title">{{item.text}}</view>
						</view>
					</view>

				</view>
				<view class="far_1">
					<view class="ma1" v-for="(item,index) in array1" :key="index">
						<view class="ma1_1">
							<image :style="{backgroundImage: 'url('+ item.src +')' }"></image>
						</view>
						<view class="ma1_2">
							<view class="image-title">{{item.text}}</view>
						</view>
					</view>
				</view>
				<view style="height: 10px"></view>
			</view>
			<uni-forms ref="form" :value="formData" >
				<view class="cu-bar bg-white search top_3">
<!--					<view class="search-form round">-->
							<uni-forms-item  style="width: 96%;margin-top: 20px" name="name">
								<uni-easyinput class="search-form round" :clearable="true"focus  prefixIcon="search" v-model="formData.name" placeholder="请输入内容" @iconClick="onClick"></uni-easyinput>
							</uni-forms-item>

				</view>
			<view class="top_4">
				<button @click="submit" type="primary">一键去水印</button>
				<br>
				<view class="top_5" style="
      border-radius: 20px; margin-top: 20px">
				<collapse  :list="list" :speed="speed" desc='使用方法' ></collapse>
				</view>
			</view>
			</uni-forms>
		</view>


	</view>

</template>

<script>
	import TextRoll from './../../components/beyondGod-roll/text-roll.vue'
	import collapse from './../../components/min-collapse/min-collep'
	import UniSInput from "../../components/s-input/s-input";
	export default {
		data() {
			return {

				formData: {
					name: '',
					email: 'dcloud@email.com'
				},
				speed:"100",
				list:'打开相关视频软件，点击分享  -  复制视频链接，<span style="color: red">点击按钮“一键去水印”</span>，复制相关链接到手机浏览器即可成功下载。',
				array: [{
					src: '/static/image/logo-douyin.png',
					text: '抖音'
				}, {
					src: '/static/image/logo-gitShow.png',
					text: '快手'
				},{
					src: '/static/image/logo-meipai.png',
					text: '美拍'
				}, {
					src: '/static/image/logo-volcano.png',
					text: '火山视频'
				},{
					src: '/static/image/logo-zuiyou.png',
					text: '最右'
				}],
				array1: [{
					src: '/static/image/logo-xiaohongshu.png',
					text: '小红书'
				}, {
					src: '/static/image/logo-microview.png',
					text: '微视'
				}, {
					src: '/static/image/logo-xiaokaxiu.png',
					text: '小咖秀'
				},{
					src: '/static/image/logo-ppx.png',
					text: '皮皮虾'
				},{
					src: '/static/image/logo-music.png',
					text: '全民K歌'
				}],

			}
		},
		components:{
			UniSInput,
			TextRoll,
			collapse,
		},
		onLoad() {
			this.getHomePosts();
		},
		methods: {
			submit() {
				this.$refs.form.submit().then(res=>{
					// uni.request({
					// 	url: 'https://tools.qysf.xyz/video/fetch?type=auto&url=8.9%20dN:/%20%E5%85%AD%20%E4%B8%80%E5%8F%AF%E4%BB%A5%E9%80%81%E6%88%91%E4%B8%80%E6%9D%9F%E8%93%9D%E8%89%B2%E6%A3%92%E6%A3%92%E7%B3%96%E5%90%97%E5%9B%A0%E4%B8%BA%E5%AE%83%E7%9A%84%E5%AF%93%E6%84%8F%E6%98%AF%EF%BC%9A%E6%84%BF%E4%BD%A0%20%E7%AB%A5%E5%BF%83%E6%9C%AA%E6%B3%AF%20%E6%89%80%E9%81%87%E7%9A%86%E7%94%9C%EF%BC%9B%E5%BE%80%E5%90%8E%E4%BD%99%E7%94%9F%E5%A4%9A%E7%94%9C%E5%B0%91%E8%8B%A6.%61%E5%84%BF%E7%AB%A5%E8%8A%82%20%20https://v.douyin.com/eabpVcW/%20%E5%A4%8D%E5%88%B6%E6%AD%A4%E9%93%BE%E6%8E%A5%EF%BC%8C%E6%89%93%E5%BC%80Dou%E9%9F%B3%E6%90%9C%E7%B4%A2%EF%BC%8C%E7%9B%B4%E6%8E%A5%E8%A7%82%E7%9C%8B%E8%A7%86%E9%A2%91%EF%BC%81',
					// 	success: (res) => {
					// 		console.log(res)
					// 		// that.cardList.forEach((item) => {
					// 		// 	item.content = that.comments
					// 		//
					// 		// })
					//
					// 	}
					// })
					console.log('表单数据信息：', res);
				}).catch(err =>{
					console.log('表单错误信息：', err);
				})
			},
			getHomePosts() {
				var that = this;
				uni.request({
					url: 'https://cdn.ipayy.net/wangyy/api.php',
					success: (res) => {
						// that.cardList.forEach((item) => {
						// 	item.content = that.comments
						//
						// })

					}
				})
			}
		}
	}
</script>

<style>
	*{
		border-radius: 20px;
	}

	.ma1_1 image{
		background-repeat: no-repeat;
		background-size: 70% 80%;
		height: 100%;
		background-position: 60% 50%;
	}
.top{
	height: 100%;
	width: 100%;
background-color:#f1f1f1 ;

}  .top_w{
		height: 30px;
		width: 100%;

	}
.top_1{
	height: 300px;
	padding-top: 120px;
	background:linear-gradient(to right,#0791e9,#10a2d3,#17b0c2)
}
.mad{
	height: 600px;
	padding: 20px;
	margin-top: -120px;
}
	.top_2{
		border-radius: 14px;
		background-color: #ffffff;
		height: 210px;
	}
.top_3{
	border-radius: 20px;
	margin-top: 20px;
	margin-bottom: 20px;
	background:linear-gradient(to left,#0791e9,#10a2d3,#17b0c2);
	height: 140px;
}
	.top_4{
		background-color: #f4f4f4;
		border-radius: 100px;
		height: 220px;
	}
	.far_1{
		height: 48%;
		display: flex;
		justify-content: space-between;
	}
	.ma1{
		width: 18%;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}
	.ma1_1{
		height: 50%;
		width: 100%;
	}
	.ma1_2{
		text-align: center;
		font-size: 14px;
		color: #0f1A1E;
		font-weight: bold;
	}


</style>
