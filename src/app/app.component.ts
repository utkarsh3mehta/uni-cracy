import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  policyForm!: FormGroup;
  // faInfoCircle = faInfoCircle;

  ngOnInit(): void {
    this.policyForm = new FormGroup({
      name: new FormControl(''),
      gender: new FormControl('f'),
      dob: new FormControl('', [Validators.required]),
      tags: new FormControl('', [Validators.required]),
      policy: new FormControl('', [Validators.required]),
    });
  }

  get name() {
    return this.policyForm.get('name');
  }
  get gender() {
    return this.policyForm.get('gender');
  }
  get dob() {
    return this.policyForm.get('dob');
  }
  get tags() {
    return this.policyForm.get('tags');
  }
  get policy() {
    return this.policyForm.get('policy');
  }

  onSubmit() {
    console.warn(this.policyForm.value);
  }
}
