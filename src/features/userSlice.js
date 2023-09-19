import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cardData:[]
};


export const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        dataRedux:(state,action)=>{
         
            state.cardData=action.payload;
        },
        addRedux:(state,action)=>{
          
          state.cardData.push(action.payload);
          localStorage.setItem("inventory",JSON.stringify(state.cardData));
        },
        editRedux:(state,action)=>{
        
            const index=state.cardData.findIndex((item)=>item.id===action.payload.id);

         
            state.cardData[index].name=action.payload.name;
            state.cardData[index].dob=action.payload.dob;
            state.cardData[index].age=action.payload.age;
            state.cardData[index].food=action.payload.food;
            state.cardData[index].gender=action.payload.gender;
            state.cardData[index].hobbies=action.payload.hobbies;
            localStorage.setItem("inventory",JSON.stringify(state.cardData));
        },
        deleteRedux:(state,action)=>{
            const index=state.cardData.findIndex((item)=>item.id===action.payload);
         
            state.cardData.splice(index,1);
            localStorage.setItem("inventory",JSON.stringify(state.cardData));
        },
        }
    });

export const {dataRedux,addRedux,editRedux,deleteRedux}=userSlice.actions;
export default userSlice.reducer;


