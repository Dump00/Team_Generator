import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newMemberName = "";
  members: string[] = [];
  errorMessage = "";

  addMember(){
    if(!this.newMemberName){
      this.errorMessage = "Name can't be empty";
      return;
    }
    this.errorMessage = "";
    this.members.push(this.newMemberName);
    this.newMemberName = ""
  }

  onInput(member: string){
    this.newMemberName = member;
  }
}
