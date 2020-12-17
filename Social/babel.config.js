module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    "transform-inline-environment-variables",
    "@babel/plugin-transform-runtime",
    [
      "module-resolver",
      {
        cwd: "babelrc",
        root: ["src"],
        extensions: [".js", ".ios.js", ".android.js"],
      }
    ]
  ],
  env: {
    production: {
      plugins: [
        "transform-remove-console"
      ]
    },
    development: {
      plugins: [
        "transform-inline-environment-variables"
      ],
      sourceMaps: "inline"
    }
  }
};
