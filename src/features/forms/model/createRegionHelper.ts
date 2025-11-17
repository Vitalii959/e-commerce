type Regions = Record<string, string[]>;

const regions: Regions = {
  US: ["California", "Texas", "Florida", "Illinois", "New York", "Ohio"],
  CA: ["Ontario", "Quebec", "British Columbia", "Alberta", "Manitoba"],
  MX: ["Jalisco", "Nuevo León", "Puebla", "Guanajuato", "Veracruz"]
};

export const regionsHelper = () => {
  const getState = Object.keys(regions);
  const getCity = (state: string) => regions[state];

  return {getState, getCity};
};
