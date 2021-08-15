import { Content, useData, useRoute, useRouter, withBase } from 'vitepress'
import { defineComponent } from 'vue'
import './layout.scss'

// const { Layout: DefaultLayout } = DefaultTheme

const Layout = defineComponent({
  setup() {
    const data = useData()
    const route = useRoute()
    const router = useRouter()
    console.log(data)
    console.log(route)
    console.log(router)

    console.log()
  },
  render: () => (
    <div id="layout">
      <div id="content">
        <Content />
      </div>
    </div>
  )
})

export { Layout }
export default Layout
