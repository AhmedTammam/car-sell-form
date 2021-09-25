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
  cars: CarProps[];
}

const initialState: FormState = {
  headerInfo: [],
  cars: [],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setStockData: (state) => {
      state.cars = stockData;
    },
    updateCarsByYear: (state, action: PayloadAction<number>) => {
      state.headerInfo.push(action.payload.toString());
      state.cars = state.cars.filter((item) => item.year === action.payload);
    },
    updateCarsByBrand: (state, action: PayloadAction<string>) => {
      state.headerInfo.push(action.payload.toString());
      state.cars = state.cars.filter((item) => item.make === action.payload);
    },
  },
});

const selectHeaderInfo = (state: RootState) =>
  state.form.headerInfo.join(" - ");

const selectManufacturingYearList = (state: RootState) => {
  const manufacturingYear = state.form.cars.map(
    (item: { year: number }) => item.year
  );

  const years = manufacturingYear
    .filter(function (item, pos, self) {
      return self.indexOf(item) === pos;
    })
    .sort()
    .reverse();
  return years;
};

const selectBrandsList = (state: RootState) => {
  const brandsList = state.form.cars.map((item) => item.make);
  const filteredBrandsList = brandsList.filter(
    (item: string, pos: number, self: string[]) => {
      return self.indexOf(item) === pos;
    }
  );

  return filteredBrandsList;
};

export const { setStockData, updateCarsByYear, updateCarsByBrand } =
  formSlice.actions;

export { selectHeaderInfo, selectManufacturingYearList, selectBrandsList };

export default formSlice.reducer;
