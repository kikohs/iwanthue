import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser'; 

 const config = {
   input: 'index.js',
   output: {
     file: 'dist/iwanthue.js',
     format: 'iife',
     name: 'IWantHue',
   },

    // plugins: [commonjs(), resolve(), terser()],
    plugins: [commonjs(), resolve()],
 };
 
 export default config;
