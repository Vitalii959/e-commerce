type cities = Record<string, string[]>;

const regions: cities = {
  US: ["California", "Texas", "Florida", "Illinois", "New York", "Ohio"],
  CA: ["Ontario", "Quebec", "British Columbia", "Alberta", "Manitoba"],
  MX: ["Jalisco", "Nuevo León", "Puebla", "Guanajuato", "Veracruz"]
};

export const helper = () => {
  const getState = Object.keys(regions);
  const getCity = (state: string) => regions[state];

  return {getState, getCity};
};
