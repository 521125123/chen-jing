# grid 布局

- 在哪里, 大家看过九宫格布局方式
- 考题中, 有多少让元素在屏幕居中的方法?
 - flex body d:f  justify-content:center  align-items:center;
 - grid 二代 二维的时候 justify-content:center
 - 定位
 - margin 赋值
 - ......
- grid-tempalte -rows|columns
    布局可以直接对二维名场面
- 9个元素, 请大家给一个方案, 每一个格子背景颜色不一样?
    - js 是王者,ele.style 
    - css方案 .box:nth-child(odd或even)
        ? 每一个都不一样
        .box:nth-child(1) .box:nth-child(odd或even) :last-child
    - 别的方案? 就个格子, 更多格子? 选择器写的有没有一点累？
- 弹性布局在解决现代移动端甚至未来物联网，不好解决或者解决麻烦
  九宫格 多加每一行的父元素
  grid 的二维布局方案来了。 
- 在垂直方向做主元素分配高度
    display:grid + grid-template-rows:1fr atuo
- firstChild lastChild
    childNodes 换行符会做为空的文本结点来
    lastElementChild 最后一个元素
    intersectionRatio: 0 可交互的比例为0,不可见