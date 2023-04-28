const getDetailByType = (data: any, jsonSpace = 4) => {
  switch (typeof data) {
    case "object":
      return JSON.stringify(data, null, jsonSpace);
    case "undefined":
      return "undefined";
    case "bigint":
      return `${data}n`;
    default:
      // number、string、Symbol、function、boolean
      return data.toString();
  }
};

export { getDetailByType };
