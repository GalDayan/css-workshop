import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dontClick() {
    alert("מספיק ללחוץ על כפתורים!");
    alert("כנס ל-VS Code ותתחיל לעבוד!");
    window.location.assign("https://www.thatsfarming.com/uploads/news/1200x800_8-208a347d63693d952b7c8a3b7338ac58/3408-alpaca-1191300-1280.jpg");
  }
}
