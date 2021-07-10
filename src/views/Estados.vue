<template>
    <div>
            <h1>Municipios de {{ selectedStates }}</h1>
        <div class="city" 
            v-for="city of showing" 
            :key="city.id"
            >{{ city.nome }}</div>

        <button v-if="showing.length === 5" @click="showAllCities">Mostrar todas</button>
        <button v-else @click="hideCities">Mostrar menos</button>
    </div>

</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            cities: [],
            showing: [],
            selectedStates: ``,
        }
    },
    mounted() {
        this.selectedStates = this.$route.params.id
        this.getPartialCitiesFromBahia()
    },
    watch: {
        '$route' (to, from){
            this.selectedStates = to.params.id
            this.getPartialCitiesFromBahia()
        }
    },
    methods: {
        async getCitiesFromBahia() {
            const endpoint = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${this.selectedStates}/municipios`
            await axios.get(endpoint)
                .then(response => {
                    this.cities = response.data
                })
        },

        getPartialCitiesFromBahia() {
            this.getCitiesFromBahia().then(() => {
                this.showing = this.cities.slice(0, 5)
            })
        },
        showAllCities() {
            this.showing = this.cities
        },

        hideCities() {
            if (this.showing.length > 5){
                this.showing = this.cities.slice(0, 5)
            }
        }
    }
}
</script>

<style lang="scss">
    .city{
        width: 90%;
        padding: 15px;
        border: 1px solid #CCC;
        margin-bottom: 10px;
    }
</style>