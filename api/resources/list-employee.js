const path = require("path");

const listEmployee = async (req, res, next) => {
  var json_data = await require(path.join(
    __dirname,
    "sample-data",
    "employee.json"
  ));

  res.write(
    `<html>
      <head>
      <title>First Node App</title>
      <style>
      .header{
          color:green;
          padding: 13px;
          font-size: 21px;
          font-weight: bold;
          background-color: lightgray;
        }
        body{
            margin:0px;
        }
        a{
           font-size: 18px;
        }
        .link{
            padding:13px
        }
        .time{
            text-align: center;
            margin-top: 40px;
            font-size: 21px;
            color: blue;
        }
        .link-container{
          border: 3px solid #f1f1f1;
          text-align: center;
          margin: 22px;
        }
        .card {
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            transition: 0.3s;
            width: 40%;
          }
          
          .card:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
          }
          
          .container {
            padding: 2px 16px;
          }
        </style>
      </head>
      <body>`
  );
  res.write(`<div class='header'><span>Employee List</span></div>`);
  res.write(
    `<div class='time'>
        <b>
        Current Time:` +
      res?.locals?.time +
      `</b>
  
        </div>`
  );
  if (json_data) {
    let cardHtml = ``;
    for (let i = 0; i < json_data.length; i++) {
        console.log(json_data[i].name)

        cardHtml = cardHtml +
        `<div class="card">    
         <div class="container">
        <h4><b>` +
        json_data[i].name +
        `</b></h4> 
         <p>` +
         json_data[i].designation +
        `</p> 
        </div>
        </div>`;
    }
    res.write(
      `<div class='link-container'>       
       ` +
        cardHtml +
        `
          </div>`
    );
  }

  res.write(`</body></html>`);
  res.end();
};

module.exports = { listEmployee };
