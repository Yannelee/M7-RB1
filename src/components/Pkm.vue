<template>
  <div class="container-fluid row p-5">
    <img src="@/assets/pkmLogo.png" alt="" class="w-50 mx-auto">
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col">
        <div class="card h-100">
          <h5 class="card-header">Buscar Pokémon</h5>
          <form class="m-2 text-end p-4 my-auto">
            <input type="text" class="form-control" id="searchPoke" placeholder="Ingresa Nombre o Id" v-model="pokeSearch">
            <button class="btn btn-dark mt-4" @click.prevent="getData(pokeSearch)">Buscar</button>
          </form>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
            <h5 class="card-header">Detalles Pokemon</h5>
          <div class="row g-0 p-3">
            <div class="col-md-8 my-auto">
              <div class="card-body">
                <p class="card-text"><b>Id:</b> {{pokeInfo.id}}</p>
                <p class="card-text"><b>Nombre:</b> {{pokeInfo.name}}</p>
              </div>
            </div>
            <div class="col-md-4">
              <img :src="pokeInfo.imgSrc" class="img-fluid rounded-start" alt="...">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "pkm-comp",
  data:function() {
    return{
      pokeSearch:'',
      pokeInfo:{
        name:'',
        id:'',
        imgSrc:''
      }
    }
  },
  methods:{
    getData(nameId){
      if(nameId){
        axios.get(`https://pokeapi.co/api/v2/pokemon/${nameId}`)
        .then(resp => {
          this.pokeInfo.name = resp.data.name
          this.pokeInfo.id = resp.data.id
          this.pokeInfo.imgSrc = resp.data.sprites.front_default
        })
        .catch(e=>{
          if(e.response.status === 404){
             alert('Debes ingresar un Nombre o Id válidos')
          }else{
            console.log(e);
          }

        })
      }
    }
  },
  created(){
    this.getData('pikachu')
  }
}
</script>

<style>
.img-fluid{
  height: 10rem;
}

</style>