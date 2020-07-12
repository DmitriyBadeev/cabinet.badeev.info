const CracoLessPlugin = require("craco-less")

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            "@primary-color": "#407BFF",
                            "@link-color": "@heading-color",
                            "@link-color-dark": "fade(#fff, 100%)",
                            "@link-hover-color": "#407BFF",
                            "@font-size-base": "16px",
                            "@heading-color": "#222",
                            "@text-color": "#333",
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
}
