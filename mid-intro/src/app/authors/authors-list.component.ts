import { Component, OnInit } from "@angular/core";
import { IAuthor } from "./author";
import { AuthorService } from "./author.service";

@Component({
    selector:'pm-authors',
    templateUrl:'./authors-list.component.html',
    styleUrls:['./authors-list.component.css']
})
export class AuthorsListComponent implements OnInit{
    title :string = "Author";
    width :number = 100;
    height :number = 100;
    errorMessage :string;
    constructor(private _authorService :AuthorService){

    }
    authors :IAuthor[];
    ngOnInit() :void{
        console.log("Author service called");
        this._authorService.getAuthors().subscribe( authors => this.authors = authors,
                                                    error => this.errorMessage = <any>error );
    }
}