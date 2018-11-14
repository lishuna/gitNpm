#! /usr/bin/env bash
readonly currentDir=$(cd $(dirname $0); pwd)
cd ${currentDir}
rm -rf dist
rm -rf __jdbui_components
rm -rf publish-es2015
rm -rf publish-es5
cp -r ./core __jdbui_components

# 先将templateUrl替换成template片段
node build-script/inline-template.js
# node build-script/inline-styles.js

#-c, --config                Use this config file (if argument is used but value
#                             is unspecified, defaults to rollup.config.js)
#-w, --watch                 Watch files in bundle and rebuild on changes
#-i, --input                 Input (alternative to <entry file>)
#-o, --file <output>         Output (if absent, prints to stdout)
#-f, --format [es]           Type of output (amd, cjs, es, iife, umd)
#-e, --external              Comma-separate list of module IDs to exclude
#-g, --globals  

# 先用ngc将代码编译成es2015 输出路径是publish-es2015
$(npm bin)/ngc -p tsconfig.build.json -t es2015 --outDir publish-es2015/src

# 用rollup将编译好的es2015打包成es到 publish-es2015/esm2015/jdb-plg-ui.js
echo 'Bundling to es module of es2015'
export ROLLUP_TARGET=esm
$(npm bin)/rollup -c rollup.config.js -f es -i publish-es2015/src/index.js -o publish-es2015/esm2015/jdb-plg-ui.js

# 将源码编译成es5
echo 'Compiling to es5 via Angular compiler'
$(npm bin)/ngc -p tsconfig.build.json -t es5 --outDir publish-es5/src

# 用rollup将es5代码打包
echo 'Bundling to es module of es5'
export ROLLUP_TARGET=esm
$(npm bin)/rollup -c rollup.config.js -f es -i publish-es5/src/index.js -o publish-es5/esm5/jdb-plg-ui.js

# 打包成umd模块
echo 'Bundling to umd module of es5'
export ROLLUP_TARGET=umd
$(npm bin)/rollup -c rollup.config.js -f umd -i publish-es5/esm5/jdb-plg-ui.js -o publish-es5/bundles/jdb-plg-ui.umd.js

# 压缩umd代码
echo 'Bundling to minified umd module of es5'
export ROLLUP_TARGET=mumd
$(npm bin)/rollup -c rollup.config.js -f umd -i publish-es5/esm5/jdb-plg-ui.js -o publish-es5/bundles/jdb-plg-ui.umd.min.js

# 合并处理包；最后合并到dist里
echo 'Unifying publish folder'
mv publish-es5 dist
mv publish-es2015/esm2015 dist/esm2015
# rm -rf publish-es2015

# 清除存储模板包 
echo 'Cleaning up temporary files'
rm -rf __jdbui_components
rm -rf dist/src/*.js
rm -rf dist/src/**/*.js
rm -rf publish-es2015

echo 'Normalizing entry files'
sed -e "s/from '.\//from '.\/src\//g" dist/src/index.d.ts > dist/jdb-plg-ui.d.ts
sed -e "s/\":\".\//\":\".\/src\//g" dist/src/index.metadata.json > dist/jdb-plg-ui.metadata.json
rm dist/src/index.d.ts dist/src/index.metadata.json

echo 'Copying package.json'
cp package.json dist/package.json

echo 'Copying README.md'
cp README.md dist/README.md

node ./build-script/generate-sass.js