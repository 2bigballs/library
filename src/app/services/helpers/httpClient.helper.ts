import {IBookForm} from "../../models/bookForm";
import {T} from "@angular/cdk/keycodes";

export const convertObjectToFromData=<T>(object: T,formData:FormData)=>{
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      formData.append(key, object[key as keyof T] as string);
    }
  }
  return formData;
}
