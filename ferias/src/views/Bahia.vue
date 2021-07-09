<template>
    <div>
        <h1>Cidades da Bahia</h1>
        <div class="city" 
            v-for="city of showing" 
            :key="city"
            >{{ city.nome }}</div>
        <button v-if="showing.length === 5" @click="showAllCities">Mostrar todas</button>
        <button v-else @click="hideCities">Mostrar menos</button>
    </div>

</template>

<script>
export default {
    data(){
        return {
            cities: [],
            showing: [],
        }
    },
    mounted() {
        this.getPartialCitiesFromBahia()
    },
    methods: {
        async getCitiesFromBahia() {
            const endpoint = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/BA/municipios"
            await fetch(endpoint)
                .then(response => response.json())
                .then(json => {
                    this.cities = json
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