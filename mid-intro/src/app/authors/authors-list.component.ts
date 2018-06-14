import { Component } from "@angular/core";
import { IAuthor } from "./author";

@Component({
    selector:'pm-authors',
    templateUrl:'./authors-list.component.html',
    styleUrls:['./authors-list.component.css']
})
export class AuthorsListComponent{
    title :string = "Author";
    width :number = 100;
    height :number = 100;
    buttonValue :string = "Nothing clicked yet :)";
    authors :IAuthor[]=[{
        "name":"Koti Rama Murthy",
        "id":"AU-001",
        "imageURL":'https://openclipart.org/download/132289/George-Washington-Carver.svg',
        "department":"Computers",
        "starRating":4.5
    },
    {
        "name":"Sai Sudha",
        "id":"AU-002",
        "imageURL":'https://openclipart.org/download/276090/Chromatic-Triangular-Steve-Jobs.svg',
        "department":"Electricals",
        "starRating":4.6
    },
    {
        "name":"Manohar Damodara",
        "id":"AU-003",
        "imageURL":'https://openclipart.org/download/190757/G-W-Carver.svg',
        "department":"Mechanical",
        "starRating":4.4
    },
    {
        "name":"Allu Arjun",
        "id":"AU-004",
        "imageURL":'https://openclipart.org/download/25015/Anonymous-Einstein.svg',
        "department":"Entertainment",
        "starRating":4.0
    }];
    getDetails(event :any) :void{
        this.buttonValue = "Getting details of "+event.target.value;
    }
}