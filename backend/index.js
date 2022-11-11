const express = require("express");
const cors = require("cors");

var path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./models");

const main = async () => {
  try {
    const users = await db.User.findAll({
      include: [{
        model: db.Restaurant,
        as: 'restaurants',
        attributer: { exclude: [ 'createdAt', 'updatedAt'] },
        through: { attributes: [] },
      }],
    });
    console.log(JSON.stringify(users));
    app.get("/", (req, res) => {
      res.json(JSON.stringify(users));
      });
  } catch (error) {
    console.log(error);
  }
};

main();

db.sequelize.sync();


require("./routes/restaurant.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});