npm config set prefix “d:\nodejs\node_global”
npm config set cache “d:\nodejs\node_cache”
path  C:\Program Files\nodejs  D:\nodejs\node_global
NODE_PATH  D:\nodejs\node_global\node_modules




lerna的作用好像很有限，就是向下批量调用命令而已
### add
npm install 单个
### bootstrap
npm install 所有


### create
创建文件夹
git config user.name ''
git config user.email ''
### start
"start": "cross-env NODE_ENV=production tsc -w --module ES6 --outDir ./build/es",

"name": "@fluent-ui/core",

"main": "build/index.js",
"module": "build/es/index.js"

### 如何本地开发依赖本地代码，生产依赖npm上的?
