import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Email} from '../models/email.model';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{


  Email = new Email(); 
  submitted = false;
  private emailurl ='http://localhost:8081/api/sendmail';

  //constructor(private router:Router,private emailservice:EmailService) {}

    constructor(private http:HttpClient){}
   

   ngOnInit() {
  }
 
  
  //onSubmit() {
    ////this.submitted = true;
    //return this.emailservice.sendmail(this.Email)
    //.subscribe(data =>this.Email=data)
      //alert("Mail Sent Successfully.");
    //});
  //};

  sendmail(): void {
    this.submitted = true;
    //this.emailservice.sendmail(this.Email).
    this.http.post(this.emailurl,this.Email).
    subscribe(
     res=>{
       location.reload(true);},
       //alert("Message sent Successfully.");,
     err =>{alert("Message sent Successfully.");}
     );

  }

  gotoContact(){
    //this.router.navigate(['/']);
  }

}
