import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";
import vitePluginImp from "vite-plugin-imp";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // css: {
  //   preprocessorOptions:{
  //     less:{
  //       javascriptEnabled:true
  //     }
  //   }
  // },
  // resolve:{
  //   alias:[
  //     {find:/^~antd/, replacement:path.resolve('./','node_models/antd/')},
  //     {find:'@',replacement: path.resolve('./', 'src')}
  //   ]
  // }
})
// vitePluginImp({
//   optimize: true,
//   libList: [
//     {
//       libName: 'antd',
//       libDirectory: 'es',
//       style: (name) => `antd/es/${name}/style`
//     }
//   ]
// })
