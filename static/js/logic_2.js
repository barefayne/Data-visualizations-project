// Create the tile layer that will be the background of our map.
  var map = L.map("map", {
    center: [37.8, -96],
    zoom: 4.5});
    
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Perform an API call
const url = "http://127.0.0.1:5000/api/v1.0/cases";

var api_data=[]

d3.json(url).then(function (data) {
  console.log(data);
  api_data=data;

 // Loop through the data
  for (var i=0; i <data.length; i++)
  {
    var lat = data[i]["latitude"];
    var lon = data[i]["longitude"];
    var marker = L.marker([lat, lon]).addTo(map);
// Bind a popup to the marker that will  display on being clicked. This will be rendered as HTML.
    marker.bindPopup(`<div style="font-size:16px"><b>Case:</b> ${data[i]["Case"]}<br>
                  <b>Location:</b> ${data[i]["Location"]}<br>
                  <b>Date:</b> ${data[i]["Date"]}<br>
                  <b>Total Victims:</b> ${data[i]["Total victims"]}<br>
                  <b>Deceased:</b> ${data[i]["Fatalities"]}<br>`);
                  
}

});

