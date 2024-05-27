import FlavorDropdown from "../flavorProfile/flavorDropDown";
import style from "../../style/SideBar.module.css";

const SideBar = ({
  regions,
  grindOptions,
  selectedRegions,
  selectedGrindOptions,
  onRegionChange,
  onGrindChange,
  onClearFilters,
}: {
  regions: string[];
  selectedRegions: string;
  onRegionChange: (region: string) => void;
  grindOptions: string[];
  selectedGrindOptions: string;
  onGrindChange: (grindOption: string) => void;
  onClearFilters: () => void;
}) => {
  const handleRegionCheckboxChange = (region: string) => {
    onRegionChange(region);
  };

  const handleGrindCheckboxChange = (grindOption: string) => {
    onGrindChange(grindOption);
  };

  return (
    <div className="row">
      <div className="row">
        <h2>Filter</h2>
      </div>
      <div>
        <h4>Region</h4>
        {regions.map((region) => (
          <div key={region} className={style.checkboxContainer}>
            <input
              type="checkbox"
              id={region}
              value={region}
              checked={selectedRegions.includes(region)}
              onChange={() => handleRegionCheckboxChange(region)}
            />
            <label htmlFor={region}>{region}</label>
          </div>
        ))}
      </div>

      <div>
        <h4>Grind Option</h4>
        {grindOptions.map((grindOption) => (
          <div key={grindOption} className={style.checkboxContainer}>
            <input
              type="checkbox"
              id={grindOption}
              value={grindOption}
              checked={selectedGrindOptions.includes(grindOption)}
              onChange={() => handleGrindCheckboxChange(grindOption)}
            />
            <label htmlFor={grindOption}>{grindOption}</label>
          </div>
        ))}
      </div>
      <div className={style.checkboxContainer}>
        <FlavorDropdown />
      </div>
      <button
        type="button"
        className={style.btn}
        data-mdb-ripple-init
        onClick={onClearFilters}
      >
        Clear Filter
      </button>
    </div>
  );
};

export default SideBar;
