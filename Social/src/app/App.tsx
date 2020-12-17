/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
// import {Tabs} from './component/root-navigation'
// import {createRootNavigator} from './router'

// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from "react-navigation-tabs";
//import MainTabView from './router'

import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import PrimaryTabNavigator from "./component/primary-tab-navigator";
import {IntlProvider} from 'react-intl';
import 'intl';
import 'intl/locale-data/jsonp/ar';
import 'intl/locale-data/jsonp/en';
import {addLocaleData} from 'react-intl';
import formats from './utils/formats';
import ar from './i18n/ar';
import en from './i18n/en';
import arLocaleData from 'react-intl/locale-data/ar';
import enLocaleData from 'react-intl/locale-data/en';
import {yupLocale} from './i18n/yup.config';
import {AppStateProvider} from './component/app-state';
import {I18nManager, YellowBox, Platform} from 'react-native';
import NetInfo, {NetInfoSubscription} from '@react-native-community/netinfo';
import isRtlLocale from './utils/is-rtl-locale';
import {setLocale} from 'yup';
import {NetInfoState} from "@react-native-community/netinfo/src/internal/types";
import SplashScreen from "./component/splash-screen";
//import envConfig from "./utils/env-config";
import IStorage from "./utils/storage";
import LocalStorage  from './utils/local-storage'
import DIContainer, {makeDIContainer} from './utils/di-container';
import {DIContainerProvider} from './component/di-container';
import { createSwitchNavigator } from "react-navigation";
import OnboardingNavigator from "./component/onboarding-navigator";
import RootNavigator from './component/root-navigator';
import DefaultNavigator from "./component/onboarding-navigator";

interface IAppProps {}

interface IAppState {
  loading: boolean;
  isConnected: boolean;
  isAlreadyConnected: boolean;
  isLoggedIn;
}

class App extends React.Component <IAppProps, IAppState> {
  private static NetInfoEventListener: NetInfoSubscription;
  private mounted = false;
  private diContainer!: DIContainer;
  public state: IAppState = {
    loading: true,
    isConnected: true,
    isAlreadyConnected: false,
    isLoggedIn: false,
  };

  private messages!: {[locale: string]: {[key: string]: string}};

  private initLocalization(locale: string) {
    const isRrl = isRtlLocale(locale);
    console.log('initLocalization', 'isRrl=%o', isRrl);
    I18nManager.allowRTL(isRrl);
    I18nManager.forceRTL(isRrl);
    addLocaleData(enLocaleData);
    addLocaleData(arLocaleData);
    console.log("////Yup.setLocale");
    setLocale(yupLocale);

    // TODO
    this.messages = {en, ar: {...en, ...ar}};
  }

  public async componentDidMount() {
    this.mounted = true;
    console.log("componentDidMount");
    App.NetInfoEventListener = NetInfo.addEventListener(this.handleFirstConnectivityChange);
  }

  public componentWillUnmount() {
    this.mounted = false;
    App.NetInfoEventListener();
  }

  private handleFirstConnectivityChange = async ({isConnected}: NetInfoState) => {
    console.log('handleFirstConnectivityChange', isConnected);
    if (isConnected && !this.state.isAlreadyConnected) {
      await this.init();
    }

    await this.updateState({
      isConnected,
      isAlreadyConnected: isConnected,
    });
  };

  private async init() {
    this.diContainer = makeDIContainer();
    const {
      envConfig,
      storage
    } = this.diContainer;
    console.log('Env:',envConfig);

    const {isConnected} = await NetInfo.fetch();
    if (isConnected === false) {
      await this.updateState({isConnected});
      return;
    }

    this.initLocalization('en');

    //Check

    const session = await storage.getSession();
    console.log('session',session);
    if(session){
      console.log('Log - In to Dashbaord')
      await this.updateState({isLoggedIn: true});
    } else {
      await this.updateState({isLoggedIn: false});

    }
    await this.updateState({loading: false});
  }


  private async updateState(newState: any, cb?: any) {
    return new Promise((resolve: any) => {
      if (this.mounted) {
        this.setState(newState, () => {
          if (cb && _.isFunction(cb)) {
            cb();
          }
          resolve();
        });
      }
      resolve();
    });
  }

 rootNavigation = <RootNavigator />

  public render() {
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor('white');

    const locale = "en";
    if (!this.state.isConnected) {
      console.log("Messages",this.messages);
      return <View/>
    }


    if (this.state.loading) {
      return <SplashScreen />;
    }

    return (
      <DIContainerProvider value={this.diContainer}>
        <AppStateProvider>
          <IntlProvider
            locale={locale}
             messages={en}
            textComponent={Text}
            formats={formats}>
            <RootNavigator />
           </IntlProvider>
        </AppStateProvider>
      </DIContainerProvider>
    );
  }


};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
