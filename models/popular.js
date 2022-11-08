'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Popular extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Popular.init({
    productId: DataTypes.STRING,
    info: DataTypes.STRING,
    price: DataTypes.FLOAT,
    imgUrl: DataTypes.STRING,
    dealerId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Popular',
  });
  return Popular;
};