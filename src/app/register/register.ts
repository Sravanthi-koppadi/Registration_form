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
  firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
    dob: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    qualification: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [Validators.required]) // Make sure this is here!
});

// 2. Add these Getters (This is what fixes the error)
get firstName() { return this.profileForm.get('firstName'); }
  get lastName() { return this.profileForm.get('lastName'); }
  get email() { return this.profileForm.get('email'); }
  get password() { return this.profileForm.get('password'); }
  get phone() { return this.profileForm.get('phone'); }
  get dob() { return this.profileForm.get('dob'); }
  get gender() { return this.profileForm.get('gender'); }
  get qualification() { return this.profileForm.get('qualification'); }
  get address() { return this.profileForm.get('address'); }
  get city() { return this.profileForm.get('city'); }
  get state() { return this.profileForm.get('state'); }
  get country() { return this.profileForm.get('country'); }
  get zipCode() { return this.profileForm.get('zipCode'); }
   // Change 'user: User' to 'user: any' to satisfy the HTML compiler
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
