import { Authorization } from '../../../../sdk';

export const clearCache = () => {
	// TODO need to implement a way to tell authorization service to clear its cache or not use cache at all
};

export const hasAllPermissionAsync = async (userId, permissions, scope) => Authorization.hasAllPermission(userId, permissions, scope);
export const hasPermissionAsync = async (userId, permissionId, scope) => Authorization.hasPermission(userId, permissionId, scope);
export const hasAtLeastOnePermissionAsync = async (userId, permissions, scope) => Authorization.hasAtLeastOnePermission(userId, permissions, scope);

export const hasAllPermission = (userId, permissions, scope) => Promise.await(hasAllPermissionAsync(userId, permissions, scope));
export const hasPermission = (userId, permissionId, scope) => Promise.await(hasPermissionAsync(userId, permissionId, scope));
export const hasAtLeastOnePermission = (userId, permissions, scope) => Promise.await(hasAtLeastOnePermissionAsync(userId, permissions, scope));
