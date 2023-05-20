import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'showNaN', standalone: true})
export class ShowNanPipe implements PipeTransform{
    transform(value: string | null): string {
        if(value === null)
            return 'NaN'
        return value
    }
}