const getDetailByType = (data: any, jsonSpace = 4) => {
  switch (typeof data) {
    case "object":
      return JSON.stringify(data, null, jsonSpace);
    case "function":
      return data.toString();
    case "undefined":
      return "undefined";
    case "undefined":
      return "null";
    default:
      return data.toString();
  }
};

export { getDetailByType };
