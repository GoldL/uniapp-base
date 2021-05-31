const { Base64 } = require('js-base64')
import { website } from '@/config'

/*
	薪资转换，以K为单位
*/
export const priceToThousand = (price = 0) => {
	return price / 1000 + '千'
}

/*
	hdeader参数
*/
export const createHeaders = () => {
	const header = {}
	const token = uni.getStorageSync('token')
	header['Blade-Auth'] = `bearer ${token}`
	header.Authorization = `Basic ${Base64.encode(`${website.clientId}:${website.clientSecret}`)}`
	return header
}

// 是否在微信
export const isWechat = () => {
	return String(navigator.userAgent.toLowerCase().match(/MicroMessenger/i)) === 'micromessenger'
}

// 地址参数
export const getUrlCode = name => {
	return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ''])[1].replace(/\+/g, '%20')) || null
}
