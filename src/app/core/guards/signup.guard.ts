import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SignupComponent } from 'src/app/auth/signup/signup.component'

@Injectable({
  providedIn: 'root'
})
export class SignUpGuard implements CanDeactivate<SignupComponent> {

  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isDirty = component.signupForm.dirty || component.signupForm.submitted;
      if(isDirty) {
        return confirm('Bạn có chăc muốn rời khỏi không')
      }
    return true;
  }
  
}
