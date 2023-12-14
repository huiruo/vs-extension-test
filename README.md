### 安装 Yeoman 和 Visual Studio Code Extension Generator：
```bash
npm install -g yo generator-code
```

### 生成插件项目

在你选择的目录中执行以下命令，生成一个新的插件项目：
```
yo code
```

在生成器提示时，选择 "New Extension (TypeScript)"。

### 测试1
* yarn
* ts
* webpack
```
Your extension hello-vs-extension has been created!

To start editing with Visual Studio Code, use the following commands:

     code hello-vs-extension

Open vsc-extension-quickstart.md inside the new extension for further instructions
on how to modify, test and publish your extension.

To run the extension you need to install the recommended extension 'amodio.tsl-problem-matcher'.

For more information, also visit http://code.visualstudio.com and follow us @code.
```

### 调试插件
在 VS Code 中打开插件项目，按 F5 启动调试，选择 "Extension"。新的 VS Code 实例将启动，并在其中打开一个扩展开发者环境。在命令面板 (Ctrl+Shift+P) 中输入 "Hello World"，选择 "Hello World" 命令，你将看到 "Hello World!" 的信息框。

```bash
## 编译项目代码
yarn compile
或则
yarn watch
```

调用扩展
ctrl+shift+p 输入helloworld，进行测试；右下角出现插件弹窗算是成功了
```bash
Hello World
```

