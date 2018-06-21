import { Injectable } from "@angular/core";
import { IAuthor } from "./author";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthorService{
    private _authorsUrl = './assets/authors-list.json';
    constructor(private _http :HttpClient){

    }
    getAuthors(): Observable<IAuthor[]>{
        return this._http.get<IAuthor[]>(this._authorsUrl)
        .do(data => console.log('All'+JSON.stringify(data)))
        .catch(this.handleError);
    }

    handleError(err: HttpErrorResponse): any {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}