"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      ComList: [],
      //被合并的列表
      ComListSon: [
        {
          id: 1,
          img: "../../static/default-goods.png",
          title: "蓝色心情",
          tags: [
            {
              tag: "威士忌"
            },
            {
              tag: "可乐"
            }
          ]
        },
        {
          id: 2,
          img: "../../static/default-goods.png",
          title: "红色郁闷",
          tags: [
            {
              tag: "威士忌"
            }
          ]
        },
        {
          id: 3,
          img: "../../static/default-goods.png",
          title: "紫色玫瑰",
          tags: [
            {
              tag: "威士忌"
            }
          ]
        },
        {
          id: 4,
          img: "../../static/default-goods.png",
          title: "深夜暴龙",
          tags: [
            {
              tag: "威士忌"
            }
          ]
        },
        {
          id: 5,
          img: "../../static/default-goods.png",
          title: "无敌浩克",
          tags: [
            {
              tag: "威士忌"
            },
            {
              tag: "雪碧"
            }
          ]
        }
      ],
      page: 1
      //页数
    };
  },
  methods: {
    ToDel(id) {
      common_vendor.wx$1.showToast({
        title: "将要跳转的详情页id为" + id,
        icon: "none",
        duration: 500
      });
    },
    getComList(page) {
    }
  },
  onLoad() {
    this.page = 1;
    this.getComList(1);
  },
  onReachBottom: function() {
    console.log("触发了下拉加载更多的事件");
  }
};
if (!Array) {
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  _easycom_uni_tag2();
}
const _easycom_uni_tag = () => "../../uni_modules/uni-tag/components/uni-tag/uni-tag.js";
if (!Math) {
  _easycom_uni_tag();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.ComListSon, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.t(item.title),
        c: common_vendor.f(item.tags, (item1, k1, i1) => {
          return {
            a: "f13f1e8b-0-" + i0 + "-" + i1,
            b: common_vendor.p({
              inverted: true,
              text: item1.tag,
              type: "primary"
            })
          };
        }),
        d: item.id,
        e: common_vendor.o(($event) => $options.ToDel(item.id), item.id)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f13f1e8b"], ["__file", "D:/study/UniAPPProject/xiaohuamaijiu/xiaohuamaijiu/pages/components/Good.vue"]]);
wx.createPage(MiniProgramPage);
