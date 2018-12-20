const ul = document.getElementById('current-status');
const url = 'https://4277980205320394.hostedstatus.com/1.0/status/575f0f606826303142000510';

const request = new XMLHttpRequest()

//request.addEventListener('readstatechange', (e) => {
request.onreadystatechange = function(e) {
  // console.log(e)
  if (e.target.readyState == 4) {
    //responseText is the JSON text
    //Use JSON.parse to turn this into an Object you can loop through
    const data = JSON.parse(e.target.responseText)
    myFunction(data);
  }
}

// request.open('GET', 'https://4277980205320394.hostedstatus.com/1.0/status/575f0f606826303142000510')
request.open('GET', 'http://test.dreamhostexample.com/triple.json')
// request.open('GET', 'http://test.dreamhostexample.com/operational.json')
request.send()

function myFunction(data) {


  //loop through each status topic
  for (i = 0; i < data.result.status.length; i++) {
    // if (data.result.status[i].status_code == 100) {

    /*var name = data.result.status[i].name
    var sub_array = []
    var super_array = []
    sub_array.push(name);
    super_array.push(sub_array.slice(0));
    console.log(super_array)*/


    if (data.result.status[0].status_code == 100 && data.result.status[1].status_code == 100 && data.result.status[2].status_code == 100 && data.result.status[3].status_code == 100 && data.result.status[4].status_code == 100 && data.result.status[5].status_code == 100 && data.result.status[6].status_code == 100 && data.result.status[7].status_code == 100 && data.result.status[8].status_code == 100 && data.result.status[9].status_code == 100 && data.result.status[10].status_code == 100 && data.result.status[11].status_code == 100 && data.result.status[12].status_code == 100 && data.result.status[13].status_code == 100 && data.result.status[14].status_code == 100 && data.result.status[15].status_code == 100) {

      // console.log(data.result.status[3].name)
      // while (i < data.result.status.length) {
      // array.push(name)
      // }
      // console.log(array.length)
      // console.log(data.result.status.length)
      // if (array.length == data.result.status.length) {
      document.getElementById("allSystemsOperational").style.display = "block";
      document.getElementById("operationalText").style.display = "block";
      // continue
      // }




    } else if (data.result.status[i].status_code != 100) {

      //total # of incidents
      for (z = 0; z < data.result.incidents.length; z++) {
        //individual incidents
        for (x = 0; x < data.result.incidents.length; x++) {
          //incident details
          for (y = 0; y < data.result.incidents[x].messages.length; y++) {
            var max = data.result.incidents[x].messages.length

            // if ((z == 0 && z == x && y != 0) || (z == x && y == max)) {
            var current  = data.result.incidents[x].messages.length
              if (z == x && current == max) {


              //Print message text first
              //get message
              console.log("y" + y)
              console.log(max)
              var updateMessageText = data.result.incidents[x].messages[y].details
              console.log(updateMessageText)

              var container = document.getElementById('container'),
                textString = '',
                textClass = 'updatedStatus';


              var incText = document.createElement("p");
              incText.innerHTML = updateMessageText

              textString += '<div class="' + textClass + '"></div>';
              container.insertAdjacentHTML('afterbegin', textString);

              //prints title to page
              var textDiv = document.querySelector('.updatedStatus');
              textDiv.innerHTML += updateMessageText


              //print time second
              //get time of post and convert
              console.log("x" + x)
              console.log(max)
              var updateMessageTime = data.result.incidents[x].messages[y].datetime
              var convertedDate = new Date(updateMessageTime);
              console.log(convertedDate)

              //Create div for each incident Topic title
              var timeString = '',
                timeClass = 'updatedTime';
              var incTime = document.createElement("p");
              incTime.innerHTML = convertedDate
              timeString += '<div class="' + timeClass + '"></div>';
              container.insertAdjacentHTML('afterbegin', timeString);
              //prints title to page
              var timeDiv = document.querySelector('.updatedTime');
              timeDiv.innerHTML += convertedDate


              //print topic 3rd
              //get incident title
              console.log("z" + z)
              console.log(max)
              var incidentTopic = data.result.incidents[z].name
              console.log(incidentTopic)

              //Create div for each incident Topic title
              //var container = document.getElementById('container'),
              var topicString = '',
                topicClass = 'incidentTopic';

              var incTopic = document.createElement("p");
              incTopic.innerHTML = incidentTopic
              topicString += '<div class="' + topicClass + '"></div>';
              container.insertAdjacentHTML('afterbegin', topicString);
              //prints title to page
              var topicDiv = document.querySelector('.incidentTopic');
              topicDiv.innerHTML += incidentTopic

              document.getElementById("further-status-details").style.display = "block";
            }
          }



        }







      } //close inner for loop
    } //close for loop
  } //close for loop
} //close else




//} //close for loop
//} //close function
