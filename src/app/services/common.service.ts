import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  data: Array<any> = [
    {
      Name: 'Aleem', EnrollmentNumber: '13456', Department: 'MCA', email: 'abc@gmail.com', section: '1', year: '2019'
    },
    {
      Name: 'Vishal', EnrollmentNumber: '134456', Department: 'MCA', email: 'abc@gmail.com', section: '1', year: '2019'
    },
    {
      Name: 'Nidal', EnrollmentNumber: '141456', Department: 'MCA', email: 'abc@gmail.com', section: '1', year: '2019'
    },
    {
      Name: 'Neha', EnrollmentNumber: '111456', Department: 'MCA', email: 'abc@gmail.com', section: '1', year: '2019'
    },
    {
      Name: 'Shreya', EnrollmentNumber: '114456', Department: 'MCA', email: 'abc@gmail.com', section: '1', year: '2019'
    },
    {
      Name: 'Kuldeep', EnrollmentNumber: '14410456', Department: 'MCA', email: 'abc@gmail.com', section: '1', year: '2019'
    },
    {
      Name: 'Kapil Singh Verma', EnrollmentNumber: '1444156', Department: 'MCA', email: 'abc@gmail.com', section: '1', year: '2019'
    },
    {
      Name: 'Satyam', EnrollmentNumber: '1452456', Department: 'MCA', email: 'abc@gmail.com', section: '1', year: '2019'
    },
    {
      Name: 'Rohit', EnrollmentNumber: '125456', Department: 'MCA', email: 'abc@gmail.com', section: '1', year: '2019'
    },
    {
      Name: 'Saquib', EnrollmentNumber: '251456', Department: 'MCA', email: 'abc@gmail.com', section: '1', year: '2019'
    },
    {
      Name: 'Aquib', EnrollmentNumber: '1456225', Department: 'MCA', email: 'abc@gmail.com', section: '1', year: '2019'
    },
    {
      Name: 'Sajjad', EnrollmentNumber: '221456', Department: 'MCA', email: 'abc@gmail.com', section: '1', year: '2019'
    },
    {
      Name: 'Rehan', EnrollmentNumber: '741456', Department: 'MCA', email: 'abc@gmail.com', section: '1', year: '2019'
    },
    {
      Name: 'Uzma', EnrollmentNumber: '211456', Department: 'MCA', email: 'abc@gmail.com', section: '1', year: '2019'
    },
    {
      Name: 'Talib', EnrollmentNumber: '111456', Department: 'MCA', email: 'abc@gmail.com', section: '1', year: '2019'
    },
    {
      Name: 'Abia', EnrollmentNumber: '147456', Department: 'MCA', email: 'abc@gmail.com', section: '1', year: '2019'
    },
    {
      Name: 'Fahad', EnrollmentNumber: '135456', Department: 'MCA', email: 'abc@gmail.com', section: '1', year: '2019'
    },
    {
      Name: 'Robin', EnrollmentNumber: '144556', Department: 'MCA', email: 'abc@gmail.com', section: '1', year: '2019'
    },
    {
      Name: 'Vikas', EnrollmentNumber: '112456', Department: 'MCA', email: 'abc@gmail.com', section: '1', year: '2019'
    },
    {
      Name: 'Rahul', EnrollmentNumber: '121456', Department: 'MCA', email: 'abc@gmail.com', section: '1', year: '2019'
    },
    {
      Name: 'Ram', EnrollmentNumber: '121456', Department: 'MCA', email: 'abc@gmail.com', section: '1', year: '2019'
    }
  ];

  table = {
    data: [
      {
        Name: 'Aleem', En_No: '13456', Department: 'MCA', email_id: 'abc@gmail.com', section: '1', year: '2019'
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
    ]
  };
  checkBoxData: Array<any> = [
    {
      Name: 'Aleem'
    },
    {
      Name: 'Vishal'
    },
    {
      Name: 'Nidal'
    },
    {
      Name: 'Neha'
    }
  ];
  constructor() { }

}
