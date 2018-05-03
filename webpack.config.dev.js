import path from "path";
import webpack from "webpack";

export default {
    devtools: "eval-source-map",
    //页面入口文件配置（即入口文件最终要生成什么名字的文件、存放到哪里）
    entry: [
        "webpack-hot-middleware/client",
        path.join(__dirname, "/frontend/index.js")
    ],
    //入口文件输出配置（即出口文件最终要生成什么名字的文件、存放到哪里）
    output: {
        path: "/",
        publicPath: "/"
    },
    //插件项
    plugins: [
        new webpack.NoErrorsPlugin(), //跳过编译时出错的代码并记录，使编译后运行时的包不会发生错误。
        new webpack.optimize.OccurrenceOrderPlugin(), //排序输出,(优化)
        new webpack.HotModuleReplacementPlugin() //renew frontend aultomaticalily
    ],
    module: {
        //加载器配置
        loaders: [
            {
                //.js 文件使用 "react-hot"和 "babel"来处理
                test: /\.js$/,
                include: [path.join(__dirname, "frontend")],
                loaders: ["react-hot", "babel"]
            },
            {
                test: /\.css$/, // Only .css files
                loader: "style!css" // Run both loaders
            }
        ]
    },
    //其它解决方案配置
    resolve: {
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extentions: ["", ".js"]
    }
};
