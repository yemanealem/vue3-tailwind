

// initial state
const state = () => ({
  products: [],
  productsPaginatedData: null,
  product: null,
  isLoading: false,
  isCreating: false,
  createdData: null,
  isUpdating: false,
  updatedData: null,
  isDeleting: false,
  deletedData: null
})

// getters
const getters = {
  productList: state => state.products,
  productsPaginatedData: state => state.productsPaginatedData,
  product: state => state.product,
  isLoading: state => state.isLoading,
  isCreating: state => state.isCreating,
  isUpdating: state => state.isUpdating,
  createdData: state => state.createdData,
  updatedData: state => state.updatedData,

  isDeleting: state => state.isDeleting,
  deletedData: state => state.deletedData
};

// actions
const actions = {
  async fetchAllProducts({ commit }, query = null) {
    const products=[{firstName:'Yemane',lastName:'Alem'},{firstName:'Eyob',lastName:'hbore'}]
    commit('setProducts',products);
 
    console.log(query)
       },

      }

// mutations
const mutations = {
  setProducts: (state, products) => {
    state.products = products
    console.log('ddddd',state.products)
  },

}

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
}