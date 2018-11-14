// const fs = require('fs');
const path = require('path');
// const wrench = require('wrench');
const sass = require('node-sass');
const fs = require('fs-extra');

function compileScss(content, savePath, min) {
  console.log('============' + content);
  return new Promise((resolve, reject) => {
    sass.render({
      data: content,
      includePaths: ['./core', './core/scss'],
      outputStyle: min ? 'compressed' : 'nested',
      sourceMap: true,
      outFile: path.resolve(targetPath, 'jdb-plg-ui.css')
    }, function(error, result) {
      if (error) {
        reject(error);
      } else {
        let writeResult = fs.writeFileSync(savePath, result.css);
        console.log(writeResult);
        resolve();
      }
    });
  });
}

const sourcePath = path.resolve(__dirname, '../core');
const targetPath = path.resolve(__dirname, '../dist/src');

const targetScssPath = path.resolve(targetPath, './components')
const srcScssPath = path.resolve(sourcePath, './components');
const targetFolder = fs.readdirSync(targetScssPath);
let componentsLessContent = '';
targetFolder.forEach(dir => {
      console.log(`${srcScssPath}/${dir}/${dir}.component.scss`);
      if (fs.existsSync(`${srcScssPath}/${dir}/style/index.scss`)) {
        componentsLessContent += `@import "./${path.join('components', dir,  `/style/index.scss`)}";\n`
        fs.copySync(`${srcScssPath}/${dir}/style/index.scss`, `${targetScssPath}/${dir}/style/index.scss`);
    }
    console.log('00000' + componentsLessContent);
})
fs.copySync(path.resolve(sourcePath, 'scss'), path.resolve(targetPath, 'scss'));
fs.writeFileSync(`${targetPath}/components.scss`, componentsLessContent);
fs.writeFileSync(`${targetPath}/jdb-plg-ui.scss`, fs.readFileSync(`${sourcePath}/jdb-plg-ui.scss`));

const lessContent = `@import "${path.join(targetPath, 'jdb-plg-ui.scss')}";`;
compileScss(lessContent, path.join(targetPath, 'jdb-plg-ui.css'), false);
compileScss(lessContent, path.join(targetPath, 'jdb-plg-ui.min.css'), true);