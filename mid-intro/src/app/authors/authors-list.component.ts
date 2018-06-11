import { Component } from "@angular/core";

@Component({
    selector:'pm-authors',
    templateUrl:'./authors-list.component.html',
    styleUrls:['./authors-list.component.css']
})
export class AuthorsListComponent{
    title :string = "Author";
    authors :any[]=[{
        "name":"Koti Rama Murthy",
        "id":"AU-001",
        "imageURL":'https://openclipart.org/download/132289/George-Washington-Carver.svg',
        "Department":"Computers",
        "StarRating":4.5,
    },
    {
        "name":"Sai Sudha",
        "id":"AU-002",
        "imageURL":'https://openclipart.org/download/276090/Chromatic-Triangular-Steve-Jobs.svg',
        "Department":"Electricals",
        "StarRating":4.6
    },
    {
        "name":"Manohar Damodara",
        "id":"AU-003",
        "imageURL":'https://openclipart.org/download/190757/G-W-Carver.svg',
        "Department":"Mechanical",
        "StarRating":4.4
    },
    {
        "name":"Allu Arjun",
        "id":"AU-004",
        "imageURL":'https://openclipart.org/download/25015/Anonymous-Einstein.svg',
        "Department":"Entertainment",
        "StarRating":4.0
    }];
}