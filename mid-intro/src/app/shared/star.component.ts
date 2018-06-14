import { OnChanges, Component, Input } from "@angular/core";
@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges{
    starWidth :number;
    @Input() rating :number;
    
    ngOnChanges(){
        console.log(this.rating);
        this.starWidth = this.rating * 86/5;
    }
}