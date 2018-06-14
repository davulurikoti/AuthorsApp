import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name : 'CovertDashToSpace'
})
export class CovertDashToSpaces implements PipeTransform{
    transform(value :string, character :string){
        return value.replace('-',' ');
    }
}