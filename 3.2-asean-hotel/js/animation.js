let arrayAnchor = document.querySelectorAll(".link-anchor a img");

arrayAnchor[0].addEventListener("click", () => {
  if (arrayAnchor[0].getAttribute("src") == "./img/about-img/locaHotel.gif") {
    arrayAnchor[0].setAttribute("src", "./img/about-img/locaHotel_over.gif");
  } else {
    arrayAnchor[0].setAttribute("src", "./img/about-img/locaHotel.gif");
  }
});

arrayAnchor[1].addEventListener("click", () => {
  if (arrayAnchor[1].getAttribute("src") == "./img/about-img/Description.gif") {
    arrayAnchor[1].setAttribute("src", "./img/about-img/Description_over.gif");
  } else {
    arrayAnchor[1].setAttribute("src", "./img/about-img/Description.gif");
  }
});

arrayAnchor[2].addEventListener("click", () => {
  if (
    arrayAnchor[2].getAttribute("src") == "./img/about-img/HotelContact.gif"
  ) {
    arrayAnchor[2].setAttribute("src", "./img/about-img/HotelContact_over.gif");
  } else {
    arrayAnchor[2].setAttribute("src", "./img/about-img/HotelContact.gif");
  }
});
