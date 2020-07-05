var socket = io();
var list = document.getElementById("list");

socket.on("photos", function (photos) {
  photos.map(function (photoitem) {
    console.log(photoitem);
    var newDiv = document.createElement("div");
    var thumbnail = document.createElement("div");
    var pictureTitle = document.createElement("div");
    var image = document.createElement("img");
    image.src = photoitem.media.m;
    newDiv.classList.add("row");
    thumbnail.classList.add("col-sm-6");
    pictureTitle.classList.add("col-sm-6");
    thumbnail.append(image);
    pictureTitle.append(photoitem.title);
    newDiv.append(thumbnail);
    newDiv.append(pictureTitle);
    list.prepend(newDiv);
  });
});
