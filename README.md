
## 启动项目
- 初始化
```js
create-react-app.cm exam-cms --scripts-version=react-scripts-ts
```

- 启服务
```js
npm run start
```

## 环境搭建
- 引入装饰器
```js
npm install --save-dev @babel/plugin-proposal-decorators
```

- 引入路由
```js
npm install --save-dev react-router-dom @types/react-router-dom
```

- 引入mobx
```js
npm install --save-dev mobx mobx-react
```

- 引入antd
```js
npm install --save-dev antd
-tslint编写
{
  "defaultSeverity": "warning",
  "extends": ["tslint:recommended", "tslint-react", "tslint-config-prettier"],
  "linterOptions": {
    "exclude": [
      "config/**/*.js",
      "node_modules/**/*.ts",
      "coverage/lcov-report/*.js"
    ]
  },
  "rules": {
    "interface-name": [true, "never-prefix"],
    "no-console": false,
    "jsx-self-close": false,
    "jsx-no-lambda": false,
    "object-literal-sort-keys": false,
    "member-access": false,
    "ordered-imports": [
      false,
      {
          "import-sources-order": "lowercase-last",
          "named-imports-order": "lowercase-first"
      }
    ]
  }
}
