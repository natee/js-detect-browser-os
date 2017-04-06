# js-detect-browser-os
检测浏览器、浏览器版本、操作系统、操作系统版本


## 使用方法
页面引入browser.js后，即可通过全局变量boInfo获取信息。

你可以获取如下信息：
```json
{
	"browser": "Chrome",
	"browserVersion": 52,
	"os": "Mac",
	"osVersion": "OS X"
}
```

某些情况，如APP中内置浏览器，可能得到不符合预期的结果：
```json
{
	"browser": "Chrome",
	"browserVersion: "iPhone 5 IOS 9....",
	"os": "Mac OS X",
	"osVersion": "10_11_6"
}
```

## Usage Example

1. Include the js file in your html.
```
<script src="browser.js" type="text/javascript"></script>
```

2. Get the browser and system info from global variable `window.boInfo`
```
<script type="text/javascript">
console.log(boInfo);
// {browser: "chrome", browserVersion: "57", os: "Mac OS X", osVersion: "10_12_3"}
</script>
```

**Note**
In some special case, the result was not as expected. 
For example, you develop a custom browser in you app, the result maybe below:
```json
{
	"browser": "Chrome",
	"browserVersion: "iPhone 5 IOS 9....",
	"os": "Mac OS X",
	"osVersion": "10_11_6"
}
```
`browserVersion` was not the real version.