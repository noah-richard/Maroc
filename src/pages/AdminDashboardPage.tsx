import React from 'react';
import { useSearchParams, useParams } from 'react-router-dom';
import { AdminProvider } from '../admin/context/AdminContext';
import type { AdminTab } from '../admin/context/AdminContext';
import { AdminLayout } from '../admin/components/AdminLayout';

export const AdminDashboardPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { tab: pathTab } = useParams<{ tab?: string }>();

  const tabParam = (searchParams.get('tab') || pathTab || 'destinations') as AdminTab;
  const validTabs: AdminTab[] = [
    'destinations',
    'pages',
    'platform',
    'recommendations',
    'ads',
    'overview',
    'partners',
    'bookings',
    'admins',
    'audit',
    'security',
    'settings'
  ];

  const initialTab: AdminTab = validTabs.includes(tabParam) ? tabParam : 'destinations';

  return (
    <AdminProvider>
      <AdminLayout initialTab={initialTab} />
    </AdminProvider>
  );
};

export default AdminDashboardPage;

