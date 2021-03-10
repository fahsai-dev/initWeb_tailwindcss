import * as React from "react";
import { AppModel } from "modules/AppModel";

export const appStore = AppModel.create({});

export const appStoreContext = React.createContext(appStore);