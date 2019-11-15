const vscode = require('vscode');
const childProcess = require('child_process')
const exec = childProcess.exec;
/**
 * 插件被激活时触发，所有代码总入口
 * @param {*} context 插件上下文
 */
exports.activate = function (context) {
  const dir = vscode.workspace.getConfiguration().get('nginxShortcut.nginxDir');

  const showTips = function () {
    vscode.commands.executeCommand('workbench.action.openSettingsJson').then(result => {
      vscode.window.showInformationMessage('You need to configurate nginx directory in setting.json first. 请先在setting.json中配置nginx目录，具体操作请查看插件详情。');
    });
  }

  const stopCmd = 'nginx.exe -s stop'

  const startCmd = 'start nginx.exe'

  context.subscriptions.push(vscode.commands.registerCommand('extension.reloadNginx', function () {
    if (!dir) {
      return showTips();
    }

    exec(stopCmd, { cwd: dir, timeout: 1000 }, function (err) {
      if (err) {
        vscode.window.showInformationMessage(err)
      }
    })

    setTimeout(() => {
      exec(startCmd, { cwd: dir, timeout: 2000 }, err => {
        if (err) {
          vscode.window.showErrorMessage('failed! 启动/重启nginx失败了！ ' + err.message)
          return false
        }
        vscode.window.showInformationMessage('重启nginx 成功！nginx has been reloaded!')
      })
    }, 2000);

  }));

  context.subscriptions.push(vscode.commands.registerCommand('extension.stopNginx', function () {
    if (!dir) {
      return showTips();
    }
    exec(stopCmd, { cwd: dir, timeout: 2000 }, err => {
      if (err) {
        vscode.window.showErrorMessage('failed! 关闭nginx失败了！ ' + err.message);
        return false
      }
      vscode.window.showInformationMessage('nginx 已停止运行！nginx has stoped running!');

    })
  }));

  context.subscriptions.push(vscode.commands.registerCommand('extension.configurateNginx', function () {
    if (!dir) {
      return showTips();
    }
    try {
      vscode.workspace.openTextDocument(dir + '/conf/nginx.conf').then(document => {
        vscode.window.showTextDocument(document)
      }, error => {
        return vscode.window.showErrorMessage("fail to open configurate: " + error.message);
      })
    } catch (error) {
      return vscode.window.showErrorMessage(error.message);
    }
  }));
};


// exports.deactivate = function() {
//     console.log('deactivate')
// };