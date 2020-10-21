<template>
  <div class="home">
    首页
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {
  login
} from '@/api/login'
export default {
  name: 'Home',
  data(){
    return {
      
    }
  },
  components: {
    HelloWorld
  },
  mounted(){
    // this.getData()
  },
  methods:{
    async getData(){
      const params = {
        
      }
      let res = await login(params)
    }
  }
}
</script>
