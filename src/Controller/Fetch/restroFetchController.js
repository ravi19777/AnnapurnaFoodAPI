import restaurants from "../../../data";
import { HomePage } from "../../Schema";

const restroFetchController = {
  async getRestroList(req, res) {
    res.send(restaurants);
  },
  async getRestro(req, res) {
    const restroId = req.params.id;
    const targetRestroIndex = restaurants.findIndex(
      (restro) => restro.id == restroId
    );
    const targetRestroInfo = restaurants[targetRestroIndex];

    res.send(targetRestroInfo);
  },
};

export default restroFetchController;
