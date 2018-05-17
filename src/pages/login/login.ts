import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../providers/auth.service';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component(
  {
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm : FormGroup;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private authService: AuthService, 
    //private profileService: ProfileService,
    private fb: FormBuilder, 
    //private router: Router,
    //private common: CommonFunctions
    ) {
  }

  ngOnInit(){
    
        this.loginForm = this.fb.group({
          'username' : [null, Validators.required],
          'password': [null, Validators.required]
        })
    
      }
    
      onSubmit(loginForm){
        let isAuthenticate = this.authService.login(loginForm.username, loginForm.password);
    
        isAuthenticate.subscribe(
          data=> {
            let login_response = data;
              
            if (login_response && login_response["access_token"]) {
                localStorage.setItem('token', JSON.stringify(login_response));
                alert("Login Realizado");
            }
          },
          err=> {
            //this.common.messageError(err);
          }
        )
      }
}
