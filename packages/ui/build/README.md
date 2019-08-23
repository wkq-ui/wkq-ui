### npm publish 
github 创建组织 托管项目
npm 创建组织
发布

### 问题
# 401
npm config set registry=http://registry.npmjs.org
npm adduser   catchone   
每次都要登录才能publish?
npm login
npm who am i
# 402
npm publish --access=public
# 403 Forbidden 
要改版本号，难怪别人要写 bash脚本

# window命令行不支持
npm install --global cross-env

### build
tsc 转代码
react配置
# Cannot find module '@babel/types'.
"moduleResolution": "node",

# main有用
先build到文件夹
"module": "build/es/index.js",

module字段https://github.com/sunyongjian/blog/issues/37
es6用

main必须的,字段指定了加载的入口文件，require('moduleName')就会加载这个文件。这个字段的默认值是模块根目录下面的index.js。

# publish build文件夹的有问题
自己的，只有一个index，没有其他的
别人的，有index，有type，而且所有组件变成了 js+d.ts

tsc和webpack一样都能做图的dfs

# 源码调试-进入下水道的方式
