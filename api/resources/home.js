const homePage = (req, res, next) => {
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
        </style>
      </head>
      <body>`
  );
  res.write(`<div class='header'><span>Home Page</span></div>`);
  res.write(
    `<div class='time'>
        <b>
        Current Time:` +
      res?.locals?.time +
      `</b>
  
        </div>`
  );
  res.write(
    `<div class='link-container'>       
        <div class='link'><a href="/">Click Here to See Employee List</a></div>
        <div class='link'><a href="/">Click Here to Rigister Employee </a></div>
        </div>`
  );

  res.write(`</body></html>`);
  res.end();
};

module.exports = { homePage };
