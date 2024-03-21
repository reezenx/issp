// import { AbstractControl, UntypedFormGroup } from '@angular/forms';

// export interface IPatchOperation {
//   op: string;
//   path: string;
//   value?: string | Array<string> | object | null;
// }
// export class PatchOperation implements IPatchOperation {
//   constructor(
//     public op: string,
//     public path: string,
//     public value?: string | Array<string> | object | null
//   ) {}
// }

// export class PatchCollection {
//   assign(form: UntypedFormGroup) {
//     const controlKeys = Object.keys(form.controls);
//     for (let i = 0; i < controlKeys.length; i++) {
//       const key = controlKeys[i];
//       // Get the control
//       const control = form.get(key);
//       // Is this control a form group?
//       if (control['controls'] instanceof Object) {
//         // This is a form Group
//         const formGroup = control as UntypedFormGroup;
//         const groupControlKeys = Object.keys(formGroup.controls);
//         for (let i = 0; i < groupControlKeys.length; i++) {
//           const groupControlKey = groupControlKeys[i];
//           // Get the control
//           const formGroupControl = formGroup.get(groupControlKey);
//           this.addPartialUpdatesFromControl(
//             formGroupControl,
//             groupControlKey,
//             ''
//           );
//         }
//       } else {
//         // It's a normal control with a value
//         this.addPartialUpdatesFromControl(control, key, '');
//       }
//     }
//   }

//   assignControl(control: AbstractControl, controlKey: string) {
//     if (control['controls'] instanceof Object) {
//       // This is a form Group
//       const formGroup = control as UntypedFormGroup;
//       const groupControlKeys = Object.keys(formGroup.controls);
//       for (let i = 0; i < groupControlKeys.length; i++) {
//         const groupControlKey = groupControlKeys[i];
//         // Get the control
//         const formGroupControl = formGroup.get(groupControlKey);
//         this.addPartialUpdatesFromControl(
//           formGroupControl,
//           groupControlKey,
//           ''
//         );
//       }
//     } else {
//       // It's a normal control with a value
//       this.addPartialUpdatesFromControl(control, controlKey, '');
//     }
//   }

//   partialUpdates = Array<PatchOperation>();

//   addPartialUpdates(patch: PatchOperation) {
//     // if there is an existing patch operation for the same control path, then delete it
//     const existingPatch = this.partialUpdates.findIndex(
//       (p) => p.path === patch.path
//     );
//     if (existingPatch >= 0) {
//       this.partialUpdates.splice(existingPatch, 1);
//     }
//     this.partialUpdates.push(patch);
//   }

//   addPartialUpdatesFromControl(
//     control: AbstractControl,
//     controlKey: string,
//     controlPath: string,
//     enforceValueAsArray?: boolean
//   ) {
//     // Check out http://benfoster.io/blog/aspnet-core-json-patch-partial-api-updates
//     // Need to create a patch object with individual properties
//     if (control.dirty) {
//       // eslint-disable-next-line no-prototype-builtins
//       if (control.hasOwnProperty('controls')) {
//         const controlKeys = Object.keys(control.value);
//         controlKeys.forEach((key) => {
//           const childControl = control.get(key);
//           this.addPartialUpdatesFromControl(
//             childControl,
//             key,
//             `${controlPath}/${controlKey}`,
//             enforceValueAsArray
//           );
//         });
//       } else {
//         const patchPath = `${controlPath}/${controlKey}`;
//         let patch = null;
//         if (enforceValueAsArray === true) {
//           if (control.value instanceof Array === true) {
//             patch = new PatchOperation('add', patchPath, control.value);
//           } else {
//             const value = [control.value];
//             patch = new PatchOperation('add', patchPath, value);
//           }
//         } else {
//           patch = new PatchOperation('add', patchPath, control.value);
//         }
//         this.addPartialUpdates(patch);
//       }
//     }
//   }

//   clearUpdates() {
//     this.partialUpdates.length = 0;
//   }
// }
