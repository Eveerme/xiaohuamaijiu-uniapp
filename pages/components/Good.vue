<template>
	<view>
		<view>
			<uni-search-bar @confirm="search" :focus="true" v-model="searchValue" @cancel="cancel" @clear="clear">
			</uni-search-bar>
		</view>
		<view class="Advanced-Search-area">
			<uni-grid :column="3" :show-border="false" :square="false">
				<uni-grid-item>
					<view class="grid-item-box" style="height: 50rpx;width: 80%;">
					  <uni-data-select
						v-model="selectTypeA"
						:localdata="typeAList"
						@change="changeTypeA"
						:clear="false"
					  ></uni-data-select>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-item-box" style="background-color: #00ffff;height: 50rpx;width: 80%;">
						
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-item-box" style="background-color: #00ffff;height: 50rpx;width: 80%;">
						
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>
		<view class="ComBox">
			<div class="ComList" v-for="item in ComListSon" :key="item.id" @click="ToDel(item.id)">
				<div class="ImgBOX">
					<img :src="item.img" class="Img" alt="">
				</div>
				<div class="Title">
					{{item.title}}
				</div>
				<div class="Tags">
					<uni-tag v-for="item1 in item.tags" :inverted="true" :text="item1.tag" type="primary" />
				</div>
			</div>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import { ref } from 'vue';
	const ComListSon = ref([{
		id: 1,
		img: "../../static/default-goods.png",
		title: '蓝色心情',
		tags: [
			{
				tag: '威士忌'
			},
			{
				tag: '可乐'
			}
		]
	},
	{
		id: 2,
		img: "../../static/default-goods.png",
		title: '红色郁闷',
		tags: [
			{
				tag: '威士忌'
			}
		]
	},
	{
		id: 3,
		img: "../../static/default-goods.png",
		title: '紫色玫瑰',
		tags: [
			{
				tag: '威士忌'
			}
		]
	},
	{
		id: 4,
		img: "../../static/default-goods.png",
		title: '深夜暴龙',
		tags: [
			{
				tag: '威士忌'
			}
		]
	},
	{
		id: 5,
		img: "../../static/default-goods.png",
		title: '无敌浩克',
		tags: [
			{
				tag: '威士忌'
			},
			{
				tag: '雪碧'
			}
		]
	}])
	function ToDel(id : string) {
		//参数在跳转页的onLoad(id){ console.log('id为' + id) } 中获取  
		wx.showToast({
			title: '将要跳转的详情页id为' + id,
			icon: 'none',
			duration: 500
		});
	}
	// 搜索
	const searchValue = ref<string>('');
	function search() {

	}
	function cancel() {

	}
	function clear() {

	}
	const selectTypeA = ref(0)
	const typeAList = ref([
		{ value: 0, text: "威士忌" },
		{ value: 1, text: "乌苏" },
		{ value: 2, text: "珠江纯生" }
	])
	function changeTypeA(ta:any){
		console.log("选择了A", ta);
	}
</script>

<style lang="scss" scoped>
	.Advanced-Search-area {
		
	}
	.grid-item-box {
		
	}
	.ComBox {
		width: 690rpx; //根据微信定义设置  如非必要不建议改为100%；
		padding: 10rpx 30rpx;
		background-color: #f7f7f7;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;

		.ComList {
			//未设置高度
			width: 270rpx;
			padding: 30rpx;
			background: #fff;
			border-radius: 8rpx;
			margin-top: 30rpx;

			.ImgBOX {
				width: 270rpx;
				height: 270rpx;
				border-radius: 12rpx;

				.Img {
					width: 100%;
					height: 100%;
				}
			}

			.Title {
				width: 270rpx;
				font-size: 32rpx;
				line-height: 44rpx;
				height: 88rpx;
				padding-top: 15rpx;
				text-overflow: -o-ellipsis-lastline;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				line-clamp: 2;
				-webkit-box-orient: vertical;
			}

			.Tags {
				width: 100%;
				height: 44rpx;
				line-height: 44rpx;
				padding-top: 15rpx;
				font-size: 32rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #D12324;
			}
		}
	}
</style>