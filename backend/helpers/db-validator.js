// Possible general verification

const existModelById = async (Model, id) => {
    const existModelID = await Model.findById(id)
    if (!existModelID) {
        throw new Error(`ID: ${id} in ${Model.modelName} does not exist`)
    }
}

const existModelDB = async (Model, field = '') => {
    const modelC = await Model.findOne({ field })

    console.log(modelC)
    if (modelC) {
        throw new Error(`${Model.modelName}: ${field} alredy exists`)
    }
}
module.exports = {
    existModelById,
    existModelDB
}
