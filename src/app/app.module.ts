import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PagesModule } from './pages/pages.module';
import { LayoutDashboardComponent } from './layouts/layout-dashboard/layout-dashboard.component';
import { HeaderComponent } from './layouts/layout-dashboard/header/header.component';
import { FooterComponent } from './layouts/layout-dashboard/footer/footer.component';
import { SidebarComponent } from './layouts/layout-dashboard/sidebar/sidebar.component';
import { AddUserComponent } from './pages/user/add-user/add-user.component';
import { CustomCommonModule } from './custom-common/custom-common.module';
import { CustomServiceService } from './custom-service.service';
import { HttpClientModule } from '@angular/common/http';
import { DragDropComponent } from './drag-drop/drag-drop.component';
// import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { UserPipe } from './custom-pipe/pipe/user.pipe';
import { ApiCallComponent } from './api-call/api-call.component';
import { HostlistenerComponent } from './hostlistener/hostlistener.component';
import { AComponent } from './subject-behaviour/a/a.component';
import { BComponent } from './subject-behaviour/b/b.component';
import { CComponent } from './subject-behaviour/c/c.component';
import { SubjectComponent } from './subject-behaviour/subject/subject.component';
import { CustomDndComponent } from './custom-dnd/custom-dnd.component';
import { UploadComponent } from './custom-dnd/file/upload/upload.component';
import {FileUploaderService} from './custom-dnd/file-uploader.service';
import { TemplateSwitchComponent } from './template-switch/template-switch.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { CustomStyleDirective } from './custom-directive/custom-style.directive';
import { DragDirective } from './custom-dnd/drag-drop.directive';
import { ObservableComponent } from './observable/observable.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { InputOutputComponent } from './input-output/input-output.component'
import { ParentComponent } from './input-output/parent/parent.component';
import { ChildComponent } from './input-output/parent/child/child.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { Comp1Component } from './viewchild/comp1/comp1.component';
import { RendererComponent } from './renderer/renderer.component';
import { ViewchildDirectiveComponent } from './viewchild-directive/viewchild-directive.component';
import { ViewchildDirective } from './viewchild-directive/directive/viewchild.directive';
import { PushSpliceComponent } from './push-splice/push-splice.component';
import { RedirectComponentComponent } from './push-splice/redirect-component/redirect-component.component';
import { TwowayDatabindingComponent } from './twoway-databinding/twoway-databinding.component';
import { CombineExampleComponent } from './combine-example/combine-example.component';
import { ChildEgComponent } from './combine-example/child-eg/child-eg.component';
import { JsonApiComponent } from './json-api/json-api.component';
import { AddProductComponent } from './json-api/add-product/add-product.component';
import { ProductListingComponent } from './json-api/product-listing/product-listing.component';
import { UpdateProductComponent } from './json-api/update-product/update-product.component';
import { BehaviourSubjectComponent } from './behaviour-subject/behaviour-subject.component';
import { Comp2Component } from './behaviour-subject/comp2/comp2.component';
import { Comp3Component } from './behaviour-subject/comp3/comp3.component';
import { Comp4Component } from './behaviour-subject/comp4/comp4.component';
import { Compo1Component } from './behaviour-subject/compo1/compo1.component';
import { FilterPipeComponent } from './filter-pipe/filter-pipe.component';
import { FilterPipe } from './filter-pipe/pipe/filter.pipe';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DirectiveInputWarningComponent } from './directive-input-warning/directive-input-warning.component';
import { InputWarningDirective } from './directive-input-warning/directive/input-warning.directive';
import { DirectivesComponent } from './directives/directives.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DragDropComponent,
    CustomPipeComponent,
    ApiCallComponent,
    HostlistenerComponent,
    AComponent,
    BComponent,
    CComponent,
    SubjectComponent,
    UserPipe,
    CustomDndComponent,
    UploadComponent,
    TemplateSwitchComponent,
    CustomDirectiveComponent,
    CustomStyleDirective,
    DragDirective,
    ObservableComponent,
    PageNotFoundComponent,
    ParentComponent,
    ChildComponent,
    InputOutputComponent,
    ViewchildComponent,
    Comp1Component,
    RendererComponent,
    ViewchildDirectiveComponent,
    ViewchildDirective,
    PushSpliceComponent,
    RedirectComponentComponent,
    TwowayDatabindingComponent,
    CombineExampleComponent,
    ChildEgComponent,
    JsonApiComponent,
    AddProductComponent,
    ProductListingComponent,
    UpdateProductComponent,
    BehaviourSubjectComponent,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    Compo1Component,
    FilterPipeComponent,
    FilterPipe,
    ReactiveFormComponent,
    TemplateFormComponent,
    CalculatorComponent,
    DirectiveInputWarningComponent,
    InputWarningDirective,
    DirectivesComponent,
    TodoComponent 
    // LayoutDashboardComponent,
    // HeaderComponent,FooterComponent,SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PagesModule,
    CustomCommonModule,
    HttpClientModule,
    // ClarityModule,
    BrowserAnimationsModule
  ],
  exports:[ReactiveFormsModule,
    FormsModule,DashboardComponent],
  providers: [CustomServiceService,FileUploaderService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
