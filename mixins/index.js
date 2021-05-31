export const listMixin = {
	data() {
		return {
			listUrl: '',
			list: [],
			scrollTop: 0,
			listTotalLength: 0,
			loadListStatus: 'loadmore',
			listQuery: { current: 1, size: 10 }
		}
	},
	methods: {
		async loadList() {
			// 加载列表
			this.loadListStatus = 'loading'
			const { data: { records = [], total = 0 } } = await this.$u.post(this.listUrl, this.listQuery)
			this.listTotalLength = total
			this.listQuery.current++
			this.list = this.list.concat(records)
			this.loadListStatus = this.list.length >= total ? 'nomore' : 'loadmore'
			uni.stopPullDownRefresh()
		},
		reloadList() {
			this.listQuery.current = 1
			this.list = []
			this.loadList()
		}
	},
	onReady() {
		this.loadList()
	},
	onReachBottom() {
		// 上拉加载更多
		if (this.loadListStatus === 'nomore') {
			return
		}
		this.loadList()
	},
	onPullDownRefresh() {
		// 下拉刷新
		this.reloadList()
	},
	onPageScroll(e) {
		this.scrollTop = e.scrollTop
	}
}
