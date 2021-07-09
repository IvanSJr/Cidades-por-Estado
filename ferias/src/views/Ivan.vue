<template>
    <div class="home">
        <h1>{{nome}}</h1>
        <ul>
            <li v-for="veiculo of veiculos" :key="veiculo">{{ veiculo }}</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "Ivan",  
  data(){
    return{
      nome: "Ivan",
      veiculos: ['fusca', 'ford', 'chevrolet', 'Celta', 'Chevette']
    }
  }
}
</script>
