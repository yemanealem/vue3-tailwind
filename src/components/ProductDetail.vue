
<template>
  <div class="flex justify-between items-center">
    <div class="col-1 text-left text-white hover:text-gray-300">
      {{ index + 1 }}
    </div>
  
    <div class="col-2">
      <strong class="text-danger text-white hover:text-gray-300">{{ product.firstName }} $</strong>
    </div>
    <div class="col-3">
      <span class="badge badge-info text-white hover:text-gray-300">{{ product.lastName }}</span>
    </div>
 
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ProductDetail",
  props: {
    product: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
      default: 0,
    },
  },

  computed: { ...mapGetters(["isDeleting", "deletedData"]) },

  methods: {
    ...mapActions(["deleteProduct", "fetchAllProducts"]),

   
       
    },
  };
  

</script>




 


