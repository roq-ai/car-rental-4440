interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Read'],
  customerRoles: [],
  tenantRoles: ['Read'],
  tenantName: 'Guest',
  applicationName: 'Car Rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Read user data', 'Read guest data', 'Read vehicle data', 'Read reservation data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/210792c7-9403-4d58-9aa8-6b9c1b191693',
};
