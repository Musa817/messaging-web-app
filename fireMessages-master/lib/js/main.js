const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);

//Set database object here
let myDB = firebase.database().ref();

/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault();
    const username        = usernameElement.value;
    const message         = messageElement.value;

    usernameElement.value = "";
    messageElement.value  = "";

    console.log(username + " : " + message);

    //Update database here
    let value = {//opens value object.
     //2 columns within each row.
      NAME: username,
      MESSAGE: message,

    }//closes value object.
    myDB.push(value);
}
let msgBoard = document.querySelector(".allMessages");

// Set database "child_added" event listener here
myDB.on("child_added", addMessageToBoard);

function addMessageToBoard(rowData){
 let row = rowData.val();
 let name = row.NAME;
 let sentence = row.MESSAGE;
 let newP = document.createElement("p");
 newP.innerText = name + " " +":" + " " + sentence;
 msgBoard.appendChild(newP);
}