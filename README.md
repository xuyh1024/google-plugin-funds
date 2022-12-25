# 自选基金助手

自选基金助手，实时查看您关注的基金，助您快速获取实时数据。


 **fork [funds](https://github.com/x2rr/funds) 的自定义项目，删除了大多数功能，更加专注于基金本身，清爽的界面**


## 运行调试开发

需要 node 环境，先执行
`npm i`
安装依赖

调试模式执行
`npm run watch:dev`
生成 dist 文件夹，浏览器选择“加载已解压的扩展程序”

打包与发布先执行
`npm run build`
生成 dist 文件夹，再执行
`npm run build-zip`
通过从 manifest.json 文件中读取 name 和 version 字段,构建{name}-v{version}.zip 这种格式的压缩文件。






