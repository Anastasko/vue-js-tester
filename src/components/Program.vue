<template>

  <vue-code v-model="code" :options="options" style="height: 100%"></vue-code>

</template>
<script>
import VueCode from 'vue-code'
import programCode from '../assets/programCode'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/pascal/pascal'

export default {
  data: function () {
    return {
      code: programCode,
      options: {
        mode: 'pascal'
      }
    }
  },
  components: {
    'vue-code': VueCode
  }
}
</script>

<style>
  .CodeMirror {
    height: 100vh;
  }
</style>
