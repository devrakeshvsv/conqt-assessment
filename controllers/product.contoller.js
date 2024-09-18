// Import config
const { database } = require("../config");

// Controller: Get products
const getProducts = async (req, res) => {
  try {
    const {
      pageSize = "10",
      currentPage = "1",
      orderBy = "createdAt",
      orderDir = "desc",
      searchBy = "",
      searchFields = [],
    } = req.query;

    // console.log({ pageSize, currentPage, orderBy, orderDir, searchBy, searchFields });

    // database.query(`SELECT * FROM ProductV2 WHERE itemType='Automotive accessories'`, (err, result) => {
    //   if (err) {
    //     console.error(err);
    //   } else {
    //     console.log(result.length);
    //   }
    // });

    return res.status(200).send({
      hasError: false,
      // data: response,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      hasError: true,
      message: "Something went wrong",
    });
  }
};

module.exports = {
  getProducts,
};
