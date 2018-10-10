import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-uploader',
  templateUrl: './fileuploader.component.html',
  styleUrls: ['./fileuploader.component.css']
})
export class FileuploaderComponent {

  constructor(private http: Http) { }

  ngOnInit() {
  }

  uploadFile(event) {
    let elem = event.target;
    if(elem.files.length > 0){
      console.log(elem.files[0]);
      let formData = new FormData();
      formData.append('file', elem.files[0]);

      this.http.post('http://localhost/angular-php/script.php', formData)
      .subscribe((data) => {
        console.log('Got some data from backend', data);
      }, (error) => {
        console.log('Error!', error);
      });

      }

    }
  }
