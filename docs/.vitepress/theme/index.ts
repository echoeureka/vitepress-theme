import { EnhanceAppContext, Theme } from 'vitepress'
import Layout from './Layout'
import NotFound from './NotFound'
import './custom.css'

const enhanceApp = ({ app, router, siteData }: EnhanceAppContext) => {}

const theme: Theme = {
  Layout,
  NotFound,
  enhanceApp
}

export { theme }
export default theme
