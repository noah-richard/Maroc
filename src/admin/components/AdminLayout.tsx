import React, { useState, useEffect } from 'react';
import { useAdmin } from '../context/AdminContext';
import type { AdminTab } from '../context/AdminContext';
import { AdminSidebar } from './AdminSidebar';
import { AdminHeader } from './AdminHeader';
import { ToastContainer } from './ToastContainer';
import { CommandPalette } from './CommandPalette';
import { InviteAdminModal } from './InviteAdminModal';
import { AdminOverviewPage } from '../pages/AdminOverviewPage';
import { AdminUsersPage } from '../pages/AdminUsersPage';
import { AdminDestinationsPage } from '../pages/AdminDestinationsPage';
import { AdminPagesManager } from '../pages/AdminPagesManager';
import { AdminPlatformContentPage } from '../pages/AdminPlatformContentPage';
import { AdminRecommendationsPage } from '../pages/AdminRecommendationsPage';
import { AdminAdvertisingPage } from '../pages/AdminAdvertisingPage';
import { AdminPartnersPage } from '../pages/AdminPartnersPage';
import { AdminBookingsPage } from '../pages/AdminBookingsPage';
import { AdminAuditPage } from '../pages/AdminAuditPage';
import { AdminSecurityPage } from '../pages/AdminSecurityPage';
import { AdminSettingsPage } from '../pages/AdminSettingsPage';
import './AdminLayout.css';
import '../pages/AdminUsersPage.css';
import '../pages/AdminOverviewPage.css';
import './InviteAdminModal.css';
import './CityEditorModal.css';

interface AdminLayoutProps {
  initialTab?: AdminTab;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ initialTab }) => {
  const { activeTab, setActiveTab, theme, isSidebarCollapsed } = useAdmin();
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab, setActiveTab]);

  const renderActivePage = () => {
    switch (activeTab) {
      case 'destinations':
        return <AdminDestinationsPage />;
      case 'pages':
        return <AdminPagesManager />;
      case 'platform':
        return <AdminPlatformContentPage />;
      case 'recommendations':
        return <AdminRecommendationsPage />;
      case 'ads':
        return <AdminAdvertisingPage />;
      case 'overview':
        return <AdminOverviewPage onOpenInviteModal={() => setIsInviteModalOpen(true)} />;
      case 'admins':
        return <AdminUsersPage onOpenInviteModal={() => setIsInviteModalOpen(true)} />;
      case 'partners':
        return <AdminPartnersPage />;
      case 'bookings':
        return <AdminBookingsPage />;
      case 'audit':
        return <AdminAuditPage />;
      case 'security':
        return <AdminSecurityPage />;
      case 'settings':
        return <AdminSettingsPage />;
      default:
        return <AdminDestinationsPage />;
    }
  };


  return (
    <div className="admin-root" data-theme={theme}>
      <div className="admin-layout">
        {/* Navigation Sidebar */}
        <AdminSidebar />

        {/* Main Content Area */}
        <div className={`admin-main-wrap ${isSidebarCollapsed ? 'admin-main-wrap--collapsed' : ''}`}>
          {/* Top Header */}
          <AdminHeader onOpenInviteModal={() => setIsInviteModalOpen(true)} />

          {/* Page Body Viewport */}
          <main className="admin-page-content" role="main">
            {renderActivePage()}
          </main>
        </div>
      </div>

      {/* Global Modals & Notifications */}
      <InviteAdminModal
        isOpen={isInviteModalOpen}
        onClose={() => setIsInviteModalOpen(false)}
      />

      <CommandPalette onOpenInviteModal={() => setIsInviteModalOpen(true)} />

      <ToastContainer />
    </div>
  );
};
