import { LayoutRectangle } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import { ISession } from "../utils/session";
import IStorage from "../utils/storage";

interface Cache {
  transactionsTotal?: number;
  termsOfUseAcceptanceDate?: Date;
  session?: ISession;
  layout?: LayoutRectangle;
  contacts?: any;
  cardStatus?: string;
  permittedDocuments?: string[];
  tapCustomerId?: string;
  transactionStatus? : string;
}

class LocalStorage implements IStorage {

  private static async getItem(key: string) {
    const value = await AsyncStorage.getItem(key);
    return JSON.parse(value!);
  }

  private cache: Cache = {};

  public async saveTermsOfUseAcceptanceDate(
    acceptanceDate: Date
  ): Promise<void> {
    AsyncStorage.setItem(
      "termsOfUseAcceptanceDate",
      acceptanceDate.toISOString()
    );
    this.cache.termsOfUseAcceptanceDate = acceptanceDate;
  }

  public async getTermsOfUseAcceptanceDate(): Promise<Date | undefined> {
    const value = await this.getRawCachedItem("termsOfUseAcceptanceDate");
    const acceptanceDate = new Date(value);
    if (value && acceptanceDate.toString() !== "Invalid Date") {
      return acceptanceDate;
    }
  }

  public async saveSession(session: ISession) {
    this.save("session", session);
  }

  public async getSession() : Promise<ISession> {
    return this.getCachedItem("session");
  }

  public async saveContacts(contacts: any) {
    this.save("contacts", contacts);
  }

  public async getContacts() {
    const contacts = (await this.getCachedItem("contacts")) || [];
    return contacts.map((c: any) => {
      c.contactedAt = new Date(c.contactedAt);
      return c;
    });
  }

  public async saveCardStatus(status: string) {
    AsyncStorage.setItem("cardStatus", status);
    this.cache.cardStatus = status;
  }

  public async saveLoadLimitsValues(loadLimits: any) {
    this.save('loadLimits', loadLimits);
  }

  public async getLoadLimitsValues() {
    return this.getCachedItem('loadLimits');
  }

  public async saveTapCustomerId(tapCustomerId: string) {
    AsyncStorage.setItem('tapCustomerId', tapCustomerId);
    this.cache.tapCustomerId = tapCustomerId;
  }

  public async getTapCustomerId() {
    return this.getRawCachedItem("tapCustomerId");
  }

  private async save(key: string, value: any) {
    AsyncStorage.setItem(key, JSON.stringify(value));
    // @ts-ignore
    this.cache[key] = value;
  }

  private async getRawCachedItem(key: string) {
    // @ts-ignore
    if (this.cache[key] !== undefined) {
      this.updateCacheWithRaw(key);
      // @ts-ignore
      return this.cache[key];
    } else {
      return this.updateCacheWithRaw(key);
    }
  }

  private async updateCacheWithRaw(key: string) {
    const value = await AsyncStorage.getItem(key);
    // @ts-ignore
    this.cache[key] = value;
    return value;
  }

  private async getCachedItem(key: string) {
    // @ts-ignore
    if (this.cache[key] !== undefined) {
      this.updateCache(key);
      // @ts-ignore
      return this.cache[key];
    } else {
      return this.updateCache(key);
    }
  }

  private async updateCache(key: string) {
    const value = await LocalStorage.getItem(key);
    // @ts-ignore
    this.cache[key] = value;
    return value;
  }

  async clearAsyncStorage() : Promise<void> {
    return AsyncStorage.clear()
  }
}

function makeLocalStorage() {
  return new LocalStorage();
}

//export {getSession,saveSession}
export default makeLocalStorage;
// export default LocalStorage;
