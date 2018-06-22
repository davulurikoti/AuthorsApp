var express = require('express');
var app = express();

app.listen(3005,()=>console.log("Listening to 3005 port"));

app.get('/authors',(req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify([       {
        "name":"Koti Rama Murthy",
        "id":"AU-001",
        "imageURL":"https://openclipart.org/download/132289/George-Washington-Carver.svg",
        "department":"Computers",
        "starRating":4.5
    },
    {
        "name":"Sai Sudha",
        "id":"AU-002",
        "imageURL":"https://openclipart.org/download/276090/Chromatic-Triangular-Steve-Jobs.svg",
        "department":"Electricals",
        "starRating":4.6
    },
    {
        "name":"Manohar Damodara",
        "id":"AU-003",
        "imageURL":"https://openclipart.org/download/190757/G-W-Carver.svg",
        "department":"Mechanical",
        "starRating":4.4
    },
    {
        "name":"Allu Arjun",
        "id":"AU-004",
        "imageURL":"https://openclipart.org/download/25015/Anonymous-Einstein.svg",
        "department":"Entertainment",
        "starRating":4.0
    },
    {
        "name":"Sai Sudha",
        "id":"AU-002",
        "imageURL":"https://openclipart.org/download/276090/Chromatic-Triangular-Steve-Jobs.svg",
        "department":"Electricals",
        "starRating":4.6
    },
    {
        "name":"Manohar Damodara",
        "id":"AU-003",
        "imageURL":"https://openclipart.org/download/190757/G-W-Carver.svg",
        "department":"Mechanical",
        "starRating":4.4
    },
    {
        "name":"Allu Arjun",
        "id":"AU-004",
        "imageURL":"https://openclipart.org/download/25015/Anonymous-Einstein.svg",
        "department":"Entertainment",
        "starRating":4.0
    }
], null, 3));
})