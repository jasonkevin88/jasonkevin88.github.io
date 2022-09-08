(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{418:function(t,e,s){"use strict";s.r(e);var a=s(56),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"好游快爆送审sdk-接入文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#好游快爆送审sdk-接入文档"}},[t._v("#")]),t._v(" 好游快爆送审SDK-接入文档")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("版本")]),t._v(" "),s("th",[t._v("更新说明")]),t._v(" "),s("th",[t._v("日期")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("V1.0.6.0")]),t._v(" "),s("td",[t._v("1.添加充值支付功能")]),t._v(" "),s("td",[t._v("2022-08-18")])]),t._v(" "),s("tr",[s("td",[t._v("V1.0.5.0")]),t._v(" "),s("td",[t._v("1.添加顶号功能")]),t._v(" "),s("td",[t._v("2022-08-02")])]),t._v(" "),s("tr",[s("td",[t._v("V1.0.4.0")]),t._v(" "),s("td",[t._v("1.增加顶号限制弹窗 "),s("br"),t._v(" 2. 调整实名认证合规说明")]),t._v(" "),s("td",[t._v("2022-07-01")])]),t._v(" "),s("tr",[s("td",[t._v("V1.0.3.0")]),t._v(" "),s("td",[t._v("1.送审sdk的提供出生年月日(api名称改动)")]),t._v(" "),s("td",[t._v("2022-04-25")])]),t._v(" "),s("tr",[s("td",[t._v("V1.0.1.0")]),t._v(" "),s("td",[t._v("1.送审sdk的防沉迷功能优化")]),t._v(" "),s("td",[t._v("2022-02-28")])])])]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/review/review_en.html"}},[t._v("English documents")])],1),t._v(" "),s("h2",{attrs:{id:"_1-sdk嵌入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-sdk嵌入"}},[t._v("#")]),t._v(" 1.  SDK嵌入")]),t._v(" "),s("ol",[s("li",[s("p",[s("code",[t._v("SDK")]),t._v("下载完，将"),s("code",[t._v("aar")]),t._v("的\n"),s("code",[t._v("common.aar")]),t._v(" "),s("code",[t._v("review.aar")]),t._v("\n类库导入游戏工程libs目录下")])]),t._v(" "),s("li",[s("p",[t._v("在主工程的"),s("code",[t._v("build.gradle")]),t._v("文件下添加以下代码即可完成依赖，")])])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("android {\n    defaultConfig {\n       //方法数超过65536时，开启多dex的支持\n       multiDexEnabled true\n    }\n    \n    repositories {\n      flatDir {\n        dirs 'libs'\n    }\n  }\n}\n\ndependencies {\n    implementation(name:'common', ext:'aar')\n    implementation(name:'review', ext:'aar')\n}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br")])]),s("p",[t._v("然后重新同步下gradle.")]),t._v(" "),s("h2",{attrs:{id:"_2-接入代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-接入代码"}},[t._v("#")]),t._v(" 2. 接入代码")]),t._v(" "),s("h3",{attrs:{id:"_2-1-sdk初始化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-sdk初始化"}},[t._v("#")]),t._v(" 2.1 SDK初始化")]),t._v(" "),s("p",[t._v("描述：")]),t._v(" "),s("p",[t._v("初始化接口必须在所有SDK的其他相关api调用之前进行调用。")]),t._v(" "),s("p",[t._v("接口方法:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("//SDK初始化接口\nReviewSDK.init(Activity activity, String gameId, int orientation)\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("参数定义：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名称")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("activity")]),t._v(" "),s("td",[t._v("当前游戏的主Activity")])]),t._v(" "),s("tr",[s("td",[t._v("gameId")]),t._v(" "),s("td",[t._v("联系快爆运营获取ID")])]),t._v(" "),s("tr",[s("td",[t._v("orientation")]),t._v(" "),s("td",[t._v("sdk的屏幕方向")])])])]),t._v(" "),s("p",[t._v("示例代码：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("/**\n* SDK初始化方法\n*/\nReviewSDK.init(this, inputEdit.getText().toString(), getOrientation());\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h3",{attrs:{id:"_2-2-日志开关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-日志开关"}},[t._v("#")]),t._v(" 2.2 日志开关")]),t._v(" "),s("p",[t._v("方法:")]),t._v(" "),s("p",[t._v("ReviewSDK.setDebug(boolean debug);\n用来开启SDK的内部的相关日志输出")]),t._v(" "),s("h3",{attrs:{id:"_2-3-登录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-登录"}},[t._v("#")]),t._v(" 2.3 登录")]),t._v(" "),s("p",[t._v("接口方法:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("/**\n * 登录api的调用\n */\nReviewSDK.login(Activity activity, HykbLoginListener listener);\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("参数定义：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名称")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("activity")]),t._v(" "),s("td",[t._v("当前游戏主页面的Activity")])]),t._v(" "),s("tr",[s("td",[t._v("listener")]),t._v(" "),s("td",[t._v("LoginListener 登录回调监听")])])])]),t._v(" "),s("p",[t._v("示例代码:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('ReviewSDK.login(ReviewActivity.this, new LoginListener() {\n    @Override\n    public void onLoginFinished(User user, int code, String message) {\n        if (user != null) {\n            ToastUtil.showToast(ReviewActivity.this, "登录成功 user = " + user.toString());\n        } else if (code == 2005) {\n            ReviewActivity.this.finish();\n        } else {\n            ToastUtil.showToast(ReviewActivity.this, message);\n        }\n     }\n});\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("p",[t._v("类描述：")]),t._v(" "),s("p",[t._v("登录监听类："),s("code",[t._v("com.m3839.sdk.review.listener.LoginListener")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("方法名称")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("onLoginFinished(HykbUser user, int code, String message)")]),t._v(" "),s("td",[t._v("登录回调监听")])])])]),t._v(" "),s("h3",{attrs:{id:"_2-4-获取用户信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-获取用户信息"}},[t._v("#")]),t._v(" 2.4 获取用户信息")]),t._v(" "),s("p",[t._v("方法:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" User user = ReviewSDK.getUser();\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("类描述：")]),t._v(" "),s("p",[t._v("用户数据实体类： "),s("code",[t._v("com.m3839.sdk.review.bean.User")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("方法名称")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("getUserId()")]),t._v(" "),s("td",[t._v("获取用户uid")])]),t._v(" "),s("tr",[s("td",[t._v("getNick()")]),t._v(" "),s("td",[t._v("获取用户昵称")])]),t._v(" "),s("tr",[s("td",[t._v("getType()")]),t._v(" "),s("td",[t._v("获取登录方式")])]),t._v(" "),s("tr",[s("td",[t._v("getToken()")]),t._v(" "),s("td",[t._v("获取登录凭证")])]),t._v(" "),s("tr",[s("td",[t._v("getBirthday()")]),t._v(" "),s("td",[t._v("获取有实名认证的生日信息(年月日) eg:20170107")])])])]),t._v(" "),s("h3",{attrs:{id:"_2-5-注销"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-注销"}},[t._v("#")]),t._v(" 2.5 注销")]),t._v(" "),s("p",[t._v("方法:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ReviewSDK.logout(Activity activity);\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("用来注销用户的登录信息")]),t._v(" "),s("h3",{attrs:{id:"_2-6-支付"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-支付"}},[t._v("#")]),t._v(" 2.6 支付")]),t._v(" "),s("p",[t._v("方法：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ReviewSDK.pay(Activity activity,int money, String orderId, PayListener listener);\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("参数定义：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名称")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("activity")]),t._v(" "),s("td",[t._v("当前游戏主页面的Activity")])]),t._v(" "),s("tr",[s("td",[t._v("money")]),t._v(" "),s("td",[t._v("充值的金额")])]),t._v(" "),s("tr",[s("td",[t._v("orderId")]),t._v(" "),s("td",[t._v("当前的订单编号")])]),t._v(" "),s("tr",[s("td",[t._v("listener")]),t._v(" "),s("td",[t._v("PayListener 支付回调监听")])])])]),t._v(" "),s("p",[t._v("示例代码:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ReviewSDK.pay(this, moneyInt, orderId, new PayListener() {\n            @Override\n            public void onPayFinish(int code, String message, String orderId) {\n                showToast(message);\n            }\n        });\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("类描述：")]),t._v(" "),s("p",[t._v("支付监听类："),s("code",[t._v("com.m3839.sdk.review.listener.PayListener")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("方法名称")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("onPayFinish(int code, String message, String orderId)")]),t._v(" "),s("td",[t._v("支付回调监听")])])])]),t._v(" "),s("h3",{attrs:{id:"_2-7-游戏退出sdk释放"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-游戏退出sdk释放"}},[t._v("#")]),t._v(" 2.7 游戏退出SDK释放")]),t._v(" "),s("p",[t._v("方法: 在游戏退出的时候去调用")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" ReviewSDK.releaseSDK();\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"_2-8-回调code的说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-回调code的说明"}},[t._v("#")]),t._v(" 2.8 回调code的说明：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("code")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("1000")]),t._v(" "),s("td",[t._v("登录成功")])]),t._v(" "),s("tr",[s("td",[t._v("2003")]),t._v(" "),s("td",[t._v("取消登录")])]),t._v(" "),s("tr",[s("td",[t._v("2005")]),t._v(" "),s("td",[t._v("游戏开发者需要，退出游戏操作或者注销账号")])]),t._v(" "),s("tr",[s("td",[t._v("2008")]),t._v(" "),s("td",[t._v("防沉迷弹窗的关闭")])]),t._v(" "),s("tr",[s("td",[t._v("9000")]),t._v(" "),s("td",[t._v("R充值成功")])])])]),t._v(" "),s("p",[t._v("注意：其他的code，对应的message有解释")]),t._v(" "),s("h3",{attrs:{id:"_2-9-代码混淆"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-9-代码混淆"}},[t._v("#")]),t._v(" 2.9 代码混淆")]),t._v(" "),s("p",[t._v("如果您需要使用proguard混淆代码，需确保不要混淆SDK的代码。\n请在proguard.cfg文件(或其它混淆文件)尾部添加如下配置:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("-keep class com.m3839.sdk.common.** { *;}\n-keep class com.m3839.sdk.review.** { *;}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])])}),[],!1,null,null,null);e.default=v.exports}}]);