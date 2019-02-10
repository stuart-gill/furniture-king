import { FurnitureSearch } from "./search";
import { Furniture } from "./furniture.model";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import doctors from "./images/doctors.png";

let docElement = document.getElementById("doctors");
docElement.src = doctors;

$(document).ready(function() {
  let newSearch = new FurnitureSearch();
  let promise = newSearch.GetFurniture();

  promise.then(function(response) {
    let typeList = [];
    let body = JSON.parse(response);
    // let furnitureArray = buildFurnitureFromJson(body);
    // console.log(furnitureArray);
    for (let i = 0; i < body.body.data.length; i++) {
      body.body.data[i].id = i;
      if (!typeList.includes(body.body.data[i].type)) {
        typeList.push(body.body.data[i].type);
      }
      // $("#name").append(`<li id= ${i}> ${body.body.data[i].name} </li>`);
    }
    typeList.forEach(printTypes);

    function printTypes(type) {
      $("#name").append(`<li class=furnitureType id= ${type}> ${type} </li>`);
    }

    // function buildFurnitureFromJson(body) {
    //   let tempArray = [];
    //   for (let i = 0; i < body.body.data.length; i++) {
    //     let id = i;
    //     let name = body.body.data[i].name;
    //     let imageUrl = body.body.data[i].imageUrl;
    //     let description = body.body.data[i].description;
    //     let colors = [];
    //     for (let j = 0; j < body.body.data[i].colors.length; j++) {
    //       colors.push(body.body.data[i].colors[j]);
    //     }
    //     let type = body.body.data[i].type;
    //     let deliverable = body.body.data[i].deliverable;
    //     let dimensions = [];
    //     if (body.body.data[i].dimensions) {
    //       dimensions.push(body.body.data[i].dimensions.length);
    //       dimensions.push(body.body.data[i].dimensions.width);
    //     }
    //     let cost = body.body.data[i].cost;
    //     let stock = body.body.data[i].stock;
    //     let newItem = new Furniture(
    //       id,
    //       name,
    //       imageUrl,
    //       description,
    //       colors,
    //       type,
    //       deliverable,
    //       dimensions,
    //       cost,
    //       stock
    //     );
    //     tempArray.push(newItem);
    //   }
    //   return tempArray;
    // }

    function printItems(type) {
      for (let i = 0; i < body.body.data.length; i++) {
        if (body.body.data[i].type === type) {
          $("#details").append(
            `<li class=furnitureItem id=${body.body.data[i].id}>${
              body.body.data[i].name
            }</li>`
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
      for (let i = 0; i < body.body.data.length; i++) {
        if (body.body.data[i].id === id) {
          $("#itemDetails").append(`<p><em>${body.body.data[i].name}</em></p>`);
          $("#itemDetails").append(`<p>${body.body.data[i].description}</p>`);
          $("#itemDetails").append(
            `<p>Amazing deal! Only $${body.body.data[i].cost}</p>`
          );
          $("#itemDetails").append(
            `<p>Quantity in stock:${body.body.data[i].stock}</p>`
          );
          $("#itemPhoto").append(
            `<img src=${
              body.body.data[i].imageUrl
            } alt='itemPhoto' id='actualFurnitureImage'>`
          );
          // $("#description".append(`${body.body.data[i].description}`));
          // for (let j = 0; j < body.body.data[i].colors.length; j++) {
          //   $("#colors".append(`${body.body.data[i].colors[j]}`));
          // }
          // $("#deliverable".append(`${body.body.data[i].deliverable}`));
        }
      }
    }

    $(".furnitureType").click(function(event) {
      event.preventDefault();
      $("#details").empty();
      let id = this.getAttribute("id");
      printItems(id);
    });

    // $(".furnitureItem").click(function(event) {
    //   event.preventDefault();
    //   console.log("item clicked");
    //   $("#itemDetails").empty();
    //   let id = this.getAttribute("id");
    //   printItemDetails(id);
    //   console.log("item clicked");
    // });
  });
});
