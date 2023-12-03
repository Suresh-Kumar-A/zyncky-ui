import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UploadDialogComponent } from 'src/app/components/upload-dialog/upload-dialog.component';
import { ApiError } from 'src/app/model/apierror.model';
import { FileInfo } from 'src/app/model/file-info.model';
import { BackendService } from 'src/app/services/backend.service';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-files',
  templateUrl: './my-files.component.html',
  styleUrls: ['./my-files.component.css']
})
export class MyFilesComponent implements OnInit {
  showGridView = false;
  uploadDialogRef: DynamicDialogRef | undefined;
  filesInfo: FileInfo[] = [];

  constructor(private dialogSvc: DialogService, private backendSvc: BackendService,
    private notificationSvc: NotificationService, private userSvc: UserService) { }

  ngOnInit(): void {
    this.loadItems();
  }

  showUploadDialog() {
    this.uploadDialogRef = this.dialogSvc.open(UploadDialogComponent, {
      header: 'Upload File(s)',
      width: '63%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true
    });

    this.uploadDialogRef.onClose.subscribe(() => {
      this.loadItems();
    })
  }

  loadItems() {
    const username = this.userSvc.getUsername();
    this.backendSvc.listFilesInfo(username).subscribe((filesInfo) => {
      console.log(filesInfo);

      if (filesInfo) {
        this.filesInfo = filesInfo;
      }
    }, (httpErrResp: HttpErrorResponse) => {
      const apiError: ApiError = httpErrResp.error;
      this.notificationSvc.showErrorMessage(apiError.mesaage);
    })
  }

  deleteFile(uid: string) {

  }
}
