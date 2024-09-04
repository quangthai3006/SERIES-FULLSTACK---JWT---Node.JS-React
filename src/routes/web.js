import express from "express"
import homeController from '../controller/homeController'
const router = express.Router()

/**
 * 
 * @param {*} app : express app
 */
const initWebRouter = (app) => {
    router.get("/", homeController.handleHelloWorld)
    router.get("/user", homeController.handleUser)
    router.post("/users/create-user", homeController.handleCreateNewUser)
    router.post("/users/delete-user/:id", homeController.handleDeleteUser)
    router.post("/users/edit-user/:id", homeController.handleEditGetUserById)
    router.post("/users/update-user/:id", homeController.handleUpdateUser)






    return app.use("/", router)
}

export default initWebRouter