export class Furniture {
  constructor(
    id,
    name,
    imageUrl,
    description,
    colors,
    type,
    deliverable,
    dimensions,
    cost,
    stock
  ) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.description = description;
    this.colors = colors;
    this.type = type;
    this.deliverable = deliverable;
    this.dimensions = dimensions;
    this.cost = cost;
    this.stock = stock;
  }

  //   buildFurnitureFromJson(body) {
  //     let furnitureArray = [];
  //     for (let i = 0; i < body.body.data.length; i++) {
  //       let id = i;
  //       let name = body.body.data[i].name;
  //       let imageUrl = body.body.data[i].imageUrl;
  //       let description = body.body.data[i].description;
  //       let colors = [];
  //       for (let j = 0; j < body.body.data[i].colors[j].length; j++) {
  //         colors.push(body.body.data[i].colors[j]);
  //       }
  //       let type = body.body.data[i].type;
  //       let deliverable = body.body.data[i].deliverable;
  //       let dimensions = [];
  //       dimensions.push(body.body.data[i].dimensions[0]);
  //       dimensions.push(body.body.data[i].dimensions[1]);
  //       let cost = body.body.data[i].cost;
  //       let stock = body.body.data[i].stock;
  //       let newItem = new Furniture(
  //         id,
  //         name,
  //         imageUrl,
  //         description,
  //         colors,
  //         type,
  //         deliverable,
  //         dimensions,
  //         cost,
  //         stock
  //       );
  //       furnitureArray.push(newItem);
  //     }
  //     return furnitureArray;
  //   }
}
