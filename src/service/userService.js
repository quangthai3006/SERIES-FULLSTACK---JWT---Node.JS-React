// Get the client
import userService from "../service/userService";
// get the client
import mysql from "mysql2/promise";
import db from "../models/models/index";

import bcrypt from "bcryptjs";
import { where } from "sequelize/lib/sequelize";
const salt = bcrypt.genSaltSync(10);

const hashPassword = (usePassword) => {
  let hashPassword = bcrypt.hashSync(usePassword, salt);
  return hashPassword;
};

const createNewUser = async (email, password, username) => {
  let hashPasswordToUser = hashPassword(password);
  await db.User.create({
    email,
    password: hashPasswordToUser,
    username,
  });
};

const getUserList = async () => {
  let users = await db.User.findAll();
  return users;
};

const deleteUser = async (id) => {
  try {
    await db.User.destroy({
      where: { id },
    });
  } catch (error) {
    console.log(error);
  }
};

const editGetUserById = async (id) => {
  try {
    let getUserById = await db.User.findOne({
      where: { id },
    });
    return getUserById;
  } catch (error) {
    console.log(error);
  }
};


const updateUser = async (id, email, username) => {
  try {

    const result = await db.User.update(
      { email, username },
      { where: { id } }
    );

    // Check if any rows were affected
    if (result[0] === 0) {
      console.log('No user found with the given ID.');
    } else {
      console.log('User updated successfully:', result);
    }
  } catch (error) {
    console.log('Error updating user:', error);
  }
};

module.exports = {
  hashPassword,
  createNewUser,
  getUserList,
  deleteUser,
  editGetUserById,
  updateUser,
};
