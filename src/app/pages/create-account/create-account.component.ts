import { HttpClient, HttpResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-create-account",
  templateUrl: "./create-account.component.html",
  styleUrls: ["./create-account.component.css"],
})
export class CreateAccountComponent implements OnInit {
  constructor(private http: HttpClient,private sanitizer: DomSanitizer) {}

  imgData: any =
    "https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg";

  ngOnInit(): void {
    // this.loadImgFrombackend();
  }

  loadImgFrombackend() {
    const url = "http://localhost:8080/api/test?option=3";
    this.http.get(url, { responseType: "blob" }).subscribe((rawData) => {
      console.log("Raw Data", rawData);
      this.imgData = URL.createObjectURL(rawData);
    });

  }
}
