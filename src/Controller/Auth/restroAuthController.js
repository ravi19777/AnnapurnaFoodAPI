import restaurants from "../../../data";
import { HomePage } from "../../Schema";

const restroAuthController = {
  async registerRestro(req, res) {
    const homePage = new HomePage();
    homePage.vegan = req.body.vegan;

    homePage.featured = req.body.featured;

    homePage.restroList = req.body.restroList;

    // console.log(vegan);
    console.log(homePage);

    // vegan.name = "Vegan Avocado Toast";
    // vegan.thumbnail = "https://example.com/images/vegan_avocado_toast.jpg";

    homePage.save((error, document) => {
      console.log(error, document);
    });
    res.send(req.body);
  },
  async replaceRestroInfo(req, res) {
    const updatedData = req.body;
    const restroId = req.params.id;
    const targetRestroIndex = restaurants.findIndex(
      (restro) => restro.id == restroId
    );

    // if target restro exist
    if (targetRestroIndex !== -1) {
      // Now replace the data
      restaurants[targetRestroIndex] = updatedData;
      res.json({
        message: `Updated the information of restaurant with id: ${restroId}`,
        data: updatedData,
      });
    } else {
      res.send(`Restaurant with id: ${restroId} is not found!!`);
    }
  },
  async updateRestroInfo(req, res) {
    const restroId = req.params.id;
    const targetRestroIndex = restaurants.findIndex(
      (restro) => restro.id == restroId
    );

    const updatedData = {
      ...restaurants[targetRestroIndex],
      ...req.body,
      id: restroId,
    };

    restaurants[targetRestroIndex] = updatedData;

    res.json({
      message: `Updated information of restaurant with id: ${restroId}`,
      data: updatedData,
    });
  },
  async deleteRestro(req, res) {
    const restroId = req.params.id;
    const restroIndex = restaurants.findIndex(
      (restro) => restro.id == restroId
    );

    if (restroIndex === -1) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    // Remove the restaurant from the array
    restaurants.splice(restroIndex, 1);

    res.json({
      message: `Restaurant with id: ${restroId} removed successfully`,
      data: restaurants,
    });
  },
};

export default restroAuthController;
