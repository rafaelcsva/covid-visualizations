import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmailService} from './email.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'covid visualizations';
  isLinear = true;
  firstFormGroup: FormGroup = new FormGroup({});
  secondFormGroup: FormGroup = new FormGroup({});
  thirdFormGroup: FormGroup = new FormGroup({});
  fourthFormGroup: FormGroup = new FormGroup({});
  fifthFormGroup: FormGroup = new FormGroup({});
  load = false;

  constructor(private formBuilder: FormBuilder, private emailService: EmailService) {}

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this.formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this.formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this.formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
  }

  getAllAnswer(): string{
    return `1) ${this.firstFormGroup.value.firstCtrl}<br>2) ${this.secondFormGroup.value.secondCtrl}<br>3) ${this.thirdFormGroup.value.thirdCtrl}<br>4) ${this.fourthFormGroup.value.fourthCtrl}<br>5) ${this.fifthFormGroup.value.fifthCtrl}`;
  }

  sendAnswers(): void {
    if (this.load) { return; }

    this.load = true;
    this.emailService.sendEmail(this.getAllAnswer()).subscribe(
      (data) => {

      }, (error) => {

      }, () => {
        this.load = false;
      }
    );
  }
}
