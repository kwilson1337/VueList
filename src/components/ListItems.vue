<template>
  <div    
    v-if="storeData.state.showList"
    class="todo-list">
      <div class="container">
            <div class="todo-list__inner">
                <div class="todo-list__title">
                    <h4>What do you need done?</h4>

                    <div class="actions">
                        <button @click="storeData.methods.saveLocally" class="primary">+</button>
                        <button @click="storeData.methods.deleteTheList" class="primary">-</button>
                    </div>
                </div>          
                <div class="todo-list__input">
                    <input type="text" class="form-control" @keyup="storeData.methods.handleListItems" v-model="storeData.state.singleItem">
                </div>
                <div class="todo-list__list">                
                    <div 
                        class="todo-list__single" 
                        :data-complete="single.isComplete" 
                        v-for="(single, index) in storeData.state.theList" 
                        :key="index"                        
                    >                        
                        <div class="title">  
                            {{single.title}}
                        </div>
                        <div class="actions">
                            <button @click="storeData.methods.completeTask(single)" class="done bg-success text-white">&#10004;</button>
                            <button @click="storeData.methods.deleteTask(single)" class="trash bg-danger text-white">&#10005;</button>
                        </div>
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

<style lang="scss">
    .todo-list {          
        
        &__inner {
            padding: 60px;
            border: 1px solid #ccc;
            border-top: none;
            border-bottom-right-radius: 8px;
            border-bottom-left-radius: 8px;
        }

        &__title {
            text-align: left;
            padding-bottom: 10px;      
            display: flex;      
            justify-content: space-between;
            align-items: center;

            > * {
                margin: 0px;
            }

            button {
                min-width: 58px;
            }

            button + button {
                margin-left: 10px;                
            }
        }

        &__single {
            display: flex;
            align-items: center;
            width: 100%;
            border: 1px solid #ddd;
            border-radius: 4px;
            margin-top: 15px;  
            position: relative;          

            .title {
                flex: 0 0 60%;
                text-align: left;
                padding: 15px;

                &::after {
                    content: "";
                    opacity: 0;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%) scaleX(0);
                    transform-origin: left;
                    transition: .2s ease-in-out all;
                    width: 55%;
                    border-bottom: 2px solid rgba(25,135,84, 1);    
                    left: 5px;                
                }
            }

            .actions {
                flex: 0 0 40%;
                text-align: right;                

                button {
                    position: absolute;
                    height: 100%;
                    right: 0px;
                    top: 0px;
                    padding: 10px 20px;
                    font-size: 18px;
                    font-weight: 700;
                    border-color: transparent;
                    border-radius: .25rem;

                    &.done {
                        right: 55px;
                        border-right: none;
                        border-top-right-radius: 0px;
                        border-bottom-right-radius: 0px;
                    }

                    &.trash {
                        border-top-left-radius: 0px;
                        border-bottom-left-radius: 0px;
                    }
                }
            }

            // complete
            &[data-complete="true"] {
                .title::after {
                    opacity: 1;
                    transform: translateY(-50%) scale(1);

                }
            }
        }
    }
</style>