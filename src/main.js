import { FurnitureSearch } from "./search";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import logo from "./images/furnitureking1.png";

let logoElement = document.getElementById("logo");
logoElement.src = logo;

$(document).ready(function() {
  let newSearch = new FurnitureSearch();
  let promise = newSearch.GetFurniture();

  promise.then(function(response) {
    let typeList = [];
    let body = JSON.parse(response);

    function jsUcfirst(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    for (let i = 0; i < body.body.data.length; i++) {
      //rewrite id with local id, since API ids are flawed
      body.body.data[i].id = i;

      //uppercase types
      body.body.data[i].type = jsUcfirst(body.body.data[i].type);

      //push all unique types to a list of types
      if (!typeList.includes(body.body.data[i].type)) {
        typeList.push(body.body.data[i].type);
      }
    }
    typeList.forEach(printTypes);

    function printTypes(type) {
      $("#name").append(`<li class=furnitureType id= ${type}> ${type} </li>`);
    }

    function printItems(type) {
      for (let i = 0; i < body.body.data.length; i++) {
        if (body.body.data[i].type === type) {
          $("#details").append(
            `<li class=furnitureItem id=${body.body.data[i].id}>${
              body.body.data[i].name
            }!</li>`
          );
        }
      }
      $(".furnitureItem").click(function(event) {
        event.preventDefault();
        $("#itemDetails, #itemPhoto").empty();
        let id = this.getAttribute("id");
        console.log(id);
        printItemDetails(id);
      });
    }

    function printItemDetails(id) {
      console.log(id);
      id = parseInt(id);
      for (let i = 0; i < body.body.data.length; i++) {
        if (body.body.data[i].id === id) {
          let deliverable;
          let colors = body.body.data[i].colors.join(", ");
          if (body.body.data[i].deliverable === true) {
            deliverable = "This item is deliverable!";
          } else {
            deliverable = "Sorry, this item is not deliverable.";
          }
          $("#itemDetails").append(
            `<p><em>the king presents to you...</em></p><p  id=itemName>${
              body.body.data[i].name
            }</p>`
          );
          $("#itemDetails").append(`<p>${body.body.data[i].description}</p>`);
          $("#itemDetails").append(
            `<p>Available in the following colors: ${colors}</p>`
          );
          $("#itemDetails").append(
            `<p>Amazing deal! Only <strong>$${
              body.body.data[i].cost
            }</strong></p>`
          );
          if (body.body.data[i].dimensions) {
            $("#itemDetails").append(
              `<p>Dimensions: ${body.body.data[i].dimensions.width}"W x ${
                body.body.data[i].dimensions.length
              }"L</p>`
            );
          }
          $("#itemDetails").append(
            `<p>Quantity in stock:${body.body.data[i].stock}</p>`
          );
          $("#itemDetails").append(`<p>${deliverable}</p>`);
          $("#itemPhoto").append(
            `<img src=${
              body.body.data[i].imageUrl
            } alt='itemPhoto' id='actualFurnitureImage'>`
          );
        }
      }
    }

    $(".furnitureType").click(function(event) {
      event.preventDefault();
      $("#details").empty();
      let id = this.getAttribute("id");
      printItems(id);
    });
  });
});
