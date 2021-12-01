<template>
    <div
        v-if="storeData.state.savedLocalList.length" 
        class="saved-lists">
        <div class="saved-lists__inner">
            <div
                v-for="(single, index) in getStoredList" 
                :key="index" 
                :data-index="index"                        
                class="saved-lists__single">
                    <button 
                        class="primary -purple"
                        @click="storeData.methods.setnewList(single, index)"
                    >        
                        {{single.title}}                                       
                    </button>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, inject } from '@vue/runtime-core'
export default {
    setup() {
        const storeData = inject('storeData') 

        // Get first index of items
        const getStoredList = computed(() => {
            let list = storeData.state.savedLocalList.filter((array,index) => {
                if(index % 2 == 1) {                  
                    return array
                }
            })                
            return list
        })
                
        return {
            storeData,
            getStoredList
        }
    }
}
</script>

<style lang="scss">
    .saved-lists {
        background-color: #7b448a;        

        &__inner {
            padding: 15px;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            div + div {
                margin-left: 15px;
            }
        }
    }
</style>