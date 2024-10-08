import { Component, inject } from '@angular/core';
import { ServiceExamSectionService } from '../../service/service-exam-section.service';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass, NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { LoaderComponent } from '../../Reusable-view/loader/loader.component';
import { MenuButtonsComponent } from '../../Reusable-view/menu-buttons/menu-buttons.component';
import { NgxImageCompressService } from 'ngx-image-compress';
import { ConstantDB } from '../../Contant/constant';

@Component({
  selector: 'app-show-students',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, NgClass, RouterLink, LoaderComponent, MenuButtonsComponent, TitleCasePipe, ReactiveFormsModule],
  templateUrl: './show-students.component.html',
  styleUrl: './show-students.component.css'
})

export class ShowStudentsComponent {
  ConstantDB = ConstantDB
  closeReset() {
    this.studentForm.reset();
  }
  cheakAllCredentials() {
    if (this.studentForm.invalid) {
      console.log("Invalid form")

      this.studentForm.markAllAsTouched()
    } else {
      this.studentForm.markAsUntouched()
      this.saveStudent()
      this.studentForm.reset();

    }
  }
  saveStudent() {
    console.log("valid form in save studnet method")
    // throw new Error('Method not implemented.');
  }







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
          reader.readAsDataURL(file); // Load file as Base64

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

        } else {
          this.img_validation_msg = ConstantDB.VALIDATION_MSG.IMG_SIZE_LIMIT;

        }
      } else {
        this.img_validation_msg = ConstantDB.VALIDATION_MSG.IMG_FORMAT;
      }
    } else {
      this.img_validation_msg = ConstantDB.VALIDATION_MSG.SELECT_PIC;
    }
  }

  // Function to convert base64 to Blob
  base64ToBlob(base64: string, mime: string): Blob {
    const byteString = window.atob(base64);
    //Create an empty buffer to hold the binary data (using ArrayBuffer).
    const arrayBuffer = new ArrayBuffer(byteString.length);
    //Provide a way to manipulate and access the data as a series of bytes (using Uint8Array).
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






  studentForm: FormGroup = new FormGroup({
    StudentName: new FormControl("", [Validators.required, Validators.pattern(/^[a-z A-Z]+$/)]),
    RollNumber: new FormControl("", [Validators.required]),
    SelectGrade: new FormControl("", [Validators.required]),
    Username: new FormControl("", [Validators.required, Validators.minLength(6)]),
    Password: new FormControl("", [Validators.required, Validators.minLength(6), Validators.pattern(/[!@#$%^&*]/)]),
    Picture: new FormControl("", [Validators.required,])
  });


  exam: any;




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

  isLoaderActive: Boolean = true;

  selectedStudent: any;
  editStudent(student: any) {

    this.selectedStudent = student;
  }

  openForm() {
    throw new Error('Method not implemented.');
  }


  disstudents: boolean = true;
  addexamdisable: any;
  disexam: any;

  Studentdata: any;

  serviceExamSection = inject(ServiceExamSectionService);


  studentList: any[] = [];

  leagueUser: user =
    {
      leagueId: "101"
    }


  ngOnInit(): void {
    console.log("Lazy loaded show student")

    let objUprofile = localStorage.getItem("uprofile");
    if (objUprofile != null) {
      this.leagueUser.leagueId = JSON.parse(objUprofile)['league_id'];
    }

    this.http.post<any>('https://zedpea.co.in/api/students.php', this.leagueUser)
      .subscribe(
        (data: any) => {
          this.studentList = data;
          this.isLoaderActive = false
        }
      );
  }



}

interface user {
  leagueId: string
}

interface StudentObj {
  studentId: string,
  studentName: string,
  grade: string,
  username: string,
  passkey: string,
  leagueId: string
}


