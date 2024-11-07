import { Component } from '@angular/core';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent {
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
