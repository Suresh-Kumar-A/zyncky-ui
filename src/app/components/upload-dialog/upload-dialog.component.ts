import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.css']
})
export class UploadDialogComponent implements OnInit {

  uploadedFiles: UploadedFileInfo[] = [];

  ngOnInit(): void {
    this.uploadedFiles = [];
  }

  showSystemFilesDialog() {
    let fileDialogInput: HTMLElement = document.getElementById('file-dialog-input') as HTMLElement;
    fileDialogInput.click();
  }

  uploadFiles(event: any) {
    let files = event.target.files;
    if (files.length == 0) {
      return;
    }
    let fileItem: UploadedFileInfo = {
      name: files[0].name,
      type: files[0].type,
      uploading: true,
      size: this.parseFileSize(files[0].size)
    }
    this.uploadedFiles.push(fileItem);

    //mocking loading completed
    setTimeout(() => {
      const item = this.uploadedFiles.find(file => file.name == fileItem.name);
      (item) ? item.uploading = false : '';
    }, 3500);
  }

  /**
   * Method to convert Bytes to equivalent KB, MB, GB
   * @param byteSize size in bytes
   * @returns string representing the equivalent KB, MB, GB
   */
  parseFileSize(byteSize: number): string {
    const maxBytes = 1024;
    const maxKB = (maxBytes * 1024);
    const maxMB = (maxKB * 1024);
    const maxGB = (maxMB * 1024);

    if (byteSize < maxBytes) {
      return (byteSize).toFixed(0).concat(' B');
    } else if (byteSize < maxKB) {
      return (byteSize / maxBytes).toFixed(0).concat(' KB');
    } else if (byteSize < maxMB) {
      return (byteSize / maxKB).toFixed(0).concat(' MB');
    } else if (byteSize < maxGB) {
      return (byteSize / maxMB).toFixed(0).concat(' GB');
    } else {
      return byteSize.toFixed(0).concat(' B');
    }
  }

  cancelUpload(fileName: string): void {
    const itemIndex = this.uploadedFiles.findIndex(file => file.name == fileName);
    if (itemIndex != -1) {
      this.uploadedFiles.splice(itemIndex, 1);
    }
  }

}

export interface UploadedFileInfo {
  name: string,
  type: string,
  uploading: boolean,
  size: string
}