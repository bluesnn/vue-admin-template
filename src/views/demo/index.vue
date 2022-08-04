<template>
  <div>
    <div
      class="home-root"
    >{{ appStore.count }}</div>
    <el-button
      type="primary"
      @click="appStore.increment()"
    >
      pinia
    </el-button>
  </div>
  <div>
    state: {{ state }}
    <el-button
      type="primary"
      @click="toggle()"
    >
      主要按钮
    </el-button>
    <el-button
      type="primary"
      @click="handlLogout"
    >
      请求接口错误示例1
    </el-button>
    <el-button
      type="primary"
      @click="handleToken"
    >
      请求接口错误示例2
    </el-button>
  </div>
</template>

<script setup>
import { useToggle } from '@/hooks'
import { userLogout, userToken } from '@/api'
import { useAppStore } from '@/store/modules/app'

defineOptions({
  name: 'DemoPage'
})

const appStore = useAppStore()
console.log('appStore: ', appStore)

appStore.count++
console.log('appStore', appStore.count)

appStore.$patch({ count: appStore.count + 1 })
console.log('appStore $patch', appStore.count)

console.log('appStore double', appStore.double)

const { state, toggle } = useToggle()

console.log(`我是count的值: ${state.value}`)

const handlLogout = () => {
  userLogout().then(res => {
    console.log(res)
  }).catch(err => {
    console.log('index.vue', err, err.errno)
  })
}

const handleToken = () => {
  const params = {
    name: '',
    code: ''
  }

  userToken(params).then(res => {
    console.log(res)
  })
}
</script>
