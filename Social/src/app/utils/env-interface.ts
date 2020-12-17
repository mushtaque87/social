interface IEnvConfig {
  apiUrl: string;
  apiKey: string;
  appVersionUrl: string;
  appVersionUrlAE: string;
  awsRegion: string;
  awsUserPoolId: string;
  awsUserPoolClientId: string;
  instabugKey: string;
  identityPoolId: string;
  env: string;
  defaultPhoneNumber: string;
  freshchatAppId: string;
  freshchatAppKey: string;
  isDebug: boolean;
  isDev: boolean;
  isStg: boolean;
  isProd: boolean;
  isCodeVerificationEnabled: boolean;
  isIdMocked: boolean;
  isCouponMocked: boolean;
  sentryDsn: string,
  canRequestPhoneStatePermission: boolean;
  buildId: string;
  buildType: string;
  verificationCodeTimer: Number,
  tapCompanySecretKey: string;
  tapCompanyAppId: string;
  tapCompanyPostUrl: string;
  tapCreateCustomerAPI: string;
  sendCardPinUrl: string;
}

export { IEnvConfig };
