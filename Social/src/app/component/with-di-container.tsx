import { DIContainerConsumer } from "./di-container";
import * as React from "react";
import DIContainer from "../utils/di-container";

interface IWithDIContainerProps {
  diContainer: DIContainer;
}

function withDIContainer<TProps>(
  Component: React.ComponentType<TProps & IWithDIContainerProps>
) {
  class WithDIContainer extends React.Component<TProps> {
    public render() {
      return <DIContainerConsumer children={this.onDIContainer} />;
    }

    private onDIContainer = (diContainer: DIContainer) => (
      <Component {...this.props} diContainer={diContainer} />
    );
  }

  return WithDIContainer;
}

export { IWithDIContainerProps };
export default withDIContainer;
