import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url= "http://localhost:3000/product";

  constructor(private http:HttpClient) { }

  getListing(){
    return this.http.get(this.url)
  }
  postData(data){
    console.log(data);
    return this.http.post(this.url,data)
  }
  deleteData(id){
    return this.http.delete(`${this.url}/${id}`)
  }
  getCurrentData(id){
    return this.http.get(`${this.url}/${id}`)
  }
  updateData(id,data){
    return this.http.put(`${this.url}/${id}`,data)
  }
}
