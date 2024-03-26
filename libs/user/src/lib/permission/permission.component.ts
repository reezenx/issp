import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '@issp/common/ui/libraries';
import { Role } from '@prisma/client';
import { NgxRolesService, NgxPermissionsService } from 'ngx-permissions';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'issp-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.scss'],
  imports: [CommonModule, FormsModule, MaterialModule],
})
export class IsspPermissionComponent implements OnInit {
  currentRole!: string;

  currentPermissions!: string[];

  permissionsOfRole: { [key in Role]: string[] } = {
    SUPER_ADMIN: ['canAdd', 'canDelete', 'canEdit', 'canRead', 'canComment'],
    ADMIN: ['canAdd', 'canEdit', 'canRead', 'canComment'],
    EVALUATOR: ['canRead', 'canComment'],
    VIEWER: ['canRead'],
    PLANNER: ['canAdd', 'canEdit', 'canRead'],
    VALIDATOR: ['canAdd', 'canEdit', 'canRead'],
    ENDORSER: ['canComment'],
    APPROVER: ['canComment'],
    ASSIGNER: ['canComment'],
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
