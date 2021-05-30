<template>
  <view class="min-desc-input">
    <view :class="border ? 'min-view-item min-main-border' :'min-view-item min-main-border-none'">
      <text class="desc-width" style="color: red;font-weight: bold;margin-left: 10px">{{sign}}{{desc}}</text>
     <input
        class="oinput"
        type="text"

        :maxlength="maxlength"

        :value="value"
        :disabled="disabled"
      />
	  <!--  v-model="value" --> 
	  <!-- <text class="placeholder-txt">{{placeholder}}</text> -->
    </view>
  </view>
</template>

<script>
	// 该组件也可以单独使用 
export default {
  props: {
    desc: {
      type: String,
      default: ''
    },

    value: {
      type: [String,Number],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    sign: {
      type: String,
      default: ''
    },
    maxlength: {
      type: Number,
      default: 11
    },
    border: {
      type: Boolean,
      default: true
    }
  },
}
</script>

<style lang="scss" scoped>
.min-desc-input {
  background: #fff;
  flex: 1;
  // margin: 20rpx;
  .min-view-item {
    height: 70rpx;
	display: flex;
	justify-content: space-between;
	.oinput{
		text-align: right;
		padding-right: 20rpx;
	}
	.min-main-border-none{
		display: flex;
		justify-content: space-between;
		font-size: 28rpx;
	}
	.placeholder-txt{
		color: #C0C0C0;
		margin-right: 10rpx;
	}
	.min-main-border{
		display: flex;
		justify-content: space-between;
		font-size: 28rpx;
		border-bottom: 1rpx solid #C0C0C0;
	}
    .ophone {
      padding-right: 34rpx;
    }
    .right-arrow {
      width: 24rpx;
      height: 24rpx;
      padding-top: 5rpx;
    }
    .desc-width {
      width: 200rpx;
        display: flex;
        align-items: center;
	  font-size:24rpx
    }
  }

}

</style>
