import { Component } from '@angular/core';

@Component({
  selector: 'app-uploader',
  templateUrl: './fileuploader.component.html',
  styleUrls: ['./fileuploader.component.css']
})
export class FileuploaderComponent {

  constructor() { }

  ngOnInit() {
  }

  uploadFile(event) {
    let elem = event.target;
    if(elem.files.length > 0){
      console.log(elem.files[0]);
      let formData = new FormData();
      formData.append('file', elem.files[0]);
    }
  }

}
