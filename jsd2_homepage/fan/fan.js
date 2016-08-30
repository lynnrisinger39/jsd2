var fanTemplate = document.querySelector("#fan-template");

function addItemToList(event) {
    event.preventDefault();

    // create JSON for new item
    var item = {
        name: message.value,
        completed: false
    };


    item.tasks.push(item);

};