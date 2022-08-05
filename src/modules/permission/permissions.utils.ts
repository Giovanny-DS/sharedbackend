import { Permission } from './permission.entity';

export function hasPermission(permission: string, permissions: Permission[]): boolean {
  if (!Array.isArray(permissions)) return;
  if (permissions.length === 0) return;
  for (let perm of permissions) {
    if (perm.name.includes(permission)) return true;
  }
  return false
}