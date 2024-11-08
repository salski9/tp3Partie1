import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  likeProduct() {
    
    // Save the like action to localStorage
    localStorage.setItem("liked", "true");

    // Show a simple pop-up notification
    alert("Merci d'avoir aimé nos produits!");

    // Optionally, update the page content without showing the pop-up again on reload
  }

  ngOnInit() {
    const liked = localStorage.getItem('liked');
    if (liked === 'true') {
      // If already liked, show the message
      document.getElementById('favorite')!.innerHTML = "Merci d'avoir aimé nos produits!";
    }
  }
  
}

