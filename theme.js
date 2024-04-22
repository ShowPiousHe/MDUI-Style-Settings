 /*
作者QQ1271431783
 */

 /*保存方式有两种。c值为cookie和l值为localStorage*/
 var save_type = 'l';
 /*前端加载主题。true为开起,false为关闭*/
 var style_show = 'true';

 //主题色
 var l_color = [{
     name: "Auto",
     value: "auto"
 }, {
     name: "Light",
     value: "light"
 }, {
     name: "Dark",
     value: "dark"
 }];
 //主色
 var p_color = [{
     name: "Amber",
     value: "amber"
 }, {
     name: "Blue",
     value: "blue"
 }, {
     name: "Blue Grey",
     value: "blue-grey"
 }, {
     name: "Brown",
     value: "brown"
 }, {
     name: "Cyan",
     value: "cyan"
 }, {
     name: "Deep Orange",
     value: "deep-orange"
 }, {
     name: "Deep Purple",
     value: "deep-purple"
 }, {
     name: "Green",
     value: "green"
 }, {
     name: "Grey",
     value: "grey"
 }, {
     name: "Indigo",
     value: "indigo"
 }, {
     name: "Light Blue",
     value: "light-blue"
 }, {
     name: "Light Green",
     value: "light-green"
 }, {
     name: "Lime",
     value: "lime"
 }, {
     name: "Orange",
     value: "orange"
 }, {
     name: "Pink",
     value: "pink"
 }, {
     name: "Purple",
     value: "purple"
 }, {
     name: "Red",
     value: "red"
 }, {
     name: "Teal",
     value: "teal"
 }, {
     name: "Yellow",
     value: "yellow"
 }];
 // 强调色
 var a_color = [{
     name: "Amber",
     value: "amber"
 }, {
     name: "Blue",
     value: "blue"
 }, {
     name: "Cyan",
     value: "cyan"
 }, {
     name: "Deep Orange",
     value: "deep-orange"
 }, {
     name: "Deep Purple",
     value: "deep-purple"
 }, {
     name: "Green",
     value: "green"
 }, {
     name: "Indigo",
     value: "indigo"
 }, {
     name: "Light Blue",
     value: "light-blue"
 }, {
     name: "Light Green",
     value: "light-green"
 }, {
     name: "Lime",
     value: "lime"
 }, {
     name: "Orange",
     value: "orange"
 }, {
     name: "Pink",
     value: "pink"
 }, {
     name: "Purple",
     value: "purple"
 }, {
     name: "Red",
     value: "red"
 }, {
     name: "Teal",
     value: "teal"
 }, {
     name: "Yellow",
     value: "yellow"
 }];
 var style = {
     'default': function() {
         return {
             primary: 'indigo',
             accent: 'pink',
             layout: 'auto',
         }
     },
     'log': function(v) {
         console.log(v);
     },
     'checked': function(e) {
         window.document.querySelector(e).checked = true;
     },
     'get': function() {
         /*获取主题*/
         var a = null;
         var name = 'theme_style';
         if (save_type == 'c') {
             var Theme_Style = document.cookie.replace(/(?:(?:^|.*;\s*)theme_style\s*\=\s*([^;]*).*$)|^.*$/, '$1');
         }
         if (save_type == 'l') {
             var Theme_Style = localStorage.getItem(name);
         }
         if (Theme_Style != '') {
             var a = JSON.parse(Theme_Style);
         }
         return a
     },
     'save': function(value) {
          /*保存主题*/
         stuStr = JSON.stringify(value);
         var name = 'theme_style';
         if (save_type == 'c') {
             /*设置 cookie*/
             /*cookie 有效期为 1 年*/
             var date = new Date();
             date.setTime(date.getTime() + 365 * 24 * 3600 * 1000);
             document.cookie = name + '=' + stuStr + '; expires=' + date.toGMTString() + '; path=/';
         }
         if (save_type == 'l') {
             localStorage.setItem(name, stuStr);
         }
     },
     'panel': function() {
         var panel = `<div class="mdui-dialog" id="dialog-panel-theme">
        <div class="mdui-dialog-title">
            设置主题</div>
        <div class="mdui-dialog-content" style="height: 292.364px;">
            <p class="mdui-typo-title">主题色</p>
            <form class="mdui-row-xs-2 mdui-row-sm-2 mdui-row-md-3" id="form_layout">
            ${style.for('theme-layout',l_color)}
            </form>
            <p class="mdui-typo-title mdui-text-color-theme">主色</p>
            <form class="mdui-row-xs-2 mdui-row-sm-2 mdui-row-md-3" id='form_primary'>
             ${style.for('theme-primary',p_color)}
            </form>
            <p class="mdui-typo-title mdui-text-color-theme-accent">强调色</p>
            <form class="mdui-row-xs-2 mdui-row-sm-2 mdui-row-md-3" id="form_accent">
             ${style.for('theme-accent',a_color)}
            </form>
            </div>
            <div class="mdui-divider"></div>
            <div class="mdui-dialog-actions">
    <button class="mdui-btn mdui-ripple mdui-float-left" mdui-dialog-cancel=""> 恢复默认主题 </button>
    <button class="mdui-btn mdui-ripple" mdui-dialog-confirm="">ok</button>
</div>`;
         document.body.insertAdjacentHTML('beforeend', panel);
         /*获取主题*/
         var theme = style.get();
         style.checked('input[name="theme-layout"][value="' + theme.layout + '"]');
         style.checked('input[name="theme-accent"][value="' + theme.accent + '"]');
         style.checked('input[name="theme-primary"][value="' + theme.primary + '"]');
         // document.body.appendChild(a);
         /*切换主色*/
         const form_primary = window.document.getElementById("form_primary");
         form_primary.addEventListener("change", function(e) {
             style.setTheme({
                 primary: e.target.value,
             });
         });
         /*切换强调色*/
         const form_accent = window.document.getElementById("form_accent");
         form_accent.addEventListener("change", function(e) {
             style.setTheme({
                 accent: e.target.value,
             });
         });
         /*切换主题色*/
         const form_layout = window.document.getElementById("form_layout");
         form_layout.addEventListener("change", function(e) {
             style.setTheme({
                 layout: e.target.value,
             });
         });
         /*恢复默认主题*/
         window.document.getElementById("dialog-panel-theme").addEventListener("cancel.mdui.dialog", function(e) {
             var default_style = style.default();
             style.setTheme(default_style);
         });

     },
     'for': function(n, a) {
         var tmp = "";
         if (n == 'theme-primary' || n == 'theme-accent') {
             a.forEach(function(ele, index) {
                 tmp += `<div class="mdui-col mdui-text-color-${ele.value}">
                    <label class="mdui-radio mdui-m-b-1 ">
                        <input type="radio" name="${n}" value="${ele.value}" checked=""></input>
                        <i class="mdui-radio-icon"></i>
                        ${ele.name}
                    </label>
                </div>`;
             });
         } else {
             a.forEach(function(ele, index) {
                 tmp += `<div class="mdui-col">
                    <label class="mdui-radio mdui-m-b-1 ">
                        <input type="radio" name="${n}" value="${ele.value}" checked=""></input>
                        <i class="mdui-radio-icon"></i>
                        ${ele.name}
                    </label>
                </div>`;
             });
         }
         return tmp;
     },
     'setTheme': function(theme) {
         if (typeof theme.primary === 'undefined') {
             theme.primary = false;
         }
         if (typeof theme.accent === 'undefined') {
             theme.accent = false;
         }
         if (typeof theme.layout === 'undefined') {
             theme.layout = false;
         }
         if (typeof theme.detailed === 'undefined') {
             theme.detailed = false;
         }
         if (typeof theme.Windx === 'undefined') {
             theme.Windx = false;
         }
         var i, len;
         var $body = window.document.getElementsByTagName('body')[0];
         var classStr = $body.getAttribute("class");
         var classs = classStr.split(' ');
         /*获取主题*/
         var Theme_Style = style.get();

         /*设置主色*/
         if (theme.primary !== false) {
             for (i = 0, len = classs.length; i < len; i++) {
                 if (classs[i].indexOf('mdui-theme-primary-') === 0) {
                     $body.classList.remove(classs[i])
                 }
                 if (classs[i].indexOf('mdui-color-') === 0) {
                     $body.classList.remove(classs[i])
                 }
             }
             $body.classList.add('mdui-theme-primary-' + theme.primary);
             Theme_Style.primary = theme.primary,
                 style.checked('input[name="theme-primary"][value="' + theme.primary + '"]');



         }

         /*设置强调色*/
         if (theme.accent !== false) {
             for (i = 0, len = classs.length; i < len; i++) {
                 if (classs[i].indexOf('mdui-theme-accent-') === 0) {
                     $body.classList.remove(classs[i]);
                 }
             }
             $body.classList.add('mdui-theme-accent-' + theme.accent);
             Theme_Style.accent = theme.accent,
                 style.checked('input[name="theme-accent"][value="' + theme.accent + '"]');

         }
         /*设置主题色*/
         if (theme.layout !== false) {
             for (i = 0, len = classs.length; i < len; i++) {
                 if (classs[i].indexOf('mdui-theme-layout-') === 0) {
                     $body.classList.remove(classs[i]);
                 }
             }
             $body.classList.add('mdui-theme-layout-' + theme.layout);
             Theme_Style.layout = theme.layout,
                 style.checked('input[name="theme-layout"][value="' + theme.layout + '"]');

         }
         style.save(Theme_Style);

     },
     'Init': function() {
         var $body = window.document.getElementsByTagName('body')[0];
         /*获取主题*/
         var Theme_Style = style.get();
         /*首次打开默认样式*/
         if (Theme_Style == null) {
             var default_style = style.default();
             style.save(default_style);
             var Theme_Style = default_style;
         }
         /*加载主题设置面板。*/
         style.panel();
         /*前端主题加载控制。*/
         if (style_show == 'false') {
             return
         }
         /*获取主题色*/
         var layout = Theme_Style.layout;
         /*获取主色*/
         var primary = Theme_Style.primary;
         /*获取强调色*/
         var accent = Theme_Style.accent;
         $body.classList.add('mdui-theme-accent-' + accent, 'mdui-theme-primary-' + primary, 'mdui-theme-layout-' + layout);
     },
 }
 window.onload = function() {
  /*主题初始化*/     
     style.Init();
 }