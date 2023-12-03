import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UploadDialogComponent } from 'src/app/components/upload-dialog/upload-dialog.component';

@Component({
  selector: 'app-my-files',
  templateUrl: './my-files.component.html',
  styleUrls: ['./my-files.component.css']
})
export class MyFilesComponent {
  showGridView = false;
  uploadDialogRef: DynamicDialogRef | undefined;

  constructor(private dialogSvc: DialogService) { }

  showUploadDialog() {
    this.uploadDialogRef = this.dialogSvc.open(UploadDialogComponent, {
      header: 'Upload File(s)',
      width: '63%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true
    });
  }
}
