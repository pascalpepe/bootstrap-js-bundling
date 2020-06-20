import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/main.js',
    format: 'iife'
  },
  plugins: [commonjs(), resolve()]
};
