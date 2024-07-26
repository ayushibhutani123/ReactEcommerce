import { useState } from "react";
import "./FilterRate.css";

export default function FilterRate({ onApplyFilters }) {
  const [checkedVal, setCheckedVal] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setCheckedVal((prev) =>
      event.target.checked ? [...prev, value] : prev.filter((v) => v !== value)
    );
  };

  const handleCheckBox = () => {
    onApplyFilters(checkedVal);
  };

  return (
    <div className="filters">
      <h2>Rating:</h2>
      <div className="checkboxes">
        <label>
          <input
            type="checkbox"
            name="rate1"
            value="1"
            onChange={handleChange}
          />
          1
        </label>
        <label>
          <input
            type="checkbox"
            name="rate2"
            value="2"
            onChange={handleChange}
          />
          2
        </label>
        <label>
          <input
            type="checkbox"
            name="rate3"
            value="3"
            onChange={handleChange}
          />
          3
        </label>
        <label>
          <input
            type="checkbox"
            name="rate4"
            value="4"
            onChange={handleChange}
          />
          4
        </label>
        <label>
          <input
            type="checkbox"
            name="rate5"
            value="5"
            onChange={handleChange}
          />
          5
        </label>
      </div>
      <button className="filter_btn" onClick={handleCheckBox}>
        Apply Filters
      </button>
    </div>
  );
}
