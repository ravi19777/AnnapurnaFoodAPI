import restaurants from "../../../data";

export const registerRestro = (req, res) => {
  const newData = req.body;
  restaurants.push(newData);
  res.send(newData);
};
