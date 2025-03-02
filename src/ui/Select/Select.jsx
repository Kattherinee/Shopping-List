import React, { useState, useEffect } from "react";
import ReactSelect from "react-select";

function CustomSelect({ options, value, onChange, onFilter }) {
  const selectOptions = options.map((option) => ({
    value: option,
    label: option,
  }));

  const handleSelectChange = (selectedOption) => {
    onChange(selectedOption.value);
    if (selectedOption.value === "Done") {
      onFilter(true);
    } else if (selectedOption.value === "To do") {
      onFilter(false);
    } else {
      onFilter(null);
    }
  };

  const currentOption = selectOptions.find((opt) => opt.value === value);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isSmall = windowWidth < 480;
  const controlWidth = isSmall ? "87px" : "93px";
  const controlHeight = isSmall ? "32px" : "38px";
  const fontSize = isSmall ? "13px" : "18px";
  const arrowSize = isSmall ? "12px" : "15px";
  const menuWidth = controlWidth;

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: controlWidth,
      backgroundColor: "var(--purple)",
      border: "none",
      boxShadow: "none",
      minHeight: controlHeight,
      height: controlHeight,
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: fontSize,
      "&:hover": {
        backgroundColor: "var(--purple-hover)",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#fff",
      textTransform: "uppercase",
      fontWeight: 500,
      fontSize: fontSize,
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: "#fff",
      paddingRight: "4px",
      svg: {
        fill: "#fff",
        transition: "transform 0.2s ease",
        transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "none",
        width: arrowSize,
        height: arrowSize,
      },
      "&:hover": {
        color: "#fff",
        svg: {
          fill: "#fff",
        },
      },
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: "0 7px",
    }),
    menu: (provided) => ({
      ...provided,
      width: menuWidth,
      marginTop: "6px",
      borderRadius: "6px",
      backgroundColor: "#fff",
      border: "1px solid #ddd",
      overflow: "hidden",
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: "pointer",
      fontWeight: 500,
      textTransform: "uppercase",
      padding: "8px 12px",
      fontSize: fontSize,
      color: state.isFocused ? "var(--purple)" : "var(--light-grey)",
      backgroundColor: state.isFocused ? "var(--light-purple)" : ")",
    }),
  };

  return (
    <ReactSelect
      value={currentOption}
      onChange={handleSelectChange}
      options={selectOptions}
      isSearchable={false}
      styles={customStyles}
      menuPlacement="auto"
    />
  );
}

export default CustomSelect;
