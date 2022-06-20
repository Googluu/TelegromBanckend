const Model = require('./model');

const addMessage = message => {
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessage(filterUser) {
    let filter = {};
    if ( filterUser !== null) {
        filter = { user: filterUser };
    }
    const messages = await Model.find(filter);
    return(messages);
}

function removeMessage(id) {
    return Model.deleteOne({
        _id: id
    });
}

async function updateText(id, message){
    const updatedMessage = await Model.findByIdAndUpdate(id, {message}, {new: true});
    return updatedMessage;
}

module.exports = {
    add: addMessage,
    list: getMessage,
    updateText: updateText,
    remove: removeMessage
}