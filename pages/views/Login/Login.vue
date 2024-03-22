<template>
	<view class="content">
		<view class="avatorWrapper">
			<view class="avator">
				<image class="img" src="@/static/jiu.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="form">
			<view class="loginBtn" @click="WxLogin()">
				<text class="btnValue">登录</text>
			</view>
			<view class="forgotBtn">
				<label class="checkbox d-flex a-center">
					<radio :checked="check" @click="checkChange()"/>
					<text class="text-light-muted font">已阅读并同意XXXXX协议</text>
				</label>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import { ref } from 'vue';
	import { userLogin } from '@/api/login/loginApi';

	const check = ref<Boolean>(false);
	function checkChange() {
		check.value = !check.value;
	}
	function WxLogin() {
		if (check.value === false) {
			uni.showToast({
				title: "请先勾选用户协议",
				icon: 'error'
			})
		} else {
			uni.login({
				provider: 'weixin',
				success: function (loginRes) {
					userLogin(loginRes.code).then((res : any) => {
						if (res.code === 200) {
							uni.setStorage({
								key: 'userInfo',
								data: res.data
							});
							uni.switchTab({
								url: '/pages/components/Home'
							});

						}
					})
				}
			});
		}

	}
</script>

<style>
	.content {
		background: #ffffff;
		width: 100vw;
		height: 100vh;
	}

	.avatorWrapper {
		height: 30vh;
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: flex-end;
	}

	.avator {
		width: 200upx;
		height: 200upx;
		overflow: hidden;
	}

	.avator .img {
		width: 100%
	}

	.form {
		padding: 0 100upx;
		margin-top: 80px;
	}

	.loginBtn {
		width: 100%;
		height: 80upx;
		background: #77B307;
		border-radius: 50upx;
		margin-top: 50px;
		display: flex;
		justify-content: center;
		align-items: center;

	}

	.loginBtn .btnValue {
		color: white;
	}

	.forgotBtn {
		text-align: center;
		color: #000000;
		font-size: 15px;
		margin-top: 20px;
	}
</style>