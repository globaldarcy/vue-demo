1. 渐进式框架
2. Vue两个核心点
    - 响应的数据绑定(Object.definedProperty中的setter/getter)
    - 组合的视图组件
3.虚拟DOM
4.MVVM模式
    - M: Model 数据模型 let data = {};
    - V: View 视图模版 DOM
    - VM: View-Model 视图模型 new Vue();
5.声明式渲染
    - 声明式 无需关心如何实现
        使用map方法
    - 命令式 自己来实现
        使用for循环
6.Vue指令
    - v-on 缩写@    v-on:click="handle('ok', $event)"
    - v-bind 缩写:   v-bind:src="imageSrc"
    - v-model    v-model="item.isChecked"




HTML5 中的一些有趣的新特性：
    用于绘画的 canvas 元素
    用于媒介回放的 video 和 audio 元素
    对本地离线存储的更好的支持
    新的特殊内容元素，比如 article、footer、header、nav、section
    新的表单控件，比如 calendar、date、time、email、url、search

其中最重要的 CSS3 模块包括：
    选择器
        :last-child
        :enabled
        :disabled
        :not(selector)
    背景和边框
        background-size	规定背景图片的尺寸
        background-clip	规定背景的绘制区域。
        background-origin	规定背景图片的定位区域。
            content-box、padding-box 或 border-box
        background-image:url(bg_flower.gif),url(bg_flower_2.gif); CSS3 多重背景图片

        border-radius
        box-shadow
        border-image
    文本效果
        text-shadow	向文本添加阴影。
        <style>
        @font-face {
            font-family: myFirstFont;
            src: url('Sansation_Light.ttf'),
            url('Sansation_Light.eot');
        }
        div {font-family: myFirstFont; }
        </style>
    2D/3D 转换
        transform
    过渡
        transition
    动画
        @keyframes	规定动画。
        animation	所有动画属性的简写属性，除了 animation-play-state 属性。
        animation:myfirst 5s;
        @keyframes myfirst{
            0%   {background:red; left:0px; top:0px;}
            25%  {background:yellow; left:200px; top:0px;}
            50%  {background:blue; left:200px; top:200px;}
            75%  {background:green; left:0px; top:200px;}
            100% {background:red; left:0px; top:0px;}
        }
    多列布局
        CSS3 多列
            column-count
            column-gap
            column-rule
    用户界面
        box-sizing: content-box|border-box|inherit;