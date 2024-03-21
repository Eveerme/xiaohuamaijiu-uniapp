"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      cover: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg"
    };
  },
  methods: {
    onClick(e) {
      console.log(e);
    },
    actionsClick(text) {
      common_vendor.index.showToast({
        title: text,
        icon: "none"
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  (_easycom_uni_icons2 + _easycom_uni_card2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_card)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.cover,
    b: common_vendor.p({
      type: "pengyouquan",
      size: "18",
      color: "#999"
    }),
    c: common_vendor.o(($event) => $options.actionsClick("分享")),
    d: common_vendor.p({
      type: "heart",
      size: "18",
      color: "#999"
    }),
    e: common_vendor.o(($event) => $options.actionsClick("点赞")),
    f: common_vendor.p({
      type: "chatbubble",
      size: "18",
      color: "#999"
    }),
    g: common_vendor.o(($event) => $options.actionsClick("评论")),
    h: common_vendor.o($options.onClick),
    i: $data.cover,
    j: common_vendor.p({
      type: "pengyouquan",
      size: "18",
      color: "#999"
    }),
    k: common_vendor.o(($event) => $options.actionsClick("分享")),
    l: common_vendor.p({
      type: "heart",
      size: "18",
      color: "#999"
    }),
    m: common_vendor.o(($event) => $options.actionsClick("点赞")),
    n: common_vendor.p({
      type: "chatbubble",
      size: "18",
      color: "#999"
    }),
    o: common_vendor.o(($event) => $options.actionsClick("评论")),
    p: common_vendor.o($options.onClick),
    q: $data.cover,
    r: common_vendor.p({
      type: "pengyouquan",
      size: "18",
      color: "#999"
    }),
    s: common_vendor.o(($event) => $options.actionsClick("分享")),
    t: common_vendor.p({
      type: "heart",
      size: "18",
      color: "#999"
    }),
    v: common_vendor.o(($event) => $options.actionsClick("点赞")),
    w: common_vendor.p({
      type: "chatbubble",
      size: "18",
      color: "#999"
    }),
    x: common_vendor.o(($event) => $options.actionsClick("评论")),
    y: common_vendor.o($options.onClick)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-635419f4"], ["__file", "D:/study/UniAPPProject/xiaohuamaijiu/xiaohuamaijiu/pages/components/Home.vue"]]);
wx.createPage(MiniProgramPage);
