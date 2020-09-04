import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username='fer';
  password='';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  //Dependency injection
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin() {
    console.log(this.username);
    if(this.username === 'fer' && this.password === 'pass'){
      this.invalidLogin = false;
      this.router.navigate(['welcome'])
    } else {
      this.invalidLogin = true;
    }
  }

}
