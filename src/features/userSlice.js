import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cardData:[]
};


export const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        dataRedux:(state,action)=>{
            console.log(action.payload,"locals storage");
            state.cardData=action.payload;
        },
        addRedux:(state,action)=>{
            console.log(action.payload);
          state.cardData.push(action.payload);
          localStorage.setItem("inventory",JSON.stringify(state.cardData));
        },
        editRedux:(state,action)=>{
            console.log(action.payload,"edit data");
            const index=state.cardData.findIndex((item)=>item.id===action.payload.id);

            console.log(index);
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
            console.log(index,"delte index");
            state.cardData.splice(index,1);
            localStorage.setItem("inventory",JSON.stringify(state.cardData));
        },
        }
    });

export const {dataRedux,addRedux,editRedux,deleteRedux}=userSlice.actions;
export default userSlice.reducer;


