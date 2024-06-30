import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm!: FormGroup;
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private message: NzMessageService,
              private router: Router) { }

  ngOnInit(){
    this.registerForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, Validators.required],
      name: [null, Validators.required]
    })
  }
  submitForm(){
    this.authService.register(this.registerForm.value).subscribe(res=>{
      if(res.id !=null){
        this.message.success("signup successful", {nzDuration: 5000});
        this.router.navigateByUrl("/");
      }else{
        this.message.error(`${res.message}`, {nzDuration: 5000})
      }
    })
  }
  submitForm() {
    console.log('Form Submitted', this.registerForm.value); // Log the form submission
    this.authService.register(this.registerForm.value).subscribe(
      res => {
        console.log('Response:', res); // Log the response
        if (res.id != null) {
          this.message.success("Signup successful", {nzDuration: 5000});
          this.router.navigateByUrl("/");
        } else {
          this.message.error(`${res.message}`, {nzDuration: 5000});
        }
      },
      err => {
        console.error('Error:', err); // Log any error
        this.message.error('Signup failed', {nzDuration: 5000});
      }
    );
  }

}
