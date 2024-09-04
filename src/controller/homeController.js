// Get the client
import userService from "../service/userService";

const handleHelloWorld = (req, res) => {
  let name = "Sniper";
  return res.render("home.ejs", { name });
};

const handleUser = async (req, res) => {
  let userList = await userService.getUserList();
  return res.render("user.ejs", {userList});
};

const handleCreateNewUser = async  (req, res) => {
    let { email, password, username } = req.body;
    let createUser = await userService.createNewUser(email, password, username);
    return res.redirect("/user")
};

const handleGetUserList = async  (req, res) => {
  let userList = await userService.getUserList();
  return res.send("Get Users successfully");
};

const handleDeleteUser = async (req, res) => {
  let id = req.params.id;
  let deleteUser = await userService.deleteUser(id);
  return res.redirect("/user")
}

const handleEditGetUserById = async (req, res) => {
  let id = req.params.id
  let editGetUserById = await userService.editGetUserById(id);
  return res.render('editUser.ejs', {editGetUserById})
}

const handleUpdateUser = async (req, res) => {
  let id = req.params.id
  let { email, username } = req.body;
  let updateUser = await userService.updateUser(id, email, username);
  return res.redirect("/user")

}
module.exports = {
  handleHelloWorld,
  handleUser,
  handleCreateNewUser,
  handleGetUserList,
  handleDeleteUser,
  handleEditGetUserById,
  handleUpdateUser
};
