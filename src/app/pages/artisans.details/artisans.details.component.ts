import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import artisansData from '../../../assets/datas.json';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-artisans-details',
  standalone: true,
  imports: [CommonModule, RouterLink,FormsModule],
  templateUrl: './artisans.details.component.html',
  styleUrls: ['./artisans.details.component.scss']
})
export class ArtisansDetailsComponent implements OnInit {
  artisanId: string | null = null;
  artisan: any;

  constructor(private route: ActivatedRoute, private http : HttpClient ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.artisanId = params.get('id');
      this.artisan = artisansData.find(a => a.id === this.artisanId);
    });
  }
  messageEnvoye: string = '';
  messageClass: string = '';
  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
    
  };

  

  onSubmit(form: NgForm) {
    const email = form.value.email; 

  // Vérification simple si l'email contient un "."
  if (!email.includes('.')) {
    this.messageEnvoye = '❌ L\'adresse email semble invalide. Assurez-vous de l\'écrire correctement.';
    return;
  }



    if (form.valid) {
      this.http.post('http://localhost:3000/send-email', this.formData).subscribe({
        next: () => {
          this.messageEnvoye = '✅ Email envoyé avec succès !';
          this.messageClass = 'alert-success';  // Bootstrap success
          form.resetForm();
        },
        error: () => {
          this.messageEnvoye = '❌ Erreur lors de l’envoi.';
          this.messageClass = 'alert-danger';  // Bootstrap danger
        },
      });
    } else {
      this.messageEnvoye = '⚠️ Tous les champs doivent être remplis.';
      this.messageClass = 'alert-warning';  // Bootstrap warning
    }
  }
}
  



