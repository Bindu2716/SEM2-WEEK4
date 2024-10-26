const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Book = require('./Book');

class BorrowedBook extends Model {}

BorrowedBook.init({
  userId: { type: DataTypes.INTEGER, references: { model: User, key: 'id' } },
  bookId: { type: DataTypes.INTEGER, references: { model: Book, key: 'id' } },
  borrowedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { sequelize, modelName: 'borrowedBook' });

module.exports = BorrowedBook;
