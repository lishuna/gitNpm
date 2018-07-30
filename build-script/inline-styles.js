// const fs = require('fs')
const path = require('path')
const glob = require('glob').sync
const sass = require('node-sass');
const fs = require('fs-extra');

function inlineResourcesForDirectory(folderPath) {
    glob(path.join(folderPath, '**/*.ts')).forEach(filePath => inlineResources(filePath))
}

function inlineResources(filePath) {
    let fileContent = fs.readFileSync(filePath, 'utf-8')

    fileContent = inlineTemplate(fileContent, filePath)

    fs.writeFileSync(filePath, fileContent, 'utf-8')
}

function inlineTemplate(fileContent, filePath) {
    return fileContent.replace(/styleUrls\s*:\s*'([^']+?\.scss)'/g, (_match, templateUrl) => {
        const templatePath = path.join(path.dirname(filePath), templateUrl)
        const templateContent = loadResourceFile(templatePath)
        return `styles: \`${templateContent}\``
    })
}

function loadResourceFile(filePath) {
    return new Promise((resolve, reject) => {
        sass.render({
            filePath: filePath,
            // includePaths: ['./core', './core/scss'],
            outputStyle: 'nested',
            // sourceMap: true,
            // outFile: path.resolve(targetPath, 'jdb-plg-ui.css')
        }, function(error, result) {
            if (error) {
                reject(error);
            } else {
                // let writeResult = fs.writeFileSync(savePath, result.css);
                // console.log(writeResult);
                return result.css;
                resolve();
            }
        });
    });
    // return fs.readFileSync(filePath, 'utf-8')
    //     .replace(/([\n\r]\s*)+/gm, ' ')
}

inlineResourcesForDirectory('./__jdbui_components')