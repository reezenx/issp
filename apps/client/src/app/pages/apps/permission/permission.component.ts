import { Component, OnInit } from '@angular/core';
import { Role } from '@prisma/client';
import { NgxRolesService, NgxPermissionsService } from 'ngx-permissions';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.scss'],
})
export class AppPermissionComponent implements OnInit {
  currentRole!: string;

  currentPermissions!: string[];

  permissionsOfRole: { [key in Role]: string[] } = {
    ROOT: ['canAdd', 'canDelete', 'canEdit', 'canRead', 'canComment'],
    ADMIN: ['canAdd', 'canEdit', 'canRead', 'canComment'],
    EVALUATOR: ['canRead', 'canComment'],
    VIEWER: ['canRead'],
    USER: ['canAdd', 'canEdit', 'canRead'],
    ENDORSER: ['canComment'],
    APPROVER: ['canComment'],
  };

  private readonly _destroy$ = new Subject<void>();

  constructor(
    private rolesSrv: NgxRolesService,
    private permissionsSrv: NgxPermissionsService
  ) {}

  ngOnInit(): void {
    this.currentRole = Role.ADMIN;
    this.currentPermissions = this.permissionsOfRole[Role.ADMIN];
  }

  onPermissionChange() {
    this.currentPermissions = this.permissionsOfRole[this.currentRole];
    this.rolesSrv.flushRolesAndPermissions();
    this.rolesSrv.addRoleWithPermissions(
      this.currentRole,
      this.currentPermissions
    );
  }
}
