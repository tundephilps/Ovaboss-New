import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FilterPanel = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [budgetSelected, setBudgetSelected] = useState("all");
  const [customBudget, setCustomBudget] = useState("");
  const [citySearch, setCitySearch] = useState("");
  const [citySelected, setCitySelected] = useState("all");
  const [serviceRankSelected, setServiceRankSelected] = useState("all");
  const [stateSelected, setStateSelected] = useState("all");

  const budgetOptions = [
    { label: "All", value: "all" },
    { label: "Value Above £500", value: "above500" },
    { label: "Mid Range £190 - £500", value: "midrange" },
    { label: "Value Low £90", value: "low" },
    { label: "Custom", value: "custom" },
  ];

  const cityOptions = [
    { label: "All", value: "all" },
    { label: "Birmingham", value: "birmingham" },
    { label: "Bristol", value: "bristol" },
    { label: "Bradford", value: "bradford" },
    { label: "Coventry", value: "coventry" },
    { label: "Leicester", value: "leicester" },
  ];

  const stateOptions = [
    { label: "All", value: "all" },
    { label: "Bedfordshire", value: "bedfordshire" },
    { label: "Berkshire", value: "berkshire" },
    { label: "Buckingham", value: "buckingham" },
    { label: "Cornwall", value: "cornwall" },
    { label: "Devon", value: "devon" },
  ];

  const serviceRankOptions = [
    { label: "All", value: "all" },
    { label: "Sponsored", value: "sponsored" },
    { label: "Top Rated", value: "topRated" },
    { label: "Vested", value: "vested" },
  ];

  const filteredCities = cityOptions.filter((city) =>
    city.label.toLowerCase().includes(citySearch.toLowerCase())
  );

  const renderDropdown = (title, options, selected, setSelected, key) => (
    <div className="relative">
      <button
        className="border bg-white text-xs rounded px-4 py-2 lg:min-w-[150px] w-full flex items-center justify-between"
        onClick={() => setOpenDropdown(openDropdown === key ? null : key)}
      >
        {title} <FaChevronDown className="ml-2 text-sm" />
      </button>
      {openDropdown === key && (
        <div className="absolute top-full mt-2 left-0 w-64 bg-white border rounded shadow p-4 z-10">
          <h3 className="font-medium mb-3">{title}</h3>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {options.map((option) => (
              <label key={option.value} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selected === option.value}
                  onChange={() => setSelected(option.value)}
                  className="accent-yellow-500"
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
          {key === "budget" && selected === "custom" && (
            <div className="mt-3">
              <label className="text-sm text-gray-500 mb-1 block">Up to</label>
              <div className="flex items-center border rounded px-2 py-1">
                <span className="text-sm">£</span>
                <input
                  type="number"
                  value={customBudget}
                  onChange={(e) => setCustomBudget(e.target.value)}
                  className="ml-1 w-full outline-none"
                  placeholder="0"
                />
              </div>
            </div>
          )}
          <div className="flex justify-between items-center border-t mt-4 pt-4">
            <button
              className="text-sm text-gray-500"
              onClick={() => {
                setSelected("all");
                if (key === "budget") setCustomBudget("");
              }}
            >
              Clear all
            </button>
            <button
              className="bg-black text-white px-4 py-2 rounded text-sm"
              onClick={() => setOpenDropdown(null)}
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="py-4 space-x-4 lg:space-y-0 gap-y-2  flex flex-wrap">
      {renderDropdown(
        "Service Rank",
        serviceRankOptions,
        serviceRankSelected,
        setServiceRankSelected,
        "serviceRank"
      )}
      {renderDropdown(
        "Budget",
        budgetOptions,
        budgetSelected,
        setBudgetSelected,
        "budget"
      )}
      {renderDropdown(
        "State/Province/Region",
        stateOptions,
        stateSelected,
        setStateSelected,
        "state"
      )}

      {/* Cities/Locality Dropdown */}
      <div className="relative">
        <button
          className="border rounded px-4 text-xs py-2 lg:min-w-[150px] w-full flex items-center justify-between"
          onClick={() =>
            setOpenDropdown(openDropdown === "cities" ? null : "cities")
          }
        >
          Cities/Locality <FaChevronDown className="ml-2 text-sm" />
        </button>
        {openDropdown === "cities" && (
          <div className="absolute top-full mt-2 left-0 w-64 bg-white border rounded shadow p-4 z-10">
            <input
              type="text"
              placeholder="Search"
              value={citySearch}
              onChange={(e) => setCitySearch(e.target.value)}
              className="w-full mb-3 px-3 py-2 border rounded"
            />
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {filteredCities.map((city) => (
                <label key={city.value} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={citySelected === city.value}
                    onChange={() => setCitySelected(city.value)}
                    className="accent-yellow-500"
                  />
                  <span>{city.label}</span>
                </label>
              ))}
            </div>
            <div className="flex justify-between items-center border-t mt-4 pt-4">
              <button
                className="text-sm text-gray-500"
                onClick={() => {
                  setCitySelected("all");
                  setCitySearch("");
                }}
              >
                Clear all
              </button>
              <button
                className="bg-black text-white px-4 py-2 rounded text-sm"
                onClick={() => setOpenDropdown(null)}
              >
                Apply
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterPanel;
