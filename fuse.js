const {FuseBox, WebIndexPlugin, BabelPlugin} = require('fuse-box');

const fuse = FuseBox.init({
    homeDir: './src',
    output: './dist/$name.js',
    plugins: [
        BabelPlugin(),
        WebIndexPlugin({
            template: './src/index.html'
        })
    ]
});

fuse.dev();
fuse.bundle('app').watch().instructions('> index.jsx');
fuse.run();
