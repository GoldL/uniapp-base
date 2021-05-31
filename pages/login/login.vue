<template>
	<view class="regist">
		<u-form class="form u-p-t-40 u-p-b-80" :model="form" ref="uForm">
			<u-form-item label="账号" prop="username">
				<u-input v-model="form.username" placeholder="请输入帐号" />
			</u-form-item>
			<u-form-item label="密码" prop="password">
				<u-input :password-icon="true" type="password" v-model="form.password" placeholder="请输入密码"></u-input>
			</u-form-item>
		</u-form>
		<u-button @click="submit" type="primary">登录</u-button>
	</view>
</template>

<script>
	import { loginUrl } from '@/api'
	import { isWechat, getUrlCode } from '@/utils'
	import md5Libs from 'uview-ui/libs/function/md5'

	export default {
		data() {
			return {
				form: { username: '', password: '', tenantId: '000000' },
				rules: {
					username: [{ required: true, message: '请输入帐号', trigger: ['blur'], }],
					password: [{ required: true, message: '请输入密码', trigger: ['blur'] }],
				}
			}
		},
		methods: {
			submit() {
				this.$refs.uForm.validate(async valid => {
					if (valid) {
						const { username, password, tenantId } = this.form
						const params = `username=${username}&password=${md5Libs.md5(password)}&tenantId=${tenantId}`
						const data = await this.$u.post(loginUrl, params, { 'User-Type': 'individual', isForm: true })
						uni.setStorageSync('token', data.access_token)
						uni.navigateBack({})
					}
				})
			}
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		}
	}
</script>

<style lang="scss" scoped>
	.regist {
		box-sizing: border-box;
		padding: 20rpx;
		background-color: $uni-bg-color;
	}
</style>
