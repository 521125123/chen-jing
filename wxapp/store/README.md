# 主任家的小程序

水果电商小程序
shop(店)   <-  水果
10：06  kfc  打烊
 
2. 页面功能, 搜索、swiper、列表。
组件化思想
3. isShow？
isShow true  false 没准备好。
4. 搜索
5. 轮播图
    大项目页面比较长,用组件封装出去,没有那么长,提高复用性
    application <-  page  <-  components  <- 原子的组标
    组件有data 和propertoty的概念，
    page老板  component 打工人 ， property属性  data
6. tab切换？
    1. 设置数据  tab状态相关  activeTypeId
    2. 多个type 放到数据里
    - css flex  1/4
    位置怎莫做
7. 数据库设计
    - fruit-board
    支持where 操作  0 1 2 3
    onShow 是否上架
    详情页 swiper
- flex 里怎么让元素下去
- 设计一下购物车?  数组某项商品,  数量
   购物车功能: 首页, 要加入购物车 加入  改数量
   购物车  展示出来  加入购物车
   详情页, 加入购物
   关于购物车的数据，是不是要超出页面化，来到?
   比页面级别更大的是谁?
   view|image  标签  -> component -> page ->application
   globalData  promise  是否有重复的判断
