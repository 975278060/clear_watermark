<template>
	<view class="content" :style="{ backgroundColor:'#F5F5F5' }">
		<view class="tips"><span class="iconfont iconlaba"></span></view>
		<view class="text"><p :style="{ animationDuration:speed }"v-html="message"></p></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				message: "本程序目前仅支持<span style='color: red'>抖音、皮皮虾、快手</span>、去水印，后续会逐渐添加其他产品，尽请关注。"
			};
		},
		props:
	{
		speed: {
			type: String,
		default: '50s'
		},
		isBack: {
			type: [Boolean, String],
		default: false
		},
		bgImage: {
			type: String,
		default: ''
		},
		}

				// ['backgroundColor','textSize','textColor','speed','iconColor','iconSize',"text"]
	}
</script>

<style scoped>
	.content{
		height: 76rpx;
		background: #F5F5F5;
		width: 100%;
		display: flex;
		align-items: center;
		padding: 0 10rpx;
		box-sizing: border-box;
	}
	.content .tips{
		width: 70rpx;
	}
	.content .text{
		flex: 1;
		overflow: hidden;
	}
	.content span{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.content p{
		width: 150%;
		white-space: nowrap;
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
		line-height: 76rpx;
		animation: 5s wordsLoop linear infinite normal;
	}

	@keyframes wordsLoop {
		0% {
			transform: translateX(50rpx);
		}

		100% {
			transform: translateX(-100%);
		}
	}
	
	@font-face {font-family: "iconfont";
	  src: url('./iconfont.eot?t=1616053872340'); /* IE9 */
	  src: url('./iconfont.eot?t=1616053872340#iefix') format('embedded-opentype'), /* IE6-IE8 */
	  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAMMAAsAAAAABsAAAAK/AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcAqBTIFJATYCJAMICwYABCAFhG0HLhvtBRHVk2Vkfzigx/w1UAZcUkJxUJ0j6Mabnb9tkC8b49p34CpwcN8H8bifNe8n7abpIoEj0njAwhCiunMkgVno6uS+77e2KMgsgsA8pO5b22NpK6EMnk4jjyae4HtbmT3xucFS/b3w5bkuHdQo+wEP8F9DDVJbC4BsUbX/497p/78CCmS+8y7HORd1AcaBFOgeGI0pVkAhN4zdRPAAD0MASyL5SHvn5aNj0IBRAsicmZHsmIITjXYiBsHdsFAjWzDGWevcA2zm35e/KBUDDi4FyOmd2ppO8w8wRi3xtRSBtZwecJaBAvIBDTLYGOxGIQ5RYYOaVDhWpsAPxzdVI0dVIM5fB9L9AYjXmc/EwuxHpXcA0NAd2oHuSW8ElVgh809kDu+y9uqTRDn8tMq7Pmrk9PqMkxfRngvpJ+z4unNLo268XHrjrqXn10dce76k+h3DNaKlzmMex3XhxbG3vRKw/sjhoM/ZkfVBt+7hWXTtaHSOGanzhMXiwG382bT00YnpWOq5+PbMdr9o0RLku5d94sC+6eL/htRLxy6eZQBudZP/0t/w8e/HsnqDBuDdO2sBl2uGmcGc2CTwA1kDm3TMASpHh6zGqEM76sYqLBbwmdZQPkyVRtxtVDBE3LPZj4QMFIZ0VBPywYWXcnBjaAJLHl3LvYSxCIVoD5DLSg2EYC6DQyA3QBHMfVQT3oOLSP6Dm2BRYBmW4YZeMsVKxJpQMhpQb0h0VVqkYSEyrxjdc0l5Did9IbWJBwLXL0f2WCItMaV9RCGzBUtVATvtOMzzCmqqUtTsxsz10vNs05lcXRUdwZpQMhpQb0h0VVrankXl81eM7rmkjoYR4xdSm/QOgesPQPfCclDDo5zSPqKQ2YKlqoCd1g/zvIK6uV+Kmt14gr9eerCVHSp0txcXf7eDTkcAZD2BhYrBHKlkpwMA') format('woff2'),
	  url('./iconfont.woff?t=1616053872340') format('woff'),
	  url('./iconfont.ttf?t=1616053872340') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
	  url('./iconfont.svg?t=1616053872340#iconfont') format('svg'); /* iOS 4.1- */
	}
	
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.iconlaba:before {
	  content: "\e62d";
	}

</style>
