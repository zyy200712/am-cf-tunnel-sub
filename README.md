### 🚀[am-cf-tunnel-sub](https://github.com/amclubs/am-cf-tunnel-sub)
基于vercel 部署该脚本，你可以方便地将Cloudflare Workers 和 Pages的 VLESS、Trojan 配置信息使用在线配置转换到 Clash、 Singbox 、Quantumult X等工具中订阅使用。Cloudflare Workers 和 Pages 生成VLESS、Trojan节点,实现一键订阅节点。分离节点与订阅框架,更好解决Cloudfare部署时出现1101、522的问题。 [最新视频教程](https://www.youtube.com/watch?v=i-XnnP-MptY&t=596s)、[🎬 YouTube](https://youtube.com/@am_clubs?sub_confirmation=1)、 [💬 Telegram](https://t.me/am_clubs)、[📂 GitHub](https://github.com/amclubs)、[🌐 Blog](https://amclubss.com)

### ⚙️结合Coudflare部署免费节点项目与教程使用 [am-cf-tunnel](https://github.com/amclubs/am-cf-tunnel)
- 本频道订阅器转换地址：https://sub.amclubss.com

### 👉 后期计划
- 增加GitHub部署
- 增加Cloudflare部署(不建议,容易1101,粉丝要求)
- 其它免费容器部署

## 📝一、前期准备资料
<details>
<summary>点击展开/收起</summary>

### 1、注册免费**Vercel**帐号(GitHub方式连接就可以注册)
- 注册地址：https://vercel.com <a href="https://www.youtube.com/watch?v=ZxHLLlxuJyI&t=50s">[点击观看视频教程]</a>

### 2、注册**免费域名** [点击观看所有免费域名视频教程](https://www.youtube.com/playlist?list=PLGVQi7TjHKXZGODTvB8DEervrmHANQ1AR)

### 3、**订阅工具** [点击观看使用视频教程](https://youtu.be/xGOL57cmvaw)
👉 [点击加入TG群 数字套利｜交流群](https://t.me/AM_CLUBS)发送关键字 **工具** 获取下载

### 4、Cloudflare标准 **端口** 知识  [点击观看优选IP视频教程](https://youtu.be/pKrlfRRB0gU)
- 80系端口(HTTP)：80，8080，8880，2052，2082，2086，2095
- 443系端口(HTTPS)：443，2053，2083，2087，2096，8443
- [IP落地测试工具地址](https://ip.sb/)

### 4、结合loudflare部署免费节点项目与教程使用 [am-cf-tunnel](https://github.com/amclubs/am-cf-tunnel)

</details>

## 
## ⚙️ 二、Vercel部署节点订阅器 [视频教程](https://www.youtube.com/watch?v=i-XnnP-MptY&t=596s)
<details>
<summary>点击展开/收起</summary>

1. Fork或克隆本仓库[am-cf-tunnel-sub](https://github.com/amclubs/am-cf-tunnel-sub)到您的 GitHub/GitLab 账户
2. 登录 [Vercel](https://vercel.com)，点击"New Project" <a href="https://www.youtube.com/watch?v=ZxHLLlxuJyI&t=28s">[点击观看注册视频教程]</a>
3. 导入您的仓库，使用默认设置
4. **⚠️ 重要：在"Settings" > "Environment Variables"中添加 `UUID` 和 `HOST` 变量（必须设置）**
5. 点击"Deploy"

访问 `http://部署域名` 即可。

</details>

## 
## 🔧三、变量说明 [视频教程](https://www.youtube.com/watch?v=i-XnnP-MptY&t=596s)
| 变量名 | 示例 | 必填 | 备注 | YT |
|-----|-----|-----|-----|-----|
| ID   | ec872d8f-72b0-4a04-b612-0327d85e18ed（默认）|✅| 订阅器的登录密码 | |
| UUID | ec872d8f-72b0-4a04-b612-0327d85e18ed |✅| Cloudflare部署节点的ID变量值[在线获取UUID](https://1024tools.com/uuid)   |  |
| HOST | vless.amclubss.com |✅| Cloudflare部署节点的域名或自定域名 | |
| IP_URL           | [https://raw.github.../ipUrl.txt](https://raw.githubusercontent.com/amclubs/am-cf-tunnel/main/ipUrl.txt)           |❌| （推荐）优选(ipv4、ipv6、域名、API)地址(支持多个之间`,`或 换行 作间隔)，支持文件连接后里带PROXYIP参数，可以实现不同区域优先IP使用不同的PROXYIP固定区域，解决IP乱跳问题  | [视频教程](https://www.youtube.com/watch?v=4fcyJjstFdg&t=349s)|
| PROXYIP          | proxyip.amclubs.kozow.com </br>或</br> [https://raw.github.../proxyip.txt](https://raw.githubusercontent.com/amclubs/am-cf-tunnel/main/proxyip.txt)  |❌| 访问CloudFlare的CDN代理节点(支持多PROXYIP, PROXYIP之间使用`,`或 换行 作间隔),支持端口设置默认443 如: proxyip.amclubs.kozow.com:2053 ，支持远程txt或csv文件| [视频教程](https://youtu.be/pKrlfRRB0gU) |
| SOCKS5           | user:password@127.0.0.1:1080         |❌| 优先作为访问CFCDN站点的SOCKS5代理                                                   | [视频教程](https://youtu.be/Bw82BH_ecC4) |
| NAT64           | true/false                           |❌| 默认false,是否开启nat做PROXYIP(反代IP)，开启后优选使用NAT64再用PROXYIP       | [视频教程](https://www.youtube.com/watch?v=nx80sGpVoBM&t=533s) |
| NAT64_PREFIX  | 2602:fc59:b0:64::  </br>或</br> [https://raw.github.../nat64Prefix.txt](https://raw.githubusercontent.com/amclubs/am-cf-tunnel/main/nat64Prefix.txt)    |❌| 指定自定NAT64前缀,不填走CF默认的 (https://amclubss.com/public/)     | [视频教程](https://www.youtube.com/watch?v=nx80sGpVoBM&t=533s)|
| SUB_CONFIG       | [https://raw.github.../ACL4SSR_Online_Mini.ini](https://raw.githubusercontent.com/amclubs/ACL4SSR/main/Clash/config/ACL4SSR_Online_Full_MultiMode.ini) |❌| clash、singbox等 订阅转换配置文件  ||
| SUB_CONVERTER    | url.v1.mk                    |❌| clash、singbox等 订阅转换后端的api地址                               ||
| PROT_TYPE        | 默认空          |❌|      默认空,就是生成vless和trojan节点，vless(只生成vless节点)，trojan(只生成trojan节点)           | [视频教程](https://www.youtube.com/watch?v=emEBm8Gw2wI&t=922s) |
| HOST_REAMRK           | true/false                            |❌ | 默认false,是否用订阅域名做节点别名                                      ||

- 本频道订阅器转换地址：https://sub.amclubss.com
  
## 
## 🛠已适配订阅工具 [点击进入视频教程](https://youtu.be/xGOL57cmvaw) [点进进入karing视频教程](https://youtu.be/M3vLLBWfuFg)
<details>
<summary>点击展开/收起</summary>

- Mac（苹果电脑）
   - [v2rayU](https://github.com/yanue/V2rayU/releases) | [clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev/releases) | [Quantumult X](https://apps.apple.com/us/app/quantumult-x/id1443988620) |  [小火箭](https://apps.apple.com/us/app/shadowrocket/id932747118) | [surge](https://apps.apple.com/us/app/surge-5/id1442620678) | [karing](https://karing.app/download) | [sing-box](https://github.com/SagerNet/sing-box/releases)  | [Clash Nyanpasu](https://github.com/keiko233/clash-nyanpasu/releases) | [openclash](https://github.com/vernesong/OpenClash/releases) | [Hiddify](https://github.com/hiddify/hiddify-next/releases)

- Win（win系统电脑）
   - [v2rayN](https://github.com/2dust/v2rayN/releases) |  [clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev/releases) | [sing-box](https://github.com/SagerNet/sing-box/releases) |  [Clash Nyanpasu](https://github.com/keiko233/clash-nyanpasu/releases) | [openclash](https://github.com/vernesong/OpenClash/releases)  | [karing](https://karing.app/download) |  [Hiddify](https://github.com/hiddify/hiddify-next/releases)
     
- IOS（苹果手机）
   - [clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev/releases) |  [Quantumult X](https://apps.apple.com/us/app/quantumult-x/id1443988620)  |  [小火箭](https://apps.apple.com/us/app/shadowrocket/id932747118)  |  [surge](https://apps.apple.com/us/app/surge-5/id1442620678) |  [sing-box](https://github.com/SagerNet/sing-box/releases) | [Clash Nyanpasu](https://github.com/keiko233/clash-nyanpasu/releases) | [karing](https://karing.app/download) | [Hiddify](https://github.com/hiddify/hiddify-next/releases)
     
- Android（安卓手机）
   - [v2rayNG](https://github.com/2dust/v2rayNG/releases) |  [clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev/releases) | [sing-box](https://github.com/SagerNet/sing-box/releases) |  [Clash Nyanpasu](https://github.com/keiko233/clash-nyanpasu/releases) |  [karing](https://karing.app/download) | [Hiddify](https://github.com/hiddify/hiddify-next/releases)

- 软路由
   - [openclash(clash.meta)](https://github.com/vernesong/OpenClash/releases) 
  
</details>

##
###  🌟推荐
**【流量光】** 中转+专线高速机场 (**9.9元300G每月**) (**75元包年每月300G**) (**55元1000GB不限时**)✅畅爽晚高峰 解锁ChatGPT、全流媒体(送小火箭)
</br>🌐官网：[https://llgjc1.com](https://llgjc1.com/#/register?code=bIUDEPTu)

# 
<center>
<details><summary><strong> ☕ [点击展开] 赞赏支持 ~🧧</strong></summary>
*我非常感谢您的赞赏和支持，它们将极大地激励我继续创新，持续产生有价值的工作。*

- **USDT-TRC20:** `TWTxUyay6QJN3K4fs4kvJTT8Zfa2mWTwDD`
- **TRX-TRC20:** `TWTxUyay6QJN3K4fs4kvJTT8Zfa2mWTwDD`

<div align="center"> 
  <img src="https://github.com/user-attachments/assets/e6cdc42a-6374-4722-b833-601738f72196" width="200"></br> 
  TRC10/TRC20扫码支付 
</div> 
</details>
</center>

# 
 ⚠️免责声明:
 - 1、该项目设计和开发仅供学习、研究和安全测试目的。请于下载后 24 小时内删除, 不得用作任何商业用途, 文字、数据及图片均有所属版权, 如转载须注明来源。
 - 2、使用本程序必循遵守部署服务器所在地区的法律、所在国家和用户所在国家的法律法规。对任何人或团体使用该项目时产生的任何后果由使用者承担。
 - 3、作者不对使用该项目可能引起的任何直接或间接损害负责。作者保留随时更新免责声明的权利，且不另行通知。
 - 
