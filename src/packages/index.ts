import Vue from 'vue'
import '^/iconfont/alibaba.css'
import GanIcon from '@/packages/GanIcon'
import GanRow from '@/packages/GanRow'
import GanCol from '@/packages/GanCol'
import GanTag from '@/packages/GanTag'
import GanProgress from '@/packages/GanProgress'

/**
 * 获取组件集合
 * Get a collection of components
 */
const components: { [propsName: string]: any } = {
  GanIcon,
  GanRow,
  GanCol,
  GanTag,
  GanProgress
}

/**
 * 注册组件安装器
 * Register the component installer
 */
const install = (vue: typeof Vue): void => {
  /**
   * 判断组件是否为空
   * Determines whether the component is empty
   */
  Object.keys(components).forEach(key => {
    /**
     * 注册组件
     * Register components
     */
    console.log(key)
    vue.component(key, components[key])
  })
}

/**
 * 导出组件安装对象
 * exports components install object
 */
export default {
  install,
  // 展开组件
  ...components
}
