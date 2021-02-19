import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService} from 'src/app/core/services/auth.service';
import { SigninResult } from 'src/app/core/model/auth.model'

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  curentUser: SigninResult | null = null;
  currentUserSubscription?: Subscription;

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
    //Chuyển curentUser thành 1 Observable để có thể theo dõi sự thay đổi của biên nào
     this.currentUserSubscription = this.auth.currentUser.asObservable().subscribe({
      next: (result)  => {
        this.curentUser = result;
      }
    })
  }
  //Lifecucle 
  ngOnDestroy(): void {
  this.currentUserSubscription?.unsubscrible();
  }
}
