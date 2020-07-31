# vue环境搭建（win）

## ⭐️⭐️⭐️ vscode中vue插件

### 1、vue-helper

### 2、vetur

### 3、VSCode Snippets



## 一、安装node

### 1、node官网地址

![屏幕快照 2019-12-27 下午2.45.12](/Users/wusaisai/Desktop/屏幕快照 2019-12-27 下午2.45.12.png)

#### 查看node安装是否成功

​		`node -v`   //查看node版本

​		`npm  -v`   //查看npm版本

#### npm运行慢，可以配置国内淘宝镜像包

​		npm install -g cnpm --registry=https://registry.npm.taobao.org

### 安装完成后

​		cnpm install  xxx

### 2、配置node环境变量

#### 我的电脑（属性）=>高级系统设置=>环境变量 

### 编辑path环境变量，新增node安装路径

![img](https://img2018.cnblogs.com/blog/1255969/201904/1255969-20190425174120421-931628862.png)

![img](https://img2018.cnblogs.com/blog/1255969/201904/1255969-20190425174127175-766714564.png)

### 增加环境变量NODE_PATH 配置的内容为node_modules 路径

![img](https://img2018.cnblogs.com/blog/1255969/201904/1255969-20190425174145298-260038724.png)

如：安装配置过 以上步骤可以略过

## 二、安装vue

​		`yarn` 安装    //不是必要安装 可选 

​		`npm install yarn -g `     //安装yarn程序 执行命令即可



​		`npm install vue`            //安装vue  

​		`npm install -g @vue/cli` or `yarn global add @vue/cli` // 全局安装vue/cli

## 三、项目创建

​		`vue create my-project`  //vue项目创建

## 四、vue项目启动启动

​		`npm run dev ` or `yarn serve`

## 五、打开网页

​		`http://localhost:8080/ `