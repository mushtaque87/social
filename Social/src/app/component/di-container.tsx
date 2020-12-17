import React from "react";
import DIContainer from "../utils/di-container";

const {
  Consumer: DIContainerConsumer,
  Provider: DIContainerProvider
} = React.createContext<DIContainer>(undefined!);

export { DIContainerConsumer, DIContainerProvider };
