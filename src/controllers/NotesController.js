const AppError = require("../utils/AppError")

const sqliteConnection = require("../database/sqlite")

class NotesController {
    async create(request, response) {
        
        return response.status(301).json()
    }
}

module.exports = NotesController