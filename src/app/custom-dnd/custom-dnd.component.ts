import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { FileQueueObject, FileUploaderService } from './file-uploader.service';
import { FileHandle } from './drag-drop.directive';


@Component({
  selector: 'app-custom-dnd',
  templateUrl: './custom-dnd.component.html',
  styleUrls: ['./custom-dnd.component.css']
})
export class CustomDndComponent implements OnInit {
  fileArray =[];
  dumFileArray = [];
  constructor(private dataShare:FileUploaderService) {
    this.dataShare.fileStoreData.subscribe((res)=>{
      if(res){
        //console.log(res);
        this.fileArray.push(res);
        this.dumFileArray.push(res);
      }
    })
   }

  ngOnInit(): void {
    
  }
  
  onCompleteItem($event) {
  console.log($event);
 } 

 files: FileHandle[] = [];

  filesDropped(files: FileHandle[]): void {
   let fileArray =[];
    if(this.dumFileArray.length >0){
      this.dumFileArray.forEach((el)=>{
        fileArray.push(...el);
      })
      this.dumFileArray = [];
      this.fileArray= [];
    }
    fileArray.push(...files);
    console.log(fileArray);
    
    this.dataShare.fileStoreData.next(fileArray);
    //this.files = files;
  }

  upload(): void {
    //get image upload file obj;
    //this.files.next(data);
  }

}
