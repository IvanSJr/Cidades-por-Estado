<template>
    <div>
        <h1>Cidades da Sergipe</h1>
        <div class="city" 
            v-for="city of cities" 
            :key="city"
            >{{ city.nome }}</div>

    </div>
</template>

<script>
export default {
    data(){
        return {
            cities: []
        }
    },
    mounted() {
        this.getCitiesFromSergipe()
    },
    methods: {
        getCitiesFromSergipe(){
            const endpoint = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/SE/municipios"
        
            fetch(endpoint)
                .then(response => response.json())
                .then(json => {
                    this.cities = json
                })
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