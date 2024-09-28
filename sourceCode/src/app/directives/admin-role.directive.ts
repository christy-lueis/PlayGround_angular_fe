import { Directive, effect, input,  TemplateRef, ViewContainerRef } from '@angular/core';
type Roles ='admin'|'agent'|'customer';
@Directive({
  selector: '[appAdminRole]',
  standalone: true
})



export class AdminRoleDirective {


  role=input.required<Roles>({alias:'appAdminRole'});
  constructor(private template:TemplateRef<string>,private viewcontainer:ViewContainerRef) { 
   
    effect(()=>{
      console.log('role',this.role());
      if(this.role()=='admin')
        {
      console.log('true',this.role());

          this.viewcontainer.createEmbeddedView(template)
    
        }
        else{
      console.log('false',this.role());

          this.viewcontainer.clear();
    
        }
    })
   

  }




}
