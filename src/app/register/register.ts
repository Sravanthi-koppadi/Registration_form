import { Component } from '@angular/core';
import { Products } from '../products';
import { Router } from '@angular/router';
import { AppUser } from '../interfaces/User'; // Update this import
import { NgIf } from '@angular/common';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  users: AppUser[] = [];
  
    constructor(
    private product: Products, 
    private router: Router // 2. Inject Router
  ) {}
  
    ngOnInit() {
  // Update the type inside the subscribe as well
  this.product.getUsers().subscribe((data: AppUser[]) => {
    this.users = data;
  });
}
  
    // Helper function to get users from API
    
  
// Inside your export class Register { ... }

// 1. Ensure the control is in the FormGroup
profileForm = new FormGroup({
  firstName: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, Validators.minLength(2)] }),
    lastName: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    password: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, Validators.minLength(6)] }),
    phone: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, Validators.pattern('^[0-9]{10}$')] }),
    dob: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    gender: new FormControl<AppUser['gender']>('', { nonNullable: true, validators: [Validators.required] }),
    qualification: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    address: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    city: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    state: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    country: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    zipCode: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    aboutMe: new FormControl<string>(''),
    course: new FormControl<string>('')
    });
    get firstName() { return this.profileForm.controls.firstName; }
  get lastName() { return this.profileForm.controls.lastName; }
  get email() { return this.profileForm.controls.email; }
  get password() { return this.profileForm.controls.password; }
  get phone() { return this.profileForm.controls.phone; }
  get dob() { return this.profileForm.controls.dob; }
  get gender() { return this.profileForm.controls.gender; }
  get qualification() { return this.profileForm.controls.qualification; }
  get address() { return this.profileForm.controls.address; }
  get city() { return this.profileForm.controls.city; }
  get state() { return this.profileForm.controls.state; }
  get country() { return this.profileForm.controls.country; }
  get zipCode() { return this.profileForm.controls.zipCode; }
  get aboutMe() { return this.profileForm.controls.aboutMe; }
  get course() { return this.profileForm.controls.course; }

  
  submitdata(user: any) { 
    if (this.profileForm.valid) {
      this.product.saveUsers(user).subscribe({
        next: (response) => {
          console.log("Success!", response);
          // This command tells Angular to hide the form and show the Success page
          this.router.navigate(['/success']); 
        },
        error: (err) => {
          alert("Submission failed. Contact your mentor.");
        }
      });
    }
  }
}
