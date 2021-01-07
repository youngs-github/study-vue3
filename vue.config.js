module.exports = {
    // 静态配置
    configureWebpack: {
        plugins: [
            {
                apply(compiler) {
                    compiler.hooks.afterPlugins.tap('AfterPlugins', (compilation) => {
                        console.log('AfterPlugins...');
                    });
                }
            }
        ]
    },
    // 链式配置
    chainWebpack: function(config) {
        // 新增一个
        config.plugin('AfterCompile').use({
            apply(compiler) {
                compiler.hooks.afterCompile.tap('AfterCompile', (compilation) => {
                    console.log('AfterCompile...');
                });
            }
        });
        // 添加loader
        config.module
            .rule('self')
            .test(/\.self$/)
            .include.add('src').end()
            .exclude.add('node_modules').end()
            .use('self-loader')
            .loader('babel-loader')
            .options({
                cache: true,
                paths: 'self'
            });
        // 修改loader
        config.module
            .rule('eslint')
            .use('eslint-loader')
            .tap((options) => {
                // 去除缓存
                options.cache = false;
                return options;
            });
		// 删除插件
		config.module.delete('eslint');
        console.log(config.module);
    }
};
