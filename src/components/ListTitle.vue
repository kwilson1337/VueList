<template>
    <div 
        class="list-title"        
    >
        <div class="container">
            <div 
                class="list-title__inner"
                :class="{active: storeData.state.listTitle !== ''}"
            >                                
                <div class="list-title__title">
                    <h2>{{storeData.state.listTitle}}</h2>
                    <h3>{{storeData.state.listDesc}}</h3>                
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

<style lang="scss">
    .list-title {
        margin-top: 60px;

        &__inner {
            transition: .2s ease-in all;

            &.active {
                padding: 20px 15px;
                padding-top: 20px;
                background-color: #7b448a;
                color: white;
                border-radius: 8px;   
                border-bottom-left-radius: 0px;             
                border-bottom-right-radius: 0px;
            }
        }

        &__lists {
            display: flex;
            align-items: center;
            justify-content: flex-end;

            div {
                & + div {
                    margin-left: 10px;
                }
            }
        }
    }
</style>