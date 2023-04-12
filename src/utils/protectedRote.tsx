import React from 'react';

import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({
  children,
  roles,
  next,
}: {
  children: JSX.Element;
  roles: Array<string>;
  next?: string;
}) {
  const role: string = localStorage.getItem('role') ?? 'All';
  const isLoggedIn: Boolean =
    localStorage.getItem('isLoggedIn') === 'true' ? true : false;
  const checkRole =
    roles.includes('All') || roles.includes(role) ? true : false;

  if (!isLoggedIn || checkRole) {
    return <Navigate to={`/login?next=${next}`} replace />;
  }

  return children;
}
