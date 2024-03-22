<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// 检查是否登录，没有登录则跳转到登录页
			try {
				const value = uni.getStorageSync('token');
				if (value) {
					console.log("token", value);
				} else {
					console.log("未登录！");
				}
			} catch (e) {
				console.log("获取token失败，未登录", e);
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';

	// 设置整个项目的背景色
	page {
		background-color: #f5f5f5;
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
</style>