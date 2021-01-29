## 创建自己的脚手架工具
### 创建项目
`
mkdir zdk-cli
cd zdk-cli
npm init
`
package.json
`
{
  "name": "zdk-cli",
  "version": "1.0.0",
  "description": "A cli-demo",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "bin": {
    "mycli": "./index.js"
  },
  "author": "zdk",
  "license": "ISC",
  "dependencies": {
    "commander": "^7.0.0",
    "inquirer": "^7.3.3"
  }
}
`
### 安装
npm install

### 参考文章
https://juejin.cn/post/6922612857331056648