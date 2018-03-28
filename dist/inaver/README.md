# inaver导航栏组件参数说明：

### 说明：引用该导航栏，请设置navigationStyle: 'custom',同时尽可能检测微信版本是否高于6.6.0，以便更好的显示和交互

## 传入参数

| 参数 | 类型 | 默认 | 备注 |
| background | String | #353535 | 十六进制颜色 |
| colorTheme | String | white | 可选，black、white |
| showBack | Boolean | true | 是否显示返回按钮 |
| toBack | Boolean | true | 点击返回按钮执行返回 |
| checkCompatibility | Boolean | true | 兼容性检测，判断微信版本是否支持，不支持则不显示 |
| protectCapsule | Boolean | true | 保护胶囊，不被污染；取消可扩大显示区域 |


## slot

#### slot="main" 大小及区域受showBack、protectCapsule影响

## 方法

#### back   通过 @back.user="" 绑定


##### 补充说明：字体颜色及背景颜色设置，请同步app内window设置【使得状态栏样式保持一致】；

