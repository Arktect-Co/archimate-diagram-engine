module.exports = {
    presets: ['@babel/preset-typescript','@babel/preset-env'],
    plugins: [[
        "babel-plugin-module-resolver",{
            root:["."],
            alias:{
                "^@lib/(.+)":"./lib/\\1"
            }
        }
    ]]
}