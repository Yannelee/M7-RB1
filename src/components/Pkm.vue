<template>
  <div class="container-fluid row p-5">
    <img src="@/assets/pkmLogo.png" alt="" class="w-50 mx-auto">
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col">
        <div class="card h-100">
          <h5 class="card-header">Buscar Pokémon</h5>
          <form class="m-2 text-end p-4 my-auto">
            <input type="text" class="form-control" id="searchPoke" placeholder="Ingresa Nombre o Id" v-model="pokeSearch">
            <button class="btn btn-dark mt-4" @click.prevent="getPkmns(pokeSearch)">Buscar</button>
          </form>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
            <h5 class="card-header">Detalles Pokemon</h5>
          <div class="row g-0 p-3">
            <div class="col-md-8 my-auto">
              <div class="card-body">
                <p class="card-text"><b>Id:</b> {{pkms.id}}</p>
                <p class="card-text"><b>Nombre:</b> {{pkms.name}}</p>
              </div>
            </div>
            <div class="col-md-4">
              <img :src="pkmImg" class="img-fluid rounded-start" alt="...">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "pkm-comp",
  data:function() {
    return{
      pokeSearch:'',
      pkmInicio:'pikachu'
    }
  },
  computed:{
    ...mapState(['pkms', 'pkmImg'])
  },
  methods:{
    ...mapActions(['getPkmns'])
  },
  created(){
    this.getPkmns(this.pkmInicio)
  }
}
</script>

<style>
.img-fluid{
  height: 10rem;
}

</style>