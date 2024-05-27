import { useStarbucksData } from "../menu/util";
import React, { useState } from "react";

const FlavorProfileDropdown: React.FC = () => {
  const { flavorProfiles } = useStarbucksData();
  const uniqueFlavorProfiles = new Set<string>(flavorProfiles);
  const uniqueFlavorProfilesArray = Array.from(uniqueFlavorProfiles);
  const [selectedProfile, setSelectedProfile] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProfile(event.target.value);
  };

  return (
    <div style={{ textAlign: "left" }}>
      <h3>Flavor Profiles</h3>
      <select value={selectedProfile} onChange={handleChange} style={{width:"230px", height:"30px"}}>
        <option value="">Select a flavor profile</option>
        {uniqueFlavorProfilesArray.map((profile, index) => (
          <option key={index} value={profile}>
            {profile}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FlavorProfileDropdown;
