import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ApiCallComponent } from './api-call/api-call.component';
import { BehaviourSubjectComponent } from './behaviour-subject/behaviour-subject.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CombineExampleComponent } from './combine-example/combine-example.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { CustomDndComponent } from './custom-dnd/custom-dnd.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { DirectiveInputWarningComponent } from './directive-input-warning/directive-input-warning.component';
import { InputWarningDirective } from './directive-input-warning/directive/input-warning.directive';
import { DirectivesComponent } from './directives/directives.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { FilterPipeComponent } from './filter-pipe/filter-pipe.component';
import { HostlistenerComponent } from './hostlistener/hostlistener.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { AddProductComponent } from './json-api/add-product/add-product.component';
import { JsonApiComponent } from './json-api/json-api.component';
import { ProductListingComponent } from './json-api/product-listing/product-listing.component';
import { UpdateProductComponent } from './json-api/update-product/update-product.component';
import { ObservableComponent } from './observable/observable.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PushSpliceComponent } from './push-splice/push-splice.component';
import { RedirectComponentComponent } from './push-splice/redirect-component/redirect-component.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RendererComponent } from './renderer/renderer.component';
import { SubjectComponent } from './subject-behaviour/subject/subject.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { TemplateSwitchComponent } from './template-switch/template-switch.component';
import { TwowayDatabindingComponent } from './twoway-databinding/twoway-databinding.component';
import { ViewchildDirectiveComponent } from './viewchild-directive/viewchild-directive.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import {TodoComponent} from './todo/todo.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'drag-drop',
    component: DragDropComponent
  },
  {
    path: 'custom-pipe',
    component: CustomPipeComponent
  },
  {
    path:'api-call',
    component: ApiCallComponent
  },
  {
    path:'hostlistener',
    component: HostlistenerComponent
  },
  {
    path: 'subject',
    component: SubjectComponent
  },
  {
    path: 'custom-dnd',
    component: CustomDndComponent
  },
  {
    path: 'template-switch',
    component: TemplateSwitchComponent
  },
  {
    path: 'custom-directive',
    component: CustomDirectiveComponent
  },
  {
    path: 'observable',
    component: ObservableComponent
  },
  {
    path: 'input-output',
    component: InputOutputComponent
  },
  {
    path: 'view-child',
    component: ViewchildComponent
  },
  {
    path: 'renderer',
    component: RendererComponent
  },
  {
    path: 'viewchild-directive',
    component: ViewchildDirectiveComponent
  },
  {
    path: 'push-splice',
    component: PushSpliceComponent
  },
  {
    path: 'redirect-component',
    component: RedirectComponentComponent
  },
  {
    path: 'twoway-data',
    component: TwowayDatabindingComponent
  },
  {
    path: 'combine-example',
    component: CombineExampleComponent
  },
  {
    path: 'json-api',
    component: JsonApiComponent
  },
  {
    path: 'add-product',
    component: AddProductComponent
  },
  {
    path: 'product-listing',
    component: ProductListingComponent
  },
  {
    path: 'edit-product/:id',
    component: UpdateProductComponent
  },
  {
    path: 'behaviour-subject',
    component: BehaviourSubjectComponent
  },
  {
    path: 'filter-pipe',
    component: FilterPipeComponent
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent
  },
  {
    path: 'template-form',
    component: TemplateFormComponent
  },
  {
    path: 'calculator',
    component: CalculatorComponent
  },
  {
    path: 'directive-warning',
    component: DirectiveInputWarningComponent
  },
  {
    path: 'directives',
    component: DirectivesComponent
  },
  {
    path: 'todolist',
    component: TodoComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
