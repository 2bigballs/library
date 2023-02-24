import {IBookForm} from "../../models/bookForm";
import {T} from "@angular/cdk/keycodes";
import {HttpErrorResponse} from "@angular/common/http";

export const convertObjectToFromData=<T>(object: T,formData:FormData)=>{
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      formData.append(key, object[key as keyof T] as string);
    }
  }
  return formData;
}

export const convertHttpErrorResponse=(errorResponse:HttpErrorResponse)=>{
  const errorMessage=errorResponse.error.join('\n');
  return errorMessage;
}

