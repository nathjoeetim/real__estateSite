type GetCountryType = {
  status: string;
  "status-code"?: number;
  version: string; // Assuming version is a string based on the provided JSON
  access: string; // Removed unnecessary quotation marks
  data: CountryDataType;
};

type CountryDataType = {
  [key: string]: {
    country: string;
    region: string;
  };
};
