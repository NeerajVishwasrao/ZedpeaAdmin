import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { JsonPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MenuButtonsComponent } from '../../Reusable-view/menu-buttons/menu-buttons.component';
import { NgxImageCompressService } from 'ngx-image-compress';

@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, NgClass, MenuButtonsComponent, ReactiveFormsModule, JsonPipe,],
  templateUrl: './Add-Student.component.html',
  styleUrls: ['./Add-Student.component.css']
})

export class CreateStudentComponent {

  studentForm: FormGroup = new FormGroup({
    StudentName: new FormControl("", [Validators.required, Validators.pattern(/^[a-z A-Z]+$/)]),
    RollNumber: new FormControl("", [Validators.required]),
    SelectGrade: new FormControl("", [Validators.required]),
    Username: new FormControl("", [Validators.required, Validators.minLength(6)]),
    Password: new FormControl("", [Validators.required, Validators.minLength(6), Validators.pattern(/[!@#$%^&*]/)]),
    Picture: new FormControl("", [Validators.required])
  });



  img_validation_msg: string = '';
  isValidUpload: boolean = false
  event: any = ''
  compressedImage: string = ''
  NgxImageCompressService = inject(NgxImageCompressService)

 
  uploadValidPic(event: any) {
    if (event.target.files.length > 0) {
      const file: File = event.target.files[0];

      // Validate file type (only JPEG or PNG)
      if (file.type === 'image/jpeg' || file.type === 'image/png') {
        
        // Validate file size (less than 1MB)
        if (file.size < 1000000) {
          console.log('File size is less than 1 MB');
          console.log('Original File Size:', file.size, 'bytes');  // Log original file size

          const reader = new FileReader();

          reader.onload = (e: any) => {
            // Compress the file once it's loaded
            this.NgxImageCompressService.compressFile(e.target.result, -1, 50, 50).then((result: string) => {
              this.compressedImage = result; // Base64 compressed image
              console.log('Compressed Image (Base64):');  // Log compressed image in Base64 format

              // Calculate the size of the compressed image
              const compressedSize = this.calculateImageSize(this.compressedImage);
              console.log('Compressed Image Size:', compressedSize, 'bytes');  // Log compressed image size

              // Convert the compressed base64 string to a File object
              const imageBlob = this.base64ToBlob(this.compressedImage.split(',')[1], file.type);
              const compressedFile = new File([imageBlob], file.name, { type: file.type });

              // Prepare FormData for sending the file to the server
              const formData = new FormData();
              formData.append('file', compressedFile);

              // Send the compressed image to the server
              this.uploadImage(formData);
            });
            this.img_validation_msg = '';
          };

          reader.readAsDataURL(file); // Load file as Base64
        } else {
          this.img_validation_msg = 'File size should be less than 1 MB';
        }
      } else {
        this.img_validation_msg = 'Wrong file format! Only JPEG or PNG are accepted.';
      }
    } else {
      this.img_validation_msg = 'Please select a picture of the student.';
    }
  }

  // Function to convert base64 to Blob
  base64ToBlob(base64: string, mime: string): Blob {
    const byteString = window.atob(base64);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uint8Array = new Uint8Array(arrayBuffer);

    for (let i = 0; i < byteString.length; i++) {
      uint8Array[i] = byteString.charCodeAt(i);
    }

    return new Blob([uint8Array], { type: mime });
  }

  // Function to calculate base64 image size in bytes
  calculateImageSize(base64String: string): number {
    let padding = 0;
    if (base64String.endsWith('==')) {
      padding = 2;
    } else if (base64String.endsWith('=')) {
      padding = 1;
    }
    const base64Length = base64String.length;
    const sizeInBytes = (base64Length * (3 / 4)) - padding;
    return sizeInBytes;
  }

  // Function to send compressed image to the server
  uploadImage(formData: FormData) {
    console.log(formData)
   
  }





  router = inject(Router);
  http = inject(HttpClient);
  ValidationResult: string = '';


  isnewstudent: boolean = false;
  message: any = 'Save';
  newStudent: StudentObj =
    {
      studentId: '',
      studentName: '',
      grade: '',
      username: '',
      passkey: '',
      leagueId: '101'
    }

  nameValidationMessage: string = '';
  usernameValidationMessage: string = '';
  passwordValidationMessage: string = '';


  ngOnInit(): void {
    console.log("Lazy loaded add student")

    let objUprofile = localStorage.getItem("uprofile");
    if (objUprofile != null) {
      this.newStudent.leagueId = JSON.parse(objUprofile)['league_id'];
    }
  }
  iscorrect: Boolean = false


  saveSelectedStudents() {

    let objUprofile = localStorage.getItem("uprofile");
    if (this.studentForm.valid) {
      this.newStudent.studentId = this.studentForm.get('RollNumber')?.value;
      this.newStudent.studentName = this.studentForm.get('StudentName')?.value;
      this.newStudent.grade = this.studentForm.get('SelectGrade')?.value;
      this.newStudent.username = this.studentForm.get('Username')?.value;
      this.newStudent.passkey = this.studentForm.get('Password')?.value;
      if (objUprofile != null) {
        this.newStudent.leagueId = JSON.parse(objUprofile)['league_id'];
      }

      this.http.post<any>('https://zedpea.co.in/api/newstudent.php', this.newStudent)
        .subscribe(data => {
          this.message = data.message;
          this.iscorrect = true
          this.ValidationResult = "Data Inserted Successfully ";
        }
        );
    }
    else {
      this.ValidationResult = "Something Wrong";
      this.iscorrect = false
    }


  }

}

interface StudentObj {
  studentId: string,
  studentName: string,
  grade: string,
  username: string,
  passkey: string,
  leagueId: string
}
