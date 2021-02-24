import React from "react";
import iconSet from '../selection.json';
export const VactoryIconContext = React.createContext(iconSet);

export const VactoryIconProvider = VactoryIconContext.Provider;
export const VactoryIconConsumer = VactoryIconContext.Consumer;

export const useVactoryIcon = () => React.useContext(VactoryIconContext);
