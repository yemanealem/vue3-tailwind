<template>
  <div class="text-lg font-medium">
    <h1>{{ msg }}</h1>
    <div class="flex">
      <div class="flex-none w-30 h-14">
        01
      </div>
      <div class="flex-initial w-64 ...">
        02
      </div>
      <div class="flex-initial w-32 ...">
        03
      </div>
    </div>
    
  </div>
</template>

<script>
import ProductDetail from "./ProductDetail.vue";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
