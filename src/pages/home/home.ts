import { Component , OnInit , ViewChild, Input, EventEmitter, Output} from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private usersService: UserProvider
  ) {  }

  public users: any = [];

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    
    //let usersObservable: Observable<[any]>;
    
        let usersObservable = this.usersService.getUser();
    
        usersObservable.subscribe(
          data => {
            this.users = data;
            //console.log(this.users);
          },
          err => {
            
            this.users = [];
          }
        )
      }
}
