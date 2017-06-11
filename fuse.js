const {FuseBox, WebIndexPlugin, BabelPlugin, CSSPlugin} = require('fuse-box');

const fuse = FuseBox.init({
    homeDir: './src',
    output: './dist/$name.js',
    plugins: [
        BabelPlugin(),
        WebIndexPlugin({
            template: './src/index.html'
        }),
        CSSPlugin()
    ]
});

fuse.dev();
fuse.bundle('app').watch().instructions('> index.tsx');
fuse.run();
