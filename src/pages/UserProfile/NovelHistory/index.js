import React, { useState } from "react";
import filterNovel_Manga from "./filterData";

const NovelHistory = (data) => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [customRange, setCustomRange] = useState({
    startDate: "",
    endDate: "",
  });
  const filterOptions = [
    { label: "All", value: "all" },
    { label: "1 Tuần", value: "1_week" },
    { label: "1 Tháng", value: "1_month" },
    { label: "3 Tháng", value: "3_months" },
    { label: "6 Tháng", value: "6_months" },
    { label: "1 Năm", value: "1_year" },
    { label: "Custom Range", value: "custom" },
  ];

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setCustomRange((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const filteredManga = filterNovel_Manga(data, selectedFilter, customRange);

  return (
    <>
      <div className="mb-4">
        <select
          value={selectedFilter}
          onChange={handleFilterChange}
          className="p-2 border rounded"
        >
          {filterOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {selectedFilter === "custom" && (
        <div className="mb-4 flex space-x-4">
          <input
            type="date"
            name="startDate"
            value={customRange.startDate}
            onChange={handleDateChange}
            className="p-2 border rounded"
          />
          <input
            type="date"
            name="endDate"
            value={customRange.endDate}
            onChange={handleDateChange}
            className="p-2 border rounded"
          />
        </div>
      )}
    </>
  );
};

export default NovelHistory;
