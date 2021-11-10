import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  redirectSubject(){
    this.router.navigate(['/subject']);
  }

  redirectHostlistener(){
    this.router.navigate(['/hostlistener'])
  }

  redirectCustomPipe(){
    this.router.navigate(['/custom-pipe'])
  }

  redirectDragDrop(){
    this.router.navigate(['/drag-drop'])
  }

  redirectApiCall(){
    this.router.navigate(['/api-call'])
  }

  redirectCustomDnD(){
    this.router.navigate(['/custom-dnd'])
  }

  redirectTempSwit(){
    this.router.navigate(['/template-switch'])
  }

  redirectCustomDire(){
    this.router.navigate(['/custom-directive'])
  }

  redirectObservable(){
    this.router.navigate(['/observable'])
  }

  redirectInOut(){
    this.router.navigate(['/input-output'])
  }

  redirectUserAdd(){
    this.router.navigate(['/user/add'])
  }

  redirectUserEdit(){
    this.router.navigate(['/user/update'])
  }

  redirectUserListing(){
    this.router.navigate(['/user/listing'])
  }

  redirectviewChild(){
    this.router.navigate(['/view-child'])
  }

  redirectRenderer(){
    this.router.navigate(['/renderer'])
  }

  redirectviewDire(){
    this.router.navigate(['/viewchild-directive'])
  }

  redirectPushSplice(){
    this.router.navigate(['/push-splice'])
  }

  redirectTwoData(){
    this.router.navigate(['/twoway-data'])
  }

  redirectCombineEg(){
    this.router.navigate(['/combine-example'])
  }

  redirectAddProduct(){
    this.router.navigate(['/add-product'])
  }

  redirectBehaviourSubject(){
    this.router.navigate(['/behaviour-subject'])
  }

  redirectFilterPipe(){
    this.router.navigate(['/filter-pipe'])
  }

  redirectReactiveForm(){
    this.router.navigate(['/reactive-form'])
  }

  redirectTemplateForm(){
    this.router.navigate(['/template-form'])
  }

  redirectCalculator(){
    this.router.navigate(['/calculator'])
  }

  redirectDirectiveWarn(){
    this.router.navigate(['/directive-warning'])
  }

  redirectDirectives(){
    this.router.navigate(['/directives'])
  }
  
  redirectTodolist(){
    this.router.navigate(['/todolist'])
  }

  ngAfterViewInit() {
    $(".nav a").on("click", function() {
      $(".nav").find(".active").removeClass("active");
      $(this).parent().addClass("active");
    });

    // $(".nav-item").on("click", function() {
    //   alert("")
    // });
}

}
