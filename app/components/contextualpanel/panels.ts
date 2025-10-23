import SettingsPanel from '@/app/components/contextualpanel/panels/SettingsPanel';
import ContactSupportPanel from '@/app/components/contextualpanel/panels/ContactSupportPanel';
import NotificationPanel from '@/app/components/contextualpanel/panels/NotificationPanel'; // We'll make this small wrapper
// Future panels: BillingPanel, PrivacyPanel, etc.

export const panels: Record<string, React.FC<any>> = {
  Notifications: NotificationPanel,
  Settings: SettingsPanel,
  Support: ContactSupportPanel,
};
