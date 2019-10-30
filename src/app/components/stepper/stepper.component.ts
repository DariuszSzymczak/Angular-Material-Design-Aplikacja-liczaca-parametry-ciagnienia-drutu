import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
  }

  firstFormGroup: FormGroup;
  progress = 0;


  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required],
      secondCtrl: ['', Validators.required],
      thirdCtrl: ['', Validators.required],
      fourthCtrl: ['', Validators.required]
    });
  }

  progresAdd() {
    this.progress += 25;
  }

  progressSub() {
    this.progress -= 25;
  }

  progressReset() {
    this.progress = 0;
  }


  showFrom() {
    console.log(this.sendFields());
  }

  public sendFields(): object {
    return {
      d0: this.firstFormGroup.get('firstCtrl').value,
      dk: this.firstFormGroup.get('secondCtrl').value,
      qimin: this.firstFormGroup.get('thirdCtrl').value,
      qimax: this.firstFormGroup.get('fourthCtrl').value,
    };
  }

}
