
xcxutils
=====
小程序工具库


## 安装

```
npm i xcxutils
```

## 测试 

```
npm run test
```

## 使用

加载
```javascript
// 加载所有
import * as utils from './node_modules/xcxutils/src/index'

// 加载验证库
import {verify}  from './node_modules/xcxutils/src/index'

// 加载sha1加密
import {sha1}  from './node_modules/xcxutils/src/index'

// 加载md5加密
import {md5}  from './node_modules/xcxutils/src/index'


// 加载微信小程序库
import {wx}  from './node_modules/xcxutils/src/index'

// 加载公用方法库
import {base}  from './node_modules/xcxutils/src/index'


```

示例

```
 //app.js  热更新 
 import {wx}  from './node_modules/xcxutils/src/index'
 onShow() {
     // 热更新
     wx.hotupdate();
  }
  
  // 解码
  decodeUserInfo: async function() {
      try {
        let code = await wx.login();
        let userResult = await wx.getUserInfo();
        // 调用接口解码 原来需要写很多回调方法现在只需要两行代码获取加密数据
      }catch(e){
        // ... 
      }
      
   // md5加密
   import {md5}  from './node_modules/xcxutils/src/index'
   md5(123); 
   
   // sha1加密
   import {sha1}  from './node_modules/xcxutils/src/index'
   sha1(123); 
 
```


## 功能说明 -整理了小程序开发中常用功能

1. 加密  md5，sha1加密

2. 验证 手机号验证，中文验证，邮箱验证等

3. 微信常用功能改为promise 登录，获取用户信息，热更新等

4. 公共方法 深度克隆，判断类型，私有属性，类型转换等







