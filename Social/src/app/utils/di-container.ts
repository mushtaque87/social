
import Bottle from "bottlejs";
import { Alert, Image, Linking } from "react-native";
import envConfig from "../utils/env-config";
import { IEnvConfig } from "../utils/env-interface";
import { IFetch } from "../utils/fetch";
import makeLocalStorage from "../utils/local-storage";
import IStorage from "../utils/storage";

class DIContainer {
  private impl: Bottle.IContainer;

  public constructor(impl: Bottle.IContainer) {
    this.impl = impl;
  }

  public get envConfig(): IEnvConfig {
    return this.impl.envConfig;
  }

  public get linking(): Linking {
    return this.impl.linking;
  }

  public get fetch(): IFetch {
    return this.impl.fetch;
  }

  public get restart(): IRNRestart {
    return this.impl.restart;
  }

  public get storage(): IStorage {
    return this.impl.storage;
  }

  public get alert(): Alert {
    return this.impl.alert;
  }
}

function makeDIContainer() {
  const di = new Bottle();
  di.constant("alert", Alert);
  di.constant("envConfig", envConfig);
  di.serviceFactory("storage", makeLocalStorage);
  return new DIContainer(di.container);
}

export { makeDIContainer };
export default DIContainer;
