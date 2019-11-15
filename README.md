# nginxShortcut
a vscode extension that you can reload or configurate nginx in editor
## 配置

在Visual Studio 的`setting.json`中新增`nginxShortcut.nginxDir`字段,如：


```
{
  ...
  "nginxShortcut.nginxDir": "C:\\Users\\Marco\\nginx-1.17.5", // nginx所在目录
  ...
}
```

## 使用

在Visual Studio中，打开任意文件时，右击菜单即可看到三个命令：

* `reload nginx`: 启动nginx，在已开启nginx时会重启nginx
* `stop nginx`: 关闭nginx
* `configurate nginx`: 打开nginx配置文件

