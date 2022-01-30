import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-report-generation',
  templateUrl: './report-generation.component.html',
  styleUrls: ['./report-generation.component.css']
})
export class ReportGenerationComponent implements OnInit {

  data: Array<any> = [
    {
      Name: 'Aleem', EnrollmentNumber: '13456', Department: 'MCA', EmailId: 'abc@gmail.com', section: '1', year: '2019'
    },
    {
      Name: 'Vishal', En_No: '134456', Department: 'MCA', email_id: 'abc@gmail.com', section: '1', year: '2019'
    },
    {
      Name: 'Nidal', En_No: '141456', Department: 'MCA', email_id: 'abc@gmail.com', section: '1', year: '2019'
    },
    {
      Name: 'Neha', En_No: '111456', Department: 'MCA', email_id: 'abc@gmail.com', section: '1', year: '2019'
    },
    {
      Name: 'Shreya', En_No: '114456', Department: 'MCA', email_id: 'abc@gmail.com', section: '1', year: '2019'
    },
    {
      Name: 'Kuldeep', En_No: '14410456', Department: 'MCA', email_id: 'abc@gmail.com', section: '1', year: '2019'
    },
    {
      Name: 'Kapil Singh Verma', En_No: '1444156', Department: 'MCA', email_id: 'abc@gmail.com', section: '1', year: '2019'
    },
    {
      Name: 'Satyam', En_No: '1452456', Department: 'MCA', email_id: 'abc@gmail.com', section: '1', year: '2019'
    },
    {
      Name: 'Rohit', En_No: '125456', Department: 'MCA', email_id: 'abc@gmail.com', section: '1', year: '2019'
    },
    {
      Name: 'Saquib', En_No: '251456', Department: 'MCA', email_id: 'abc@gmail.com', section: '1', year: '2019'
    },
    {
      Name: 'Aquib', En_No: '1456225', Department: 'MCA', email_id: 'abc@gmail.com', section: '1', year: '2019'
    },
    {
      Name: 'Sajjad', En_No: '221456', Department: 'MCA', email_id: 'abc@gmail.com', section: '1', year: '2019'
    },
    {
      Name: 'Rehan', En_No: '741456', Department: 'MCA', email_id: 'abc@gmail.com', section: '1', year: '2019'
    },
    {
      Name: 'Uzma', En_No: '211456', Department: 'MCA', email_id: 'abc@gmail.com', section: '1', year: '2019'
    },
    {
      Name: 'Talib', En_No: '111456', Department: 'MCA', email_id: 'abc@gmail.com', section: '1', year: '2019'
    },
    {
      Name: 'Abia', En_No: '147456', Department: 'MCA', email_id: 'abc@gmail.com', section: '1', year: '2019'
    },
    {
      Name: 'Fahad', En_No: '135456', Department: 'MCA', email_id: 'abc@gmail.com', section: '1', year: '2019'
    },
    {
      Name: 'Robin', En_No: '144556', Department: 'MCA', email_id: 'abc@gmail.com', section: '1', year: '2019'
    },
    {
      Name: 'Vikas', En_No: '112456', Department: 'MCA', email_id: 'abc@gmail.com', section: '1', year: '2019'
    },
    {
      Name: 'Rahul', En_No: '121456', Department: 'MCA', email_id: 'abc@gmail.com', section: '1', year: '2019'
    },
    {
      Name: 'Ram', En_No: '121456', Department: 'MCA', email_id: 'abc@gmail.com', section: '1', year: '2019'
    }
  ];
  list = ['Apple', 'banana', 'grapes'];
  startIndex = 0;
  endIndex = 10;
  checkData: Array<string> = [];
  check = true;
  emails = [{ email: 'email1' }, { email: 'email2' }, { email: 'email3' }, { email: 'email4' }];
  myForm: FormGroup;
  tableDataShow = false;
  constructor(private fb: FormBuilder) {

  }
  ngOnInit() {

    this.myForm = this.fb.group({
      useremail: this.fb.array([])
    });
  }

  updateIndex(index) {
    this.startIndex = index * 10;
    this.endIndex = this.startIndex + 10;
  }
  updateFirstAndLastIndex() {
    this.startIndex = 0;
    this.endIndex = 5;
  }
  updateLastIndex() {
    this.startIndex = this.data.length - 10;
    this.endIndex = this.data.length;
  }
  checkBoxData(checkBox) {

    if (this.checkData.length < 3) {
      this.checkData.push(checkBox.Name);
      console.log(this.checkData);

      if (this.checkData.length === 3) {
        //     this.check = false;
      }
    } else {
    }
  }

  onChange(email: string, isChecked: boolean) {
    const emailFormArray = this.myForm.controls.useremail as FormArray;

    if (isChecked) {
      emailFormArray.push(new FormControl(email));
      console.log(emailFormArray);


    } else {
      const index = emailFormArray.controls.findIndex(x => x.value === email);
      emailFormArray.removeAt(index);
    }
  }

  goToData() {
    this.tableDataShow = true;
  }

}
