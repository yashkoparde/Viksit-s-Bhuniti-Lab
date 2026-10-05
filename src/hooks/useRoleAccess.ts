import { useState } from 'react';
import { UserProfile, UserRole } from '../types/landGovernance.ts';

export function useRoleAccess(initialProfile: UserProfile) {
  const [profile, setProfile] = useState<UserProfile>(initialProfile);
  const hasPermission = (perm: string) => profile.role === 'official' || profile.permissions.includes(perm);
  const isRole = (role: UserRole) => profile.role === role;
  return { profile, setProfile, hasPermission, isRole };
}
