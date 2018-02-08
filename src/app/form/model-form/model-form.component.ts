import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {

  myForm;

  constructor() { }

  ngOnInit() {
    console.log("Initilizing the model form compoenent");
    this.myForm = new FormGroup({
                  fName: new FormControl("", Validators.compose(
                                                                        [
                                                                          Validators.required, 
                                                                          Validators.minLength(4),
                                                                          Validators.pattern('^[a-zA-Z]+$')
                                                                        ]
                                                                      )),
                  lName: new FormControl("Daga", this.lastNameValidator ),
                  hobby: new FormControl("Driving")
    });

  }

  lastNameValidator(control){
    if (control.value.length < 3){
      return {'lName':true};
    }
  }

  doSubmission = function(user){
    console.log(user);
  }

}
