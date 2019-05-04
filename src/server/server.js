const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors(
    {
        origin:"http://localhost:4200"
    }
));

app.get("/products", (request,response) =>
{
    response.send([
        {
          OrderNumber:1234,
          ProductName:"SkateBoard",
          Manufacturer:"ING",
          Distributer:"Jame and Brothers",
          Price:15,
          Rating:3.2,
          image:"https://www.decathlon.co.uk/media/837/8370591/big_1134058.jpg"
            
          },
      
          {
            OrderNumber:2345,
            ProductName:"Basketball",
            Manufacturer:"Spalding",
            Distributer:"Jame and Brothers",
            Price:8.87,
            Rating:4.1,
            image:"https://2.imimg.com/data2/UN/LH/MY-5319501/slam-dunk-outdoor-250x250.jpg"
          },
      
            {
              OrderNumber:3456,
              ProductName:"TenniesRackets",
              Manufacturer:"Willson",
              Distributer:"Cole Sports Distributer",
              Price:8.87,
              Rating:4.7,
              image:"https://images-na.ssl-images-amazon.com/images/I/51m1AB3slgL.jpg"
              },
      ]);
}
);

app.listen(3000, () =>
{
    console.log("Server running @ localhost:3000");
}
);
