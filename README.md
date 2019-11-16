# nginxShortcut
a vscode extension that you can reload or configurate nginx in editor.
帮助你在编辑器中快速配置与重启nginx.
## Config

Add item `nginxShortcut.nginxDir` in `setting.json` of Visual Studio Code, eg：


```
{
  ...
  "nginxShortcut.nginxDir": "C:\\Users\\Marco\\nginx-1.17.5", // nginx directory
  ...
}
```

## Usage

The following commands will be displayed with right click when you edit any file in Visual Studio Code：

* `reload nginx`: start/reload nginx
* `stop nginx`: stop nginx
* `configurate nginx`: open nginx.conf

## 配置

在Visual Studio Code 的`setting.json`中新增`nginxShortcut.nginxDir`字段,如：


```
{
  ...
  "nginxShortcut.nginxDir": "C:\\Users\\Marco\\nginx-1.17.5", // nginx所在目录
  ...
}
```

## 使用

在Visual Studio Code 中，打开任意文件时，右击菜单即可看到如下命令：

* `reload nginx`: 启动nginx，在已开启nginx时会重启nginx
* `stop nginx`: 关闭nginx
* `configurate nginx`: 打开nginx配置文件nginx.conf

