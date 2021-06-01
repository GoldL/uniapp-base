## uniapp-base 基础框架
##### 1、项目准备
- 此项目为[`uniapp`](https://uniapp.dcloud.io/)+[`uView](http://uviewui.com/components/install.html)UI框架组合
- 请使用[`Hbuilder`](https://www.dcloud.io/hbuilderx.html) 
- 确保[`Hbuilder`](https://www.dcloud.io/hbuilderx.html)已经装了插件[`scss/sass编译`](https://ask.dcloud.net.cn/article/35683)
##### 2、启动项目
- `npm install` 下载依赖
- 菜单栏中的【运行】-> 【运行到浏览器】-> 【Google】
##### 3、打包项目
- 环境打包
	- 菜单栏中【发行】-> 【网站-PC Web说手机H5...】
	- 到打包后的路径`unpackage/build/h5`，把`h5`文件夹改成`projectName`
	- 将`projectName`文件夹移到服务器相对应的文件夹
##### 4、项目配置点
- 1. `H5`中跨域问题配置
![H5中跨域问题配置](https://img-blog.csdnimg.cn/20210531165937276.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI5MDg4MDE1,size_16,color_FFFFFF,t_70#pic_center)
- 2. 项目中引用[阿里`icontfont`](https://www.iconfont.cn/home/index)
	[uniapp引入自定义图标库 --- 阿里巴巴矢量图标库iconfont](https://blog.csdn.net/qq_29088015/article/details/111520732)