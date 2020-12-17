import { ISession } from "../utils/session";


interface IStorage {
  saveTermsOfUseAcceptanceDate(acceptanceDate: Date): Promise<void>;
  getTermsOfUseAcceptanceDate(): Promise<Date | undefined>;

  saveSession(session: ISession): Promise<void>;
  getSession(): Promise<ISession | undefined>;

  saveContacts(contacts: any): Promise<void>;
  getContacts(): Promise<any[]>;

  saveLoadLimitsValues(documents: string[]): Promise<void>;
  getLoadLimitsValues(): Promise<string[] | undefined>;

  saveTapCustomerId(tapCustomerId: string): Promise<void>;
  getTapCustomerId(): Promise<string | undefined>;

  clearAsyncStorage(): Promise<void>;
}
}

export default IStorage;
