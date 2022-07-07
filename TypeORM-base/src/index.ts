import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { People } from "./entity/People"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.age = 25
    await AppDataSource.manager.save(user)

    const user2 = new People()
    user2.firstName = "Timber2"
    user2.lastName = "Saw2"
    user2.age = 252
    await AppDataSource.manager.save(user2)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
