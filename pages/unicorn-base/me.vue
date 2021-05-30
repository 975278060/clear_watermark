<template>
	<view style="background-color: #ffffff">
		<uni-forms ref="form" :value="formData" :rules="rules">
			<uni-easyinput v-model="value" :clearable="true"focus clearable="true" placeholder="请输入内容1"></uni-easyinput>

			<button @click="submit">Submit</button>
		</uni-forms>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				clearable:true,
				formData: {
					name: '',
					email: 'dcloud@email.com'
				},
				rules: {
					// 对name字段进行必填验证
					name: {
						rules: [{
							required: true,
							errorMessage: '请输入姓名',
						},
							{
								minLength: 3,
								maxLength: 5,
								errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符',
							}
						]
					},
					// 对email字段进行必填验证
					email: {
						rules: [{
							format: 'email',
							errorMessage: '请输入正确的邮箱地址',
						}]
					}
				}
			}
		},
		methods: {
			/**
			 * 复写 binddata 方法，如果只是为了校验，无复杂自定义操作，可忽略此方法
			 * @param {String} name 字段名称
			 * @param {String} value 表单域的值
			 */
			// binddata(name,value){
			// 通过 input 事件设置表单指定 name 的值
			//   this.$refs.form.setValue(name, value)
			// },
			// 触发提交表单
			submit() {
				this.$refs.form.submit().then(res=>{
					console.log('表单数据信息：', res);
				}).catch(err =>{
					console.log('表单错误信息：', err);
				})
			}
		}
	}
</script>