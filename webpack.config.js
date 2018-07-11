const path = require('path');
const { AngularCompilerPlugin } = require('@ngtools/webpack');
const { ScriptsWebpackPlugin, NamedLazyChunksWebpackPlugin, BaseHrefWebpackPlugin, PostcssCliResources } = require('@angular/cli/plugins/webpack');
const autoprefixer = require('autoprefixer');
const postcssUrl = require('postcss-url');
const postcssImports = require('postcss-import');
const rxPaths = require('rxjs/_esm5/path-mapping');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const maximumInlineSize = 10;
const projectRoot = process.cwd();
const baseHref = "";
const deployUrl = "";
const hashFormat = { "chunk": "", "extract": "", "file": ".[hash:20]", "script": "" };
console.log(process.cwd() + '=============================');
const postcssPlugins = function(loader) {
    return [
        postcssImports({
            resolve: (url, context) => {
                return new Promise((resolve, reject) => {
                    let hadTilde = false;
                    if (url && url.startsWith('~')) {
                        url = url.substr(1);
                        hadTilde = true;
                    }
                    loader.resolve(context, (hadTilde ? '' : './') + url, (err, result) => {
                        if (err) {
                            if (hadTilde) {
                                reject(err);
                                return;
                            }
                            loader.resolve(context, url, (err, result) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve(result);
                                }
                            });
                        } else {
                            resolve(result);
                        }
                    });
                });
            },
            load: (filename) => {
                return new Promise((resolve, reject) => {
                    loader.fs.readFile(filename, (err, data) => {
                        if (err) {
                            reject(err);
                            return;
                        }
                        const content = data.toString();
                        resolve(content);
                    });
                });
            }
        }),
        postcssUrl({
            filter: ({ url }) => url.startsWith('~'),
            url: ({ url }) => {
                const fullPath = path.join(projectRoot, 'node_modules', url.substr(1));
                return path.relative(loader.context, fullPath).replace(/\\/g, '/');
            }
        }),
        postcssUrl([{
                // Only convert root relative URLs, which CSS-Loader won't process into require().
                filter: ({ url }) => url.startsWith('/') && !url.startsWith('//'),
                url: ({ url }) => {
                    if (deployUrl.match(/:\/\//) || deployUrl.startsWith('/')) {
                        // If deployUrl is absolute or root relative, ignore baseHref & use deployUrl as is.
                        return `${deployUrl.replace(/\/$/, '')}${url}`;
                    } else if (baseHref.match(/:\/\//)) {
                        // If baseHref contains a scheme, include it as is.
                        return baseHref.replace(/\/$/, '') +
                            `/${deployUrl}/${url}`.replace(/\/\/+/g, '/');
                    } else {
                        // Join together base-href, deploy-url and the original URL.
                        // Also dedupe multiple slashes into single ones.
                        return `/${baseHref}/${deployUrl}/${url}`.replace(/\/\/+/g, '/');
                    }
                }
            },
            {
                // TODO: inline .cur if not supporting IE (use browserslist to check)
                filter: (asset) => {
                    return maximumInlineSize > 0 && !asset.hash && !asset.absolutePath.endsWith('.cur');
                },
                url: 'inline',
                // NOTE: maxSize is in KB
                maxSize: maximumInlineSize,
                fallback: 'rebase',
            },
            { url: 'rebase' },
        ]),
        PostcssCliResources({
            deployUrl: loader.loaders[loader.loaderIndex].options.ident == 'extracted' ? '' : deployUrl,
            loader,
            filename: `[name]${hashFormat.file}.[ext]`,
        }),
        autoprefixer({ grid: true }),
    ];
};

module.exports = {
    "resolve": {
        "extensions": [
            ".ts",
            ".js"
        ],
        "symlinks": false,
        "modules": [
            "./src",
            "./node_modules"
        ],
        "alias": rxPaths(),
        "mainFields": [
            "browser",
            "module",
            "main"
        ]
    },
    "resolveLoader": {
        "modules": [
            "./node_modules"
        ],
        "alias": rxPaths()
    },
    entry: './jdb-plg-ui.module.ts',
    output: {
        filename: 'jdb-ui.bundle.js',
        path: path.join(process.cwd(), "dist"),
        libraryTarget: "umd",
    },
    devtool: 'inline-source-map',
    module: {
        rules: [{
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                "test": /\.html$/,
                "loader": "raw-loader"
            },
            {
                "test": /\.ts$/,
                "loader": "@ngtools/webpack"
            },
            {
                "test": /\.scss$|\.sass$/,
                "use": [
                    "style-loader",
                    {
                        "loader": "raw-loader"
                    },
                    {
                        "loader": "postcss-loader",
                        "options": {
                            "ident": "embedded",
                            "plugins": postcssPlugins,
                            "sourceMap": true
                        }
                    },
                    {
                        "loader": "sass-loader",
                        "options": {
                            "sourceMap": true,
                            "precision": 8,
                            "includePaths": []
                        }
                    }
                ]
            },
            {
                "test": /\.css$/,
                "use": [
                    "style-loader",
                    {
                        "loader": "raw-loader"
                    },
                    {
                        "loader": "postcss-loader",
                        "options": {
                            "ident": "embedded",
                            "plugins": postcssPlugins,
                            "sourceMap": true
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new AngularCompilerPlugin({
            "mainPath": "jdb-plg-ui.module.ts",
            "platform": 0,
            // "hostReplacementPaths": {
            //     "environments/environment.ts": "environments/environment.dev.ts"
            // },
            "sourceMap": true,
            "tsConfigPath": "./tsconfig.app.json",
            "skipCodeGeneration": true,
            "compilerOptions": {
                "preserveSymlinks": true
            }
        })
    ]
};