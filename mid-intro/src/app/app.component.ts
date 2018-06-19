import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html'
})
export class AppComponent {
  loggedIn :boolean = false;
  name :string = '';
  error : string = '';
  brand :string = '#DKRM';
  getDetailsClicked :boolean = false;
  hideDetailsClicked :boolean = false;
  login(data) :void{
    if(data.user_name == data.password){
      this.loggedIn = true;
      this.name = data.user_name;
      this.error = '';
    }
    else{
      this.loggedIn = false;
      this.error = 'Please use same user name and password!';
      this.name = '';
    }
  }
  logout() :void{
    this.loggedIn = false;
    this.name = '';
  }
  getDetails() :void{
    this.getDetailsClicked = true;
    this.hideDetailsClicked = false;
  }
  hideDetails() :void{
    this.hideDetailsClicked = true;
    this.getDetailsClicked = false;
  }
}
