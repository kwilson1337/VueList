//The way my lists are being pushed is goofy
// Must make sure it's exactly same formatt for saved & normal lists
import { reactive } from "@vue/reactivity"
const state = reactive({
    showStartApp: true,
    startApp: false,
    listTitle: '',
    showDesc: false,
    listDesc: '',
    showList: false,        

    // The List
    theList: [],
    singleItem: '',
    savedLocalList: localStorage.getItem('lists') !== null ? JSON.parse(localStorage.lists) : [],    
})

const methods = {
    startApp() {
        state.startApp = true     
    },
    handleTitle(e) {
        if(e.key === 'Enter' && state.listTitle) {
          state.showDesc = true                           
        }      
    },
    handleDesc(e) {
        if(e.key === "Enter" && state.listDesc) {          
          state.showList = true          
          state.showStartApp = false
          state.startApp = false
        }
    },
    handleListItems(e) {
        if(e.key === "Enter" && state.singleItem) {
            state.theList.push({title:state.singleItem, isComplete: false})            
            state.singleItem = ''
        }
    },
    completeTask (list) {
        list.isComplete = !list.isComplete
    },
    deleteTask(list) {
        state.theList = state.theList.filter(single => {
            return list !== single 
        })
    },
    saveLocally() {
        if(state.theList.length) {
            // Push list into array
            state.savedLocalList.push(
                state.theList,
            {
                title: state.listTitle,
                desc: state.listDesc,                
            })               
            localStorage.setItem("lists", JSON.stringify(state.savedLocalList))    
            
            console.log(state.savedLocalList)
            
            setTimeout(() => {
                state.theList = []
                state.showStartApp = true
                state.showList = false
                state.listDesc = ''
                state.listTitle = ''   
                state.showDesc = false           
            }, 300);
        }else {
            console.log('empty')
        }        
    },
    deleteTheList() {
        state.theList = []
    },
    setnewList(single, index) {
        //remove item when clicked to update array
        single = JSON.parse(window.localStorage.getItem('lists'))        
        state.theList = single[index * 2]                  
        let counter = index * 2 + 1            
    
        state.showList = true
        state.showStartApp = false
        state.listTitle = single[counter].title
        state.listDesc = single[counter].desc
    }
}

export default {
    state,
    methods
}