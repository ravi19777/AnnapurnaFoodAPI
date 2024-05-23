import restaurants from "../../data";

const restroAuthController = {
  async registerRestro(req, res) {
    const newData = req.body;
    restaurants.push(newData);
    res.send(newData);
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
