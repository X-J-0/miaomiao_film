const state = {
    name:'',
    admin:false
};
const actions = {

};
const mutations = {
    USER_NAME(state,payload){
        state.name = payload.name;
        state.admin = payload.admin;
    }
};
export default{
    namespaced:true,
    state,
    actions,
    mutations
}