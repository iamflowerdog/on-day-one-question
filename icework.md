## 阿里飞冰技术调研报告
* 报告人：杨勇海
* 调研时间：2020年4月20日-2020年4月21日

### 1、飞冰能解决什么问题？
* 参考链接 [about](https://ice.work/docs/guide/about)
* 飞冰致力于降低开发者的门槛，通过IDE开发工具，快速生成配置页面和文件
* 基于物料拼装提高项目开发效率，同时提供丰富的 React/Vue 物料
* 结合丰富的经验沉淀出的项目开发最佳实践，包括目录结构、开发调试、路由配置、状态管理等

### 2、使用物料创建项目流程
1. 安装 iceworks 
  - 下载链接以Mac为例 [mac安装包](https://iceworks.oss-cn-hangzhou.aliyuncs.com/mac/iceworks-setup.dmg)
  - 双击下载的 .dmg 文件
  - 拖动 iceworks 的图标到 `Applications` 文件夹。
2. 创建项目
  - 点击 + 按钮
  - 选择模版
  - 填写项目信息x
  - 点击进入工作台按钮
3. 选择一个物料
  
4. 启动调试
  - 通过IDE启动暂时有问题 详情件bug(`https://github.com/alibaba/ice/issues/3103`)，可以通过终端启动 
    1. npm init ice app
    2. cd app && npm install 
    3. npm start
  - 可以看到浏览器页面 `http://localhost:3333/#/`

### 3. 私有化物料协议
1.	搭建自己的私有npm 
2.	创建自己的公共可复用的组件（物料）
3.	通过全局或着项目配置物料
4.  将物料数据托管，先发布到私有npm，然后通过私有npm拿到url即可

### 4. 源码目录说明

