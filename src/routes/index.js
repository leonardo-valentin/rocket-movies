const {Router} = require("express")

const userRouter = require("./users.routes")
const notesRouter = require("./movie_notes.routes")
const tagsRouter = require("./movie_tags.routes")

const routes = Router()

routes.use("/users", userRouter)
routes.use("/mnotes", notesRouter)
routes.use("/mtags", tagsRouter)

module.exports = routes