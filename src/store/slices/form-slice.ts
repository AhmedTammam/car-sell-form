import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { stockData } from "store/catalog_info";

interface CarProps {
  year: number;
  make: string;
  model: string;
  versions: string[];
}

interface FormState {
  headerInfo: string[];
  filteredBrands: CarProps[];
}

const initialState: FormState = {
  headerInfo: [],
  filteredBrands: [],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setStockData: (state) => {
      state.filteredBrands = stockData;
    },
    updateFilteredByYear: (state, action: PayloadAction<number>) => {
      state.headerInfo.push(action.payload.toString());
      state.filteredBrands = state.filteredBrands.filter(
        (item) => item.year === action.payload
      );
    },
  },
});

const selectHeaderInfo = (state: RootState) =>
  state.form.headerInfo.join(" - ");

const selectYearsList = () => {
  const modelYears = stockData.map((item: { year: number }) => item.year);
  const years = modelYears
    .filter(function (item, pos, self) {
      return self.indexOf(item) === pos;
    })
    .sort()
    .reverse();
  return years;
};

export const { setStockData, updateFilteredByYear } = formSlice.actions;

export { selectHeaderInfo, selectYearsList };

export default formSlice.reducer;
