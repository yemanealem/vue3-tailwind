<template>
    <div class="bg-gray-800 container-none flex justify-between ">
      <div class="row justify-content-center mt-2 mb-2">
       
        <button class='text-white hover:text-gray-300' @click="count++">{{ count }}</button>
      </div>
      <div v-for="(item, index) in productList" :key="item.id">
      
        <product-detail :index="index" :product="item" />
      </div>
     </div>
  </template>
  
  <script>
import {mapGetters,mapActions } from "vuex";
import { ref } from "vue";
import ProductDetail from "./components/ProductDetail.vue";


  
  export default {
    components: {
    ProductDetail,
    
  },
    setup() {
    const count = ref(0)

    // expose to template and other options API hooks
    return {
      count
    }
     },

        mounted() {
            console.log(this.count) // 0
        },


    data() {
      return {
        
      };
    },
    
 computed: { ...mapGetters(["productList","isLoading"]) },
  
    methods: {
      ...mapActions(["fetchAllProducts"]),
  
    //   getResults() {
    //     this.fetchAllProducts(this.query);
    //   },
  
      searchProducts() {
        // this.fetchAllProducts(this.query);
      },
    },
  
    created() {
        let c= this.fetchAllProducts()
        console.log(c)
        let n=this.productList
        console.log('bbbbbb',n)
        console.log('bbbbbb',this.isLoading)
   
    },
  };
  </script>
  