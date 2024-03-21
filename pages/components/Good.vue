<template>
	<view>
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

<script lang="ts">
	export default {
		data() {
			return {
				ComList: [],  //被合并的列表
				ComListSon: [
					{
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
					}
				],
				page: 1, //页数
			};
		},
		methods: {
			ToDel(id) {
				//参数在跳转页的onLoad(id){ console.log('id为' + id) } 中获取  
				wx.showToast({
					title: '将要跳转的详情页id为' + id,
					icon: 'none',
					duration: 500
				});
			},
			getComList(page) { 
				//参数为页数
				// 将获取的第page页数据合并进原数组   举例
				// axios.post('/list',{page:page}).then(res=>{
				// 	if(res.code == 1){ //接口调用成功
				// 		 this.ComListSon = res.data
				// 	}else{
				// 		wx.showToast(
				// { title: res.mes?res.msg:'信息获取错误',
				// icon: 'none', duration: 500 });
				// 	}
				// 	Array.prototype.push.apply(this.ComList, this.ComListSon);
				 //合并加载更多的数据与源数据.
				// })
				//
			}
		},
		onLoad() {
			this.page = 1
			this.getComList(1)
		},
		onReachBottom: function() {
			//下拉触发事件
			// this.page++;
			// this.getDefault(this.page);
			console.log('触发了下拉加载更多的事件')
		}
	};

</script>

<style lang="scss" scoped>
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
