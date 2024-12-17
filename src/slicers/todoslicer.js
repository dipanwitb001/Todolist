import {createSlice, createSelector} from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name : 'todo',
    initialState : {
        items:[],
        done:0,
        due: 0,
        total :0,
        formStatus : false,
    },
    
    reducers : {
        addTodo :(state,action) => {
            //action.payload.completed=false;
            //console.log(action.payload);
            state.items.push({ ...action.payload});
            state.formStatus = !state.formStatus;
            //console.log('form status :', state.formStatus);
            state.total = state.items.length;
            state.done = state.items.filter(task => task.completed).length;
            state.due = state.total-state.done;
        
        },
        formUpdate :(state) => {
           
            state.formStatus = !state.formStatus
            //console.log('form status :', state.formStatus);
        },
        removeTodo: (state,action) => {
            let index = state.items.findIndex(item => item.id=== action.payload.id);
            if(index !== -1)
            {
                state.items.splice(index, 1);
            }
            state.done = state.items.filter((task) => task.completed).length;
            state.total = state.items.length;
            state.done = state.items.filter(task => task.completed).length;
            state.due = state.total-state.done;

        },
        toggleTask : (state, action) => {
            console.log("Items before toggle:", state.items);
            const task = state.items.find((task) => task.id === action.payload.id);
            console.log("task:", task);
            if(task) {
                task.completed = !task.completed;
            }
            
            state.done = state.items.filter((task) => task.completed).length;
            state.due = state.total-state.done;
        }
    },
});

export const getItemsSelector = createSelector(
    (state) => state.todo.items,
    (state) => state.todo.formStatus,
    (state) => state
);

export const getStatusSelector = createSelector(
    (state) => state.todo.formStatus,
    (formStatus) => formStatus
);

export const getTotalQuantitySelector = createSelector(
    (state) => state.todo.total,
    (total) => total
)
export const getTotalDoneSelector = createSelector(
    (state) => state.todo.done,
    (done) => done
)
export const getTotalDueSelector = createSelector(
    (state) => state.todo.due,
    (due) => due
)

// export const getToggleSelector = createSelector(

// )

export const {addTodo,formUpdate,removeTodo,toggleTask} =todoSlice.actions;

export default todoSlice.reducer;