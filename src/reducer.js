// export const initialState = {
//   registerBasket: [
//     {
//       id: 1,
//       fullName: "xx",

//       age: 20,

//       gender: "male",

//       dob: "20-10-2002",

//       address: "some address",

//       courseId: "course1",

//       batchId: "batch1"
//     },

//     {
//       id: 2,

//       fullName: "yy",

//       age: 22,

//       gender: "female",

//       dob: "20-10-2000",

//       address: "some address",

//       courseId: "course2",

//       batchId: "batch2"
//     },

//     {
//       id: 3,
//       fullName: "zz",

//       age: 30,

//       gender: "male",

//       dob: "20-10-1992",

//       address: "some address",

//       courseId: "course3",

//       batchId: "batch3"
//     }
//   ]
// };

// const reducer = (state, action) => {
//   console.log(action);
//   switch (action.type) {
//     case "REGISTER":
//       return {
//         ...state,
//         registerBasket: [...state.registerBasket, action.item]
//       };

//     case "REMOVE":
//       console.log("action.id", action.id);
//       const index = state.registerBasket.findIndex(
//         basketItem => basketItem.id === action.id
//       );
//       let newBasket = [...state.registerBasket];
//       console.log("index>>>", index);
//       if (index >= 0) {
//         newBasket.splice(index, 1);
//       } else {
//         console.warn(
//           `Cant remove product (id: ${action.id}) as its not in basket!`
//         );
//       }
//       return {
//         ...state,
//         registerBasket: newBasket
//       };

//     default:
//       return state;
//   }
// };

// export default reducer;
