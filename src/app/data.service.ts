import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  //private values:string[]=['Nikhitha','Ayesha','Deepthi','Lahari','Teja'];

  private validCredentials=[
    {Username:'FirstUser',Password:'pwOne'},
    {Username:'SecondUser',Password:'pwTwo'},
    {Username:'ThirdUser',Password:'pwThree'},
  ];
  /*getValues():string[]{
    return this.values;
  }
  addValue(value:string):void{
    this.values.push(value);
  }*/

  authenticate(username:string,password:string):boolean{
    const validUser=this.validCredentials.find(
      (cred)=>cred.Username===username && cred.Password===password
    );
    return !!validUser;
  }
}
