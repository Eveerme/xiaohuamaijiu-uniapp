"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  computed: {},
  created() {
  },
  methods: {
    WxLogin() {
      common_vendor.index.login({
        provider: "weixin",
        success: function(loginRes) {
          console.log(loginRes);
          common_vendor.index.getUserInfo({
            provider: "weixin",
            success: function(infoRes) {
              console.log("用户昵称为：" + infoRes.userInfo.nickName);
            }
          });
          common_vendor.index.request({
            url: "http://localhost:8090/userInfos/login",
            method: "POST",
            data: {
              "code": loginRes.code
            },
            success: function(res) {
              console.log(res);
            }
          });
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.WxLogin()),
    b: common_vendor.p({
      showArrow: true,
      title: "联系客服"
    }),
    c: common_vendor.p({
      showArrow: true,
      title: "意见反馈"
    }),
    d: common_vendor.p({
      showArrow: true,
      title: "关于我们"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b174b6ca"], ["__file", "D:/study/UniAPPProject/xiaohuamaijiu/xiaohuamaijiu/pages/components/UserInfo.vue"]]);
wx.createPage(MiniProgramPage);