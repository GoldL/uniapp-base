const { Base64 } = require('js-base64')
import { website } from '@/config'

const install = (Vue, vm) => {
	// 此为自定义配置参数，具体参数见上方说明
	Vue.prototype.$u.http.setConfig({
		loadingText: '努力加载中~',
		loadingTime: 800,
		loadingMask: true,
		originalData: true,
		header: { 'content-type': 'application/json;charset=UTF-8' }
	})

	// 请求拦截，配置Token等参数
	Vue.prototype.$u.http.interceptor.request = config => {

		config.header.Authorization = `Basic ${Base64.encode(`${website.clientId}:${website.clientSecret}`)}`
		if (config.header.isForm) {
			config.header['content-type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
		}
		const token = uni.getStorageSync('token')
		config.header['Blade-Auth'] = `bearer ${token}`
		// 最后需要将config进行return
		return config
	}

	// 响应拦截，判断状态码是否通过
	Vue.prototype.$u.http.interceptor.response = res => {
		const data = res.data || {}
		const status = data && data.code || res.status
		const title = data && data.msg || data.error_description || '未知错误'
		// 登录接口特殊处理
		if (data.access_token) {
			return res.data
		}
		// 如果是401则跳转到登录页面
		if (status !== 200) {
			uni.showToast({ title, icon: 'none' })

			if (status === 401) {
				uni.removeStorageSync('token')
				uni.navigateTo({ url: '/pages/login/login' })
			}
			return false
		}
		return res.data
	}
}

export default { install }
