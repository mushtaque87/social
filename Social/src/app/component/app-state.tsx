import React from "react";
import { AppState, AppStateStatus } from "react-native";


// tslint:disable-next-line:no-empty-interface
interface IAppStateProviderProps {}

interface IAppStateProviderState {
  appState: AppStateStatus;
}


class AppStateProvider extends React.Component<
  IAppStateProviderProps,
  IAppStateProviderState
> {
  public state: IAppStateProviderState;
  private mounted = false;

  public constructor(props: IAppStateProviderProps) {
    super(props);
    this.state = { appState: AppState.currentState };
    console.log("constructor", "appState=%o", this.state.appState);
  }

  public render() {
    return (
      <Provider value={this.state.appState}>{this.props.children}</Provider>
    );
  }

  public componentDidMount() {
    this.mounted = true;
    AppState.addEventListener("change", this.onChangeAppState);
  }

  public componentWillUnmount() {
    this.mounted = false;
    AppState.removeEventListener("change", this.onChangeAppState);
  }

  private onChangeAppState = (appState: AppStateStatus) => {
    console.log("onChangeAppState", "appState=%o", appState);

    if (this.mounted) {
      this.setState({ appState });
    }
  };
}

const { Provider, Consumer } = React.createContext<AppStateStatus>(undefined!);

export { AppStateProvider, Consumer as AppStateConsumer };
