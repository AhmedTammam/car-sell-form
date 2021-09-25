import React, { ReactNode, ChangeEvent, useState } from "react";
import { InputField } from "design-system/components/input-field";

const FilteredInput = ({
  dataToFiltered,
  renderFilteredData,
}: {
  dataToFiltered: string[];
  renderFilteredData: (data: string[]) => ReactNode;
}) => {
  const [data, setData] = useState(dataToFiltered);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const filteredData = dataToFiltered.filter((item: string) =>
      item.toLowerCase().includes(e.target.value.toLowerCase())
    );

    return setData(filteredData);
  };
  return (
    <div>
      {dataToFiltered.length > 1 && (
        <InputField onChange={handleChange} placeholder="select Mark" />
      )}
      {renderFilteredData && renderFilteredData(data)}
    </div>
  );
};

export default FilteredInput;
