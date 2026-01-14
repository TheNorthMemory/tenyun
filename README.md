# TenYun

Promise based and chained Tencent Cloud OpenAPI client for NodeJS

[![release](https://img.shields.io/npm/v/tenyun)](https://github.com/TheNorthMemory/tenyun/releases)
[![advisor](https://snyk.io/advisor/npm-package/tenyun/badge.svg)](https://snyk.io/advisor/npm-package/tenyun)
[![types](https://img.shields.io/badge/types-included-blue)](https://www.npmjs.com/package/tenyun)
[![requirement](https://img.shields.io/node/v/tenyun)](https://www.npmjs.com/package/tenyun)
[![downloads](https://img.shields.io/npm/dm/tenyun)](https://www.npmjs.com/package/tenyun)
[![license](https://img.shields.io/npm/l/tenyun)](https://www.npmjs.com/package/tenyun)

## 设计

核心包通过实例化后两次`Proxy`动态代理，第一层代理 `产品标识`，第二层代理`产品服务` 实现了通过一个实例接入腾讯云各产品服务的能力，默认为`最新`版本的接口接入，同时提供`往期`版本(通过第二参数传递`X-TC-Version`头)的接入能力。

[![SDK FlowChart](./.github/sdk-flowchart.svg)](./.github/sdk-flowchart.mmd)

## 使用

`npm install tenyun`

```js
import TenYun from 'tenyun';

const secretId = 'AKIDz8krbsJ5yKBZQpn74WFkmLPx3*******';
const secretKey = 'Gu5t9xGARNpq86cd98joQYCN3*******';

const tc = new TenYun(secretId, secretKey);

const sampleRequest = {
  Limit: 1,
  Filters: [
    {
      Values: [ '未命名' ],
      Name: 'instance-name',
    },
  ],
};

// Promise based
tc.cvm.DescribeInstances(sampleRequest)
.then(({ data }) => console.info(data))
.catch((error) => console.error(error.code));

// Async/Await based
(async () => {
  try {
    const { data } = await tc.cvm.DescribeInstances(sampleRequest);
    console.info(data);
  } catch(error) {
    console.error(error);
  }
})();

// Request the specific `X-TC-Version` API
tc.sms.DescribeSmsSignList(
  {
    SignIdSet: [ 123 ],
    International: 0,
  }, {
    headers: {
      'X-TC-Version': '2019-07-11',
    },
  },
)
.then(({ data }) => console.info(data))
.catch((error) => console.error(error.code));

// none documentation APIs
tc.tcbr.DescribeArchitectureType()
.then(({ data }) => console.info(data))
.catch((error) => console.error(error.code));

console.info(tc);

TenYun {
  cvm: [Function: cvm.tencentcloudapi.com] {
    DescribeInstances: [AsyncFunction: DescribeInstances]
  },
  sms: [Function: sms.tencentcloudapi.com] {
    DescribeSmsSignList: [AsyncFunction: DescribeSmsSignList]
  },
  tcbr: [Function: tcbr.tencentcloudapi.com] {
    DescribeArchitectureType: [AsyncFunction: DescribeArchitectureType]
  },
  [Symbol(SECRET_ID)]: 'AKIDz8krbsJ5yKBZQpn74WFkmLPx3*******',
  [Symbol(SECRET_KEY)]: SecretKeyObject { [Symbol(kKeyType)]: 'secret' }
}
```

## API

**`new TenYun(SecretId: string, SecretKey: BinaryLike, Token?: string, Region?: string)`**

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| SecretId | <code>string</code> | 密钥ID |
| SecretKey | <code>BinaryLike</code> | 密钥 |
| Token | <code>string</code> | 临时安全凭证(可选) |
| Region | <code>string</code> | 地域参数(可选) |

**`tenYun[ServiceShortName]() => string[]`**

返回支持的服务版本 `YYYY-MM-DD` 格式字符串数组，`DESC` 排序。

**`tenYun[ServiceShortName][ActionName](data?: any, config?: AxiosRequestConfig) => AxiosPromise`**

请求对应产品的服务。

**`tenYun.client => AxiosInstance`**

返回 `Axios` 实例。


## 支持的产品及服务

<details><summary>共计 248+ 款产品，13233+ 服务数</summary>

产品标识 | 产品说明 | 最新版本(数) | 历史版本(数)
--- | --- | --- | ---
aai |  | 2018-05-22(4) |
aca | [AI 临床助手](https://cloud.tencent.com/document/product/1388) | 2021-03-23(8) |
acp | [应用合规平台](https://cloud.tencent.com/document/product/1553) | 2022-01-05(8) |
advisor | [云顾问](https://cloud.tencent.com/document/product/1264) | 2020-07-21(2) |
af | [借贷反欺诈](https://cloud.tencent.com/document/product/668) | 2020-02-26(3) |
afc | [定制建模](https://cloud.tencent.com/document/product/1029) | 2020-02-26(3) |
ags | [Agent 沙箱服务](https://cloud.tencent.com/document/product/1814) | 2025-09-20(14) |
ai3d | [腾讯混元生3D](https://cloud.tencent.com/document/product/1804) | 2025-05-13(13) |
aiart | [腾讯混元生图](https://cloud.tencent.com/document/product/1668) | 2022-12-29(25) |
ame | [正版曲库直通车](https://cloud.tencent.com/document/product/1155) | 2019-09-16(31) |
ams | [音频内容安全](https://cloud.tencent.com/document/product/1219) | 2020-12-29(5) | 2020-06-08(7) |
anicloud | [动效素材服务](https://cloud.tencent.com/document/product/1641) | 2022-09-23(3) |
antiddos | [T-Sec-DDoS防护(Anti-DDoS)](https://cloud.tencent.com/document/product/1021) | 2020-03-09(97) |
ape | [正版图库直通车](https://cloud.tencent.com/document/product/1181) | 2020-05-13(8) |
api | [云 API](https://cloud.tencent.com/document/product/1278) | 2020-11-06(3) |
apigateway | [API 网关](https://cloud.tencent.com/document/product/628) | 2018-08-08(99) |
apm | [应用性能监控](https://cloud.tencent.com/document/product/1463) | 2021-06-22(27) |
asr | [语音识别](https://cloud.tencent.com/document/product/1093) | 2019-06-14(32) |
asw | [应用与服务编排工作流](https://cloud.tencent.com/document/product/1272) | 2020-07-22(9) |
as | [弹性伸缩](https://cloud.tencent.com/document/product/377) | 2018-04-19(58) |
ba | [ICP备案](https://cloud.tencent.com/document/product/243) | 2020-07-20(3) |
batch | [批量计算](https://cloud.tencent.com/document/product/599) | 2017-03-12(30) |
bda | [人体分析](https://cloud.tencent.com/document/product/1208) | 2020-03-24(5) |
bh | [运维安全中心（堡垒机）](https://cloud.tencent.com/document/product/1025) | 2023-04-18(102) |
bi | [商业智能分析 BI](https://cloud.tencent.com/document/product/590) | 2022-01-05(29) |
billing | [费用中心](https://cloud.tencent.com/document/product/555) | 2018-07-09(63) |
bizlive | 商业直播 | 2019-03-13(6) |
bm | [黑石物理服务器CPM](https://cloud.tencent.com/document/product/386) | 2018-04-23(53) |
bma | [品牌经营管家](https://cloud.tencent.com/document/product/1296) | 2022-11-15(11) | 2021-06-24(28) |
bmeip | [黑石弹性公网IP](https://cloud.tencent.com/document/product/1028) | 2018-06-25(20) |
bmlb | [黑石负载均衡](https://cloud.tencent.com/document/product/1027) | 2018-06-25(49) |
bmvpc | [黑石私有网络](https://cloud.tencent.com/document/product/1024) | 2018-06-25(61) |
bpaas | [商业流程服务](https://cloud.tencent.com/document/product/1083) | 2018-12-17(2) |
bri | [业务风险情报](https://cloud.tencent.com/document/product/1064) | 2019-03-28(1) |
bsca | [软件成分分析](https://cloud.tencent.com/document/product/1483) | 2021-08-11(7) |
btoe | [区块链可信取证](https://cloud.tencent.com/document/product/1259) | 2021-05-14(13) | 2021-03-03(12) |
ca | [腾讯云CA](https://cloud.tencent.com/document/product/1691) | 2023-02-28(3) |
cam | [访问管理](https://cloud.tencent.com/document/product/598) | 2019-01-16(92) |
captcha | [验证码](https://cloud.tencent.com/document/product/1110) | 2019-07-22(18) |
car | [应用云渲染](https://cloud.tencent.com/document/product/1547) | 2022-01-10(7) |
cat | [云拨测](https://cloud.tencent.com/document/product/280) | 2018-04-09(14) |
cbs | [云硬盘](https://cloud.tencent.com/document/product/362) | 2017-03-12(46) |
ccc | [云联络中心](https://cloud.tencent.com/document/product/679) | 2020-02-10(82) |
cdb | [云数据库 MySQL](https://cloud.tencent.com/document/product/236) | 2017-03-20(176) |
cdc | [本地专用集群](https://cloud.tencent.com/document/product/1346) | 2020-12-14(23) |
cdn | [内容分发网络 CDN](https://cloud.tencent.com/document/product/228) | 2018-06-06(52+3) |
cds | [T-Sec-数据安全审计（DSA）](https://cloud.tencent.com/document/product/856) | 2018-04-20(5) |
cdwch | [腾讯云数据仓库TCHouse-C](https://cloud.tencent.com/document/product/1299) | 2020-09-15(29) |
cdwdoris | [腾讯云数据仓库 TCHouse-D](https://cloud.tencent.com/document/product/1387) | 2021-12-28(60) |
cdwpg | [腾讯云数据仓库TCHouse-P](https://cloud.tencent.com/document/product/878) | 2020-12-30(24) |
cdz | [专属可用区](https://cloud.tencent.com/document/product/1629) | 2022-11-23(2) |
cfg | [云顾问-混沌演练](https://cloud.tencent.com/document/product/1500) | 2021-08-20(17) |
cfs | [文件存储](https://cloud.tencent.com/document/product/582) | 2019-07-19(57) |
cfw | [云防火墙](https://cloud.tencent.com/document/product/1132) | 2019-09-04(122) |
chc | [云托付物理服务器](https://cloud.tencent.com/document/product/1448) | 2023-04-18(38) |
chdfs | [云 HDFS](https://cloud.tencent.com/document/product/1105) | 2020-11-12(29) | 2019-07-18(26) |
ciam | [账号风控平台](https://cloud.tencent.com/document/product/1441) | 2022-03-31(23) |
cii | [智能保险助手](https://cloud.tencent.com/document/product/1368) | 2021-04-08(13) | 2020-12-10(3) |
cim |  | 2019-03-18(1) |
ckafka | [消息队列 CKafka 版](https://cloud.tencent.com/document/product/597) | 2019-08-19(93) |
clb | [负载均衡](https://cloud.tencent.com/document/product/214) | 2018-03-17(89) |
cloudapp | [云应用](https://cloud.tencent.com/document/product/1689) | 2022-05-30(2) |
cloudaudit | [操作审计](https://cloud.tencent.com/document/product/629) | 2019-03-19(19) |
cloudhsm | [云加密机](https://cloud.tencent.com/document/product/639) | 2019-11-12(14) |
cloudmate | [Cloud Mate](https://cloud.tencent.com/document/product/1816) | 2025-10-30(1) |
cloudstudio | [Cloud Studio（云端 IDE）](https://cloud.tencent.com/document/product/1039) | 2023-05-08(9) |
cls | [日志服务](https://cloud.tencent.com/document/product/614) | 2020-10-16(163) |
cme | [多媒体创作引擎](https://cloud.tencent.com/document/product/1156) | 2019-10-29(50) |
cmq | [消息队列 CMQ](https://cloud.tencent.com/document/product/406) | 2019-03-04(2) |
cms | 内容安全 | 2019-03-21(6) |
config | [配置审计](https://cloud.tencent.com/document/product/1579) | 2022-08-02(7) |
controlcenter | [控制中心](https://cloud.tencent.com/document/product/1708) | 2023-01-10(5) |
cpdp | [企业收付平台](https://cloud.tencent.com/document/product/1122) | 2019-08-20(219) |
csip | [云安全一体化平台](https://cloud.tencent.com/document/product/664) | 2022-11-21(82) |
csxg | [5G入云服务](https://cloud.tencent.com/document/product/1687) | 2023-03-03(5) |
ctem | [暴露面管理服务](https://cloud.tencent.com/document/product/1755) | 2023-11-28(61) |
ctsdb | [时序数据库 CTSDB](https://cloud.tencent.com/document/product/652) | 2023-02-02(2) |
cvm | [云服务器](https://cloud.tencent.com/document/product/213) | 2017-03-12(98) |
cwp | [主机安全](https://cloud.tencent.com/document/product/296) | 2018-02-28(506) |
cws | 漏洞扫描服务 | 2018-03-12(19) |
cynosdb | [TDSQL-C MySQL 版](https://cloud.tencent.com/document/product/1003) | 2019-01-07(170) |
dasb | [运维安全中心（堡垒机）](https://cloud.tencent.com/document/product/1025) | 2019-10-18(63) |
dataagent | [腾讯云数据分析智能体](https://cloud.tencent.com/document/product/1800) | 2025-05-13(21) |
dayu | [DDoS 高防包](https://cloud.tencent.com/document/product/1021) | 2018-07-09(112) |
dbbrain | [数据库智能管家 DBbrain](https://cloud.tencent.com/document/product/1130) | 2021-05-27(85) | 2019-10-16(28) |
dbdc | [云数据库独享集群](https://cloud.tencent.com/document/product/1322) | 2020-10-29(6) |
dbs | [数据库备份服务](https://cloud.tencent.com/document/product/1513) | 2021-11-08(8) |
dc | [专线接入](https://cloud.tencent.com/document/product/216) | 2018-04-10(22) |
dcdb | [TDSQL MySQL 版](https://cloud.tencent.com/document/product/557) | 2018-04-11(83) |
dlc | [数据湖计算 DLC](https://cloud.tencent.com/document/product/1342) | 2021-01-25(185) |
dnspod | [DNSPod](https://cloud.tencent.com/document/product/1427) | 2021-03-23(94) |
domain | [域名注册](https://cloud.tencent.com/document/product/242) | 2018-08-08(55) |
drm | [数字版权管理](https://cloud.tencent.com/document/product/1000) | 2018-11-15(11) |
ds | [文档服务](https://cloud.tencent.com/document/product/869) | 2018-05-23(12) |
dsgc | [数据安全治理中心](https://cloud.tencent.com/document/product/1087) | 2019-07-23(133) |
dts | [数据传输服务](https://cloud.tencent.com/document/product/571) | 2021-12-06(80) | 2018-03-30(22) |
eb | [事件总线](https://cloud.tencent.com/document/product/1359) | 2021-04-16(32) |
ecc | [英文作文批改](https://cloud.tencent.com/document/product/1076) | 2018-12-13(4) |
ecdn | [全站加速网络](https://cloud.tencent.com/document/product/570) | 2019-10-12(6) |
ecm | [边缘计算机器](https://cloud.tencent.com/document/product/1108) | 2019-07-19(139) |
eiam | [数字身份管控平台（员工版）](https://cloud.tencent.com/document/product/1442) | 2021-04-20(42) |
eis | [数据连接器](https://cloud.tencent.com/document/product/1270) | 2021-06-01(5) | 2020-07-15(3) |
emr | [弹性 MapReduce](https://cloud.tencent.com/document/product/589) | 2019-01-03(92) |
es | [Elasticsearch Service](https://cloud.tencent.com/document/product/845) | 2025-01-01(10) | 2018-04-16(70) |
ess | [腾讯电子签企业版](https://cloud.tencent.com/document/product/1323) | 2020-11-11(134) |
essbasic | [腾讯电子签（基础版）](https://cloud.tencent.com/document/product/1420) | 2021-05-26(94) | 2020-12-22(53) |
evt | [事件中心](https://cloud.tencent.com/document/product/1808) | 2025-02-17(4) |
facefusion | [人脸融合](https://cloud.tencent.com/document/product/670) | 2022-09-27(3) | 2018-12-01(3) |
faceid | [人脸核身](https://cloud.tencent.com/document/product/1007) | 2018-03-01(36) |
fmu | [人脸试妆](https://cloud.tencent.com/document/product/1172) | 2019-12-13(7) |
ft | [人像变换](https://cloud.tencent.com/document/product/1202) | 2020-03-04(6) |
gaap | [全球应用加速](https://cloud.tencent.com/document/product/608) | 2018-05-29(102) |
gme | [游戏多媒体引擎](https://cloud.tencent.com/document/product/607) | 2018-07-11(38) |
goosefs | [数据加速器 GooseFS](https://cloud.tencent.com/document/product/1424) | 2022-05-19(27) |
gs | [云游戏](https://cloud.tencent.com/document/product/1162) | 2019-11-18(83) |
gwlb | [网关负载均衡](https://cloud.tencent.com/document/product/1782) | 2024-09-06(19) |
habo |  | 2018-12-03(2) |
hai | [高性能应用服务](https://cloud.tencent.com/document/product/1721) | 2023-08-12(16) |
hasim | [高可用物联网卡](https://cloud.tencent.com/document/product/1482) | 2021-07-16(22) |
hcm | [数学作业批改](https://cloud.tencent.com/document/product/1004) | 2018-11-06(1) |
hunyuan | [腾讯混元大模型](https://cloud.tencent.com/document/product/1729) | 2023-09-01(21) |
iai | [人脸识别](https://cloud.tencent.com/document/product/867) | 2020-03-03(35) | 2018-03-01(32) |
iap | [身份识别平台](https://cloud.tencent.com/document/product/1782) | 2024-07-13(6) |
ic | [图片瘦身](https://cloud.tencent.com/document/product/636) | 2019-03-07(9) |
icr | [对话机器人](https://cloud.tencent.com/document/product/1268) | 2021-10-14(1) |
ie | [智能编辑](https://cloud.tencent.com/document/product/1186) | 2020-03-04(10) |
ig | [智能导诊](https://cloud.tencent.com/document/product/1273) | 2021-05-18(1) |
igtm | [智能全局流量管理](https://cloud.tencent.com/document/product/1551) | 2023-10-24(28) |
ims | [图片内容安全](https://cloud.tencent.com/document/product/1125) | 2020-12-29(2) | 2020-07-13(1) |
ioa | [iOA 零信任安全管理系统](https://cloud.tencent.com/document/product/1092) | 2022-06-01(27) |
iot | [加速物联网套件](https://cloud.tencent.com/document/product/568) | 2018-01-23(45) |
iotcloud | [物联网通信](https://cloud.tencent.com/document/product/634) | 2021-04-08(73) | 2018-06-14(69) |
iotexplorer | [物联网开发平台](https://cloud.tencent.com/document/product/1081) | 2019-04-23(200) |
iotvideo | [物联网智能视频服务](https://cloud.tencent.com/document/product/1131) | 2021-11-25(108) | 2020-12-15(79)<br/>2019-11-26(68) |
iotvideoindustry | [物联网智能视频服务（行业版）](https://cloud.tencent.com/document/product/1361) | 2020-12-01(104) |
irp | [智能推荐平台](https://cloud.tencent.com/document/product/1541) | 2022-08-05(7) | 2022-03-24(4) |
iss | [智能视图计算平台](https://cloud.tencent.com/document/product/1344) | 2023-05-17(92) |
ivld | [媒体智能标签](https://cloud.tencent.com/document/product/1509) | 2021-09-03(28) |
keewidb | [云数据库 KeeWiDB](https://cloud.tencent.com/document/product/1520) | 2022-03-08(38) |
kms | [密钥管理系统](https://cloud.tencent.com/document/product/573) | 2019-01-18(68) |
lcic | [实时互动-教育版](https://cloud.tencent.com/document/product/1639) | 2022-08-17(71) |
lighthouse | [轻量应用服务器](https://cloud.tencent.com/document/product/1207) | 2020-03-24(118) |
live | [云直播CSS](https://cloud.tencent.com/document/product/267) | 2018-08-01(205) |
lke | [腾讯云智能体开发平台](https://cloud.tencent.com/document/product/1759) | 2023-11-30(106) |
lkeap | [知识引擎原子能力](https://cloud.tencent.com/document/product/1772) | 2024-05-22(27) |
lowcode | [云开发低码](https://cloud.tencent.com/document/product/1301) | 2021-01-08(17) |
mall | [商场客留大数据](https://cloud.tencent.com/document/product/1707) | 2023-05-18(1) |
mariadb | [云数据库 MariaDB](https://cloud.tencent.com/document/product/237) | 2017-03-12(81) |
market | [云市场](https://cloud.tencent.com/document/product/306) | 2019-10-10(2) |
memcached | [云数据库Memcached](https://cloud.tencent.com/document/product/241) | 2019-03-18(1) |
mmps | [小程序安全](https://cloud.tencent.com/document/product/1223) | 2020-07-10(15) |
mna | [多网聚合加速](https://cloud.tencent.com/document/product/1385) | 2021-01-19(41) |
mongodb | [云数据库 MongoDB](https://cloud.tencent.com/document/product/240) | 2019-07-25(66) | 2018-04-08(13) |
monitor | [腾讯云可观测平台](https://cloud.tencent.com/document/product/248) | 2023-06-16(1) | 2018-07-24(169) |
mps | [媒体处理](https://cloud.tencent.com/document/product/862) | 2019-06-12(152) |
mqtt | [消息队列 MQTT 版](https://cloud.tencent.com/document/product/1778) | 2024-05-16(67) |
mrs | [医疗报告结构化](https://cloud.tencent.com/document/product/1314) | 2020-09-10(11) |
ms | [移动应用安全](https://cloud.tencent.com/document/product/283) | 2018-04-08(23) |
msp | [迁移服务平台](https://cloud.tencent.com/document/product/659) | 2018-03-19(7) |
nlp | [NLP 技术](https://cloud.tencent.com/document/product/271) | 2019-04-08(6) |
npp | 号码保护 | 2019-08-23(8) |
oceanus | [流计算 Oceanus](https://cloud.tencent.com/document/product/849) | 2019-04-22(45) |
ocr | [文字识别](https://cloud.tencent.com/document/product/866) | 2018-11-19(87) |
omics | [腾讯健康组学平台](https://cloud.tencent.com/document/product/1643) | 2022-11-28(20) |
open | 腾讯云 OAuth | 2018-12-25(2) |
organization | [集团账号管理](https://cloud.tencent.com/document/product/850) | 2021-03-31(129) | 2018-12-25(20) |
partners | [渠道合作伙伴](https://cloud.tencent.com/document/product/563) | 2018-03-21(23) |
postgres | [云数据库 PostgreSQL](https://cloud.tencent.com/document/product/409) | 2017-03-12(104) |
privatedns | [私有域解析 Private DNS](https://cloud.tencent.com/document/product/1338) | 2020-10-28(40) |
pts | [云压测](https://cloud.tencent.com/document/product/1484) | 2021-07-28(48) |
rce | [全栈式风控引擎](https://cloud.tencent.com/document/product/1343) | 2025-04-25(1) | 2020-11-03(11) |
redis | [云数据库Redis](https://cloud.tencent.com/document/product/239) | 2018-04-12(110) |
region | [地域管理系统](https://cloud.tencent.com/document/product/1596) | 2022-06-27(3) |
rum | [前端性能监控](https://cloud.tencent.com/document/product/1464) | 2021-06-22(54) |
scf | [云函数](https://cloud.tencent.com/document/product/583) | 2018-04-16(52+7) |
securitylake | [安全湖](https://cloud.tencent.com/document/product/1720) | 2024-01-17(1) |
ses | [邮件推送](https://cloud.tencent.com/document/product/1288) | 2020-10-02(35) |
smh | [智能媒资托管](https://cloud.tencent.com/document/product/1339) | 2021-07-12(15) |
smop | [腾讯安心用户运营平台](https://cloud.tencent.com/document/product/1310) | 2020-12-03(1) |
sms | [短信](https://cloud.tencent.com/document/product/382) | 2021-01-11(18) | 2019-07-11(16) |
soe | [智聆口语评测](https://cloud.tencent.com/document/product/884) | 2018-07-24(4) |
sqlserver | [云数据库 SQL Server](https://cloud.tencent.com/document/product/238) | 2018-03-28(148) |
ssa | [安全运营中心](https://cloud.tencent.com/document/product/664) | 2018-06-08(23) |
ssl | [SSL 证书](https://cloud.tencent.com/document/product/400) | 2019-12-05(68) |
sslpod | [证书监控 SSLPod](https://cloud.tencent.com/document/product/1084) | 2019-06-05(10) |
ssm | [凭据管理系统](https://cloud.tencent.com/document/product/1140) | 2019-09-23(24) |
sts | [安全凭证服务](https://cloud.tencent.com/document/product/1312) | 2018-08-13(7) |
svp | [节省计划](https://cloud.tencent.com/document/product/1761) | 2024-01-25(5) |
taf | [流量反欺诈](https://cloud.tencent.com/document/product/1031) | 2020-02-10(1) |
tag | [标签](https://cloud.tencent.com/document/product/651) | 2018-08-13(31) |
tat | [自动化助手](https://cloud.tencent.com/document/product/1340) | 2020-10-28(29) |
tbaas | [腾讯云区块链服务平台 TBaaS](https://cloud.tencent.com/document/product/663) | 2018-04-16(24) |
tbp | [腾讯智能对话平台](https://cloud.tencent.com/document/product/1060) | 2019-06-27(2) | 2019-03-11(4) |
tcaplusdb | [游戏数据库 TcaplusDB](https://cloud.tencent.com/document/product/596) | 2019-08-23(52) |
tcb | [云开发 CloudBase](https://cloud.tencent.com/document/product/876) | 2018-06-08(66+201) |
tcbr | [云托管 CloudBase Run](https://cloud.tencent.com/document/product/1243) | 2022-02-17(19+7) |
tccatalog | [统一Catalog服务](https://cloud.tencent.com/document/product/1784) | 2024-10-24(4) |
tchd | [腾讯云健康看板](https://cloud.tencent.com/document/product/1688) | 2023-03-06(2) |
tcm | [服务网格](https://cloud.tencent.com/document/product/1261) | 2021-04-13(12) |
tcr | [容器镜像服务](https://cloud.tencent.com/document/product/1141) | 2019-09-24(112) |
tcss | [容器安全服务](https://cloud.tencent.com/document/product/1285) | 2020-11-01(341) |
tdai | [腾讯云数据库 AI 服务](https://cloud.tencent.com/document/product/1813) | 2025-07-17(19) |
tdcpg | [TDSQL-C PostgreSQL 版](https://cloud.tencent.com/document/product/1556) | 2021-11-18(25) |
tdid | [分布式身份](https://cloud.tencent.com/document/product/1439) | 2021-05-19(18) |
tdmq | [消息队列 TDMQ](https://cloud.tencent.com/document/product/1179) | 2020-02-17(150) |
tds | [设备安全](https://cloud.tencent.com/document/product/1628) | 2022-08-01(5) |
tem | [弹性微服务](https://cloud.tencent.com/document/product/1371) | 2021-07-01(51) | 2020-12-21(17) |
teo | [边缘安全加速平台](https://cloud.tencent.com/document/product/1552) | 2022-09-01(197) | 2022-01-06(5) |
thpc | [高性能计算平台](https://cloud.tencent.com/document/product/1527) | 2023-03-21(31) | 2022-04-01(16)<br/>2021-11-09(4) |
tia | [智能钛机器学习](https://cloud.tencent.com/document/product/851) | 2018-02-26(10) |
tiia | [图像分析](https://cloud.tencent.com/document/product/865) | 2019-05-29(21) |
tione | [TI-ONE 训练平台](https://cloud.tencent.com/document/product/851) | 2021-11-11(55) | 2019-10-22(22) |
tiw | [互动白板](https://cloud.tencent.com/document/product/1137) | 2019-09-19(35) |
tke | [容器服务](https://cloud.tencent.com/document/product/457) | 2022-05-01(19) | 2018-05-25(255) |
tkgdq | [腾讯知识图谱数据查询](https://cloud.tencent.com/document/product/1072) | 2019-04-11(3) |
tms | [文本内容安全](https://cloud.tencent.com/document/product/1124) | 2020-12-29(3) | 2020-07-13(4) |
tmt | [机器翻译](https://cloud.tencent.com/document/product/551) | 2018-03-21(8) |
tourism | [文旅客情大数据](https://cloud.tencent.com/document/product/1684) | 2023-02-15(1) |
trabbit | [消息队列 RabbitMQ Serverless 版](https://cloud.tencent.com/document/product/1495) | 2023-04-18(29) |
trocket | [消息队列 RocketMQ 版](https://cloud.tencent.com/document/product/1493) | 2023-03-08(72) |
trp | [T-Sec-安心平台(RP)](https://cloud.tencent.com/document/product/1458) | 2021-05-15(54) |
trro | [实时互动-工业能源版](https://cloud.tencent.com/document/product/1584) | 2022-03-25(31) |
trtc | [实时音视频](https://cloud.tencent.com/document/product/647) | 2019-07-22(72) |
tse | [TSF-Polaris&ZK&网关](https://cloud.tencent.com/document/product/1364) | 2020-12-07(123) |
tsf | [TSF-应用管理&Consul](https://cloud.tencent.com/document/product/649) | 2018-03-26(227) |
tsi | [腾讯同传系统](https://cloud.tencent.com/document/product/1399) | 2021-03-25(3) |
tsw | [微服务观测平台 TSW](https://cloud.tencent.com/document/product/1311) | 2021-04-12(3) | 2020-09-24(1) |
tts | [语音合成](https://cloud.tencent.com/document/product/1073) | 2019-08-23(3) |
vcg | [视频生成](https://cloud.tencent.com/document/product/1770) | 2024-04-04(2) |
vclm | [腾讯混元生视频](https://cloud.tencent.com/document/product/1616) | 2024-05-23(21) |
vcube | [音视频终端引擎](https://cloud.tencent.com/document/product/1449) | 2022-04-10(36) |
vdb | [向量数据库](https://cloud.tencent.com/document/product/1709) | 2023-06-16(17) |
vm | [视频内容安全](https://cloud.tencent.com/document/product/1265) | 2021-09-22(4) | 2020-12-29(4)<br/>2020-07-09(5) |
vms | [语音消息](https://cloud.tencent.com/document/product/1128) | 2020-09-02(2) |
vod | [云点播](https://cloud.tencent.com/document/product/266) | 2024-07-18(7) | 2018-07-17(192) |
vpc | [私有网络](https://cloud.tencent.com/document/product/215) | 2017-03-12(433) |
vrs | [声音复刻](https://cloud.tencent.com/document/product/1283) | 2020-08-24(8) |
vtc | [视频转译](https://cloud.tencent.com/document/product/1769) | 2024-02-23(3) |
waf | [Web 应用防火墙](https://cloud.tencent.com/document/product/627) | 2018-01-25(197) |
wav | [企业微信汽车行业版](https://cloud.tencent.com/document/product/1318) | 2021-01-29(26) |
wedata | [数据开发治理平台 WeData](https://cloud.tencent.com/document/product/1267) | 2025-08-06(177) | 2021-08-20(299) |
weilingwith | [微瓴同业开放平台](https://cloud.tencent.com/document/product/1693) | 2023-04-27(63) |
wimgs | [联网图像搜索](https://cloud.tencent.com/document/product/1815) | 2025-11-06(1) |
wsa | [联网搜索API](https://cloud.tencent.com/document/product/1806) | 2025-05-08(1) |
wss | SSL证书管理服务 | 2018-04-26(3) |
yinsuda | [音速达直播音乐版权引擎](https://cloud.tencent.com/document/product/1592) | 2022-05-27(20) |
yunjing | 主机安全 | 2018-02-28(100) |
yunsou | [腾讯云搜TCS](https://cloud.tencent.com/document/product/270) | 2019-11-15(2) | 2018-05-04(2) |

</details>

## 其他

[types](./types/) 基于 [tencentcloud-cli:services](https://github.com/TencentCloud/tencentcloud-cli/tree/master/tccli/services) 及 [@wxcloud/cloudapi](https://www.npmjs.com/package/@wxcloud/cloudapi) 项目生成，其中 [vpc.d.ts](./types/vpc.d.ts) 及 [tag.d.ts](./types/tag.d.ts) 遵循如下生成规则：`vpc:$.objects.Vpc` 对象在本项目内别名为 `interface VpcInfo` ，`tag:$.objects.Tag` 别名为 `interface TagInfo` ，以消除与模块`module`重名而产生的歧义。

## License

[MIT](LICENSE)
