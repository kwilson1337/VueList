<template>
    <div
        v-if="storeData.state.showStartApp"
        class="startApp"
    >
        <div
            v-if="storeData.state.startApp == false"
            class="start-app-button">
            <div class="container">
            <button      
                @click="storeData.methods.startApp()" class="primary">
                Start List
            </button>
            </div>
        </div>

        <div 
            v-else       
            class="title-of-list-inputs">
            <div class="container">
            <div class="title-of-list-inputs__title">
                <div
                    v-if="storeData.state.showDesc" 
                    class="desc">
                    <h2>Enter List Description</h2>
                    <input v-model="storeData.state.listDesc" @keyup="storeData.methods.handleDesc" type="text" class="form-control">   
                </div>
                <div
                    v-else 
                    class="title">
                    <h2>Enter List Title</h2>
                    <input v-model="storeData.state.listTitle" @keyup="storeData.methods.handleTitle" type="text" class="form-control">   
                </div>               
            </div>      
            </div>
        </div> 
    </div>     
</template>

<script>
import { inject } from '@vue/runtime-core'
export default {
    setup() {
        const storeData = inject('storeData')

        return {
            storeData
        }
    }
}
</script>

<style>
.startApp {
    margin-top: 60px;
}
</style>