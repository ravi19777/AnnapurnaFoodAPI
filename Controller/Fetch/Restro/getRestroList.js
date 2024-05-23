import restaurants from "../../../data";

export const getRestroList = (req, res) => {
  res.send(restaurants);
};
