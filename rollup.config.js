const path = require('path');
// rollup查找外部模块
import { nodeResolve } from '@rollup/plugin-node-resolve';
// 将外部第三方模块输出CommonJS 转换成 ES2015 模块
import commonjs from '@rollup/plugin-commonjs';
// ts
import typescript from '@rollup/plugin-typescript';
// babel
import { babel } from '@rollup/plugin-babel';
// 配置
export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.mjs',
        format: 'es',
      },
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.umd.js',
        format: 'umd',
        name: 'SUI',
      },
    ],
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      babel({
        configFile: './babel.config.json',
        babelHelpers: 'bundled',
        include: path.join(__dirname, 'src'),
        extensions: ['.js', '.jsx', '.es', '.mjs', '.ts', '.tsx'],
      }),
    ],
  },
];
