const url_all : { [key : string] : string } = {
	'DEV': 'http://127.0.0.1:8090', // 开发
	'PRO': 'http://', // 生产
};

let BASEURL : string = url_all['DEV']; // 当前环境

/*
* 全局请求封装
* @param path 请求路径
* @param method 请求类型(GET/POST/DELETE等)
* @oaram data 请求体数据
* @param loading 请求未完成是是否显示加载中，默认为true
*/
export default (path : string, method : string, data : any = {}, loading : boolean = true) : Promise<any> => {
	// 如果是登录，则不用验证token
	if (path === '/userInfos/login') {
		return noTokenRequest(path, method, data);
	}
	// 获取存储token
	const token : string | undefined = uni.getStorageSync("token");
	if (loading) {
		uni.showLoading({
			title: "加载中",
			mask: true
		});
	}
	// 如果token为空或者undefuned 则未登录，跳转到登录页
	if (token === '' || token === undefined) {
		uni.reLaunch({
			url: 'pages/views/Login/Login'
		});
		uni.showToast({
			title: "请先登录！",
			icon: 'error'
		})
	}
	//token不为空，发送请求
	return tokenRequest(path, method, data, loading, token);
};

// 无token时发送请求函数 ：1、登录时
function noTokenRequest(path : string, method : string, data : any) : Promise<any> {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASEURL + path,
			method: method,
			data,
			success(response) {
				console.log('响应拦截');
				if (response.data.code === 200) {
					uni.setStorage({
						key: 'token',
						data: response.header.Authorization
					});
				}
				resolve(response.data);
			},
			fail(err) {
				uni.showToast({
					icon: "none",
					title: '服务响应失败'
				});
				console.error(err);
				reject(err);
			},
			complete() {
				uni.hideLoading();
			}
		});
	});
}

// 有token时发送请求函数
function tokenRequest(path : string, method : string, data : any, token : string) : Promise<any> {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASEURL + path,
			method: method,
			data,
			header: {
				"token": token
			},
			success(response) {
				console.log('%c响应拦截：', ' background:green', response);
				if (response.data.code === 40101) {
					// logout()
				}
				console.log("response.data", response.data);
				resolve(response.data);
			},
			fail(err) {
				uni.showToast({
					icon: "none",
					title: '服务响应失败'
				});
				console.error(err);
				reject(err);
			},
			complete() {
				uni.hideLoading();
			}
		});
	});
}