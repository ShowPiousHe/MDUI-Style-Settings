# MDUI-Style-Settings

使用方法直接以引入js。


``` html
 <script src="theme.js"></script>
``` 
##设置面板打开方法

**代码段**

``` html
 <button class="mdui-btn mdui-ripple" mdui-dialog="{target:'#dialog-panel-theme'}">open</button>

```
##功能介绍
**代码段**

``` js

 /*保存方式有两种。c值为cookie和l值为localStorage*/
 var save_type = 'l';
 /*前端加载主题。true为开起,false为关闭*/
 var style_show = 'true';

```

