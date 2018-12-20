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
request.open('GET', 'http://test.dreamhostexample.com/double.json')
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
      for (z = 0; z < data.result.incidents.length -1; z++) {

        //get incident title
        var incidentTopic = data.result.incidents[z].name
        // document.getElementById("incidentTopic").innerHTML = incidentTopic
console.log(incidentTopic)


        //Create div for each incident Topic title
        var container = document.getElementById('container'),
        topicString = '',
        topicClass = 'incidentTopic';

        var incTopic = document.createElement("p");
        incTopic.innerHTML = incidentTopic

        topicString += '<div class="' + topicClass + '"></div>';
        container.insertAdjacentHTML('afterbegin', topicString);
        //prints title to page
        var topicDiv = document.querySelector('.incidentTopic');
        topicDiv.innerHTML += incidentTopic






        //total amount of incidents
        //this causes everthing to loop twice which is needed
        //otherwise the other incidents would not be printed
        for (x = 0; x < data.result.incidents.length; x++) {

          //total amount of messages in all incidents

          for (y = 0; y < data.result.incidents[x].messages.length; y++) {
if (y == data.result.incidents[x].messages.length -1) {
console.log("x" + x)
console.log("y" + y)
           var max = data.result.incidents[x].messages.length

            //get time of post and convert

            var updateMessageTime = data.result.incidents[x].messages[y].datetime
            var convertedDate = new Date(updateMessageTime);

console.log(convertedDate)
            //get message
            var updateMessageText = data.result.incidents[x].messages[y].details
console.log(updateMessageText)
}
            //create new elements
            //if (y < data.result.incidents[x].messages.length) {

/*
              var h = document.createElement("p");
              var t = document.createTextNode(convertedDate);
              h.appendChild(t);
              document.body.appendChild(h);

              var h2 = document.createElement("p");
              var t2 = document.createTextNode(updateMessageText);
              h2.appendChild(t);
              document.body.appendChild(h2);
*/


              /*
              var container = document.getElementById('container'),
                timeString = '',
                timeClass = 'updatedTime';

                var postTime = document.createElement("p");
                postTime.innerHTML = updateMessageTime

                timeString += '<div class="' + timeClass + '"></div>';
                container.insertAdjacentHTML('afterbegin', timeString);
                //prints title to page
                var timeDiv = document.querySelector('.updatedTime');
                timeDiv.innerHTML += updatedTime
*/



//              topicString += '<div class="' + topicClass + '"></div>';
//              container.insertAdjacentHTML('afterbegin', topicString);


/*
              timeString += '<div class="' + timeClass + '"></div>';
              container.insertAdjacentHTML('afterbegin', timeString);

              var d1 = document.createElement("p");
              d1.innerHTML = convertedDate;
              document.querySelector(".updatedTime").appendChild(d1);
*/




              //var d1 = document.createElement("p");
              //d1.innerHTML = convertedDate;
              // document.querySelector(".updatedTime").appendChild(d1);

              //var m1 = document.createElement("p");
              //d1.innerHTML = updateMessageText;
              // document.querySelector(".updatedText").appendChild(m1);

            }







          } //close inner for loop
        } //close for loop
      } //close for loop
    } //close else




  } //close for loop
//} //close function
