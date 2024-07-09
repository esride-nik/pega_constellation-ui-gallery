/* eslint-disable no-console */
import {
  withConfiguration,

} from '@pega/cosmos-react-core';

// Redux stuff
import { configureStore, type EnhancedStore } from '@reduxjs/toolkit';

import MapComp from './map-comp';
import { Provider } from 'react-redux';
import PegaComponent from './pega-comp';
// import rootReducer from './reducers'
// const store = configureStore({ reducer: rootReducer })

interface MapState {
  country: string;
}

const preloadedState: MapState = {
  country:'CA'
};

type MapProps = {
  getPConnect?: any;
  heading?: string;
  height?: string;
  Latitude?: string;
  Longitude?: string;
  Zoom?: string;
  displayMode: string;
  bFreeFormDrawing: boolean;
  bShowSearch: boolean;
};

export const PegaExtensionsMap = (props: MapProps) => {
  const {
    getPConnect,
    heading = 'Map',
    height = '40rem',
    Latitude = '34',
    Longitude = '-118',
    Zoom = '8',
    displayMode = '',
    bFreeFormDrawing = false,
    bShowSearch = false
  } = props;

  const store = configureStore({
    reducer: (state, action) => {
      console.log('store state:', state)
      if(action.type === 'CHANGE_COUNTRY'){
        console.log('store new state:', action.payload)
        return action.payload
      }
      return state
    },
    preloadedState
  });


  return (
    <Provider store={store}>
    <MapComp heading={heading} height={height} Latitude={Latitude} Longitude={Longitude} Zoom={Zoom} displayMode={displayMode} bFreeFormDrawing={bFreeFormDrawing} bShowSearch={bShowSearch} getPConnect={getPConnect} />
    <PegaComponent />
    </Provider>
  );
};
export default withConfiguration(PegaExtensionsMap);
