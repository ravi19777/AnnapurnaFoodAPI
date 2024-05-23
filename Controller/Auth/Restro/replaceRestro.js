import restaurants from "../../../data";

export const replaceRestroInfo = (req, res) => {
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
};
