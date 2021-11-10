import { Component, OnInit } from '@angular/core';
// import {ClrDragEvent} from '@clr/angular';
// import { DragAndDropModule } from 'angular-draggable-droppable';
interface File{
  name:string
}

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})


export class DragDropComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  image = [
    {'name':'','size':''}
  ]
  // files: File[] = [{name:'A'},{name:'B'},{name:'C'}]

  // droppedFiles: File[] = []

  // private moveItem(item: File, from: File[], to: File[]) {
  //   const indexInFiles = from.indexOf(item);
  //   if (indexInFiles > -1) {
  //     from.splice(indexInFiles, 1);
  //   }
  //   if (to.indexOf(item) === -1) {
  //     to.push(item);
  //   }
  // }

  // onDropToUpload(dragEvent: ClrDragEvent<File>){
  //   this.moveItem(dragEvent.dragDataTransfer, this.files, this.droppedFiles)
  // }

  // onDropBack(dragEvent: ClrDragEvent<File>){
  //   this.moveItem(dragEvent.dragDataTransfer, this.files, this.droppedFiles)
  // }





  // dragEnd(event) {
  //   console.log('Element was dragged', event);
  // }


  allowDrop(ev){
    ev.preventDefault();
  }

  drag(ev){
    ev.dataTransfer.setData("text", ev.target.id);
  }

  drop(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");

    ev.target.appendChild(document.getElementById(data));
  }
}
