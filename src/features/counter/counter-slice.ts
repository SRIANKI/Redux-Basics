//DUCKS pattern
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incremented(state) {
      //we can directly do this as immer makes it immutable under the hood
      state.value++;
    },
    decremented(state) {
      state.value--;
    },
    incrementedByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { incremented, decremented, incrementedByAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
