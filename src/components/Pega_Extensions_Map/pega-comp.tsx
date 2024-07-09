

import { Button, Label } from '@pega/cosmos-react-core';
import type { Dispatch } from '@reduxjs/toolkit';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface MapState {
  country: string;
}

export const PegaComponent = () => {
  const btnChangeCountryRef = useRef<HTMLButtonElement>(null);

  const dispatch: Dispatch = useDispatch()
  const country = useSelector((state: MapState) => {
    return state.country
  })

  const changeCountry = () => {
    dispatch({type:'CHANGE_COUNTRY',payload:{country: country === 'DE' ? 'CA' : 'DE'}})
  }

  // useEffect(() => {
  //   console.log('country effect:', country)
  // }, [country]);

  return (
    <div style={{backgroundColor: 'lightblue', padding: '1rem'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', padding: '1rem'}}>
      <Label>Pega Component</Label>
      <Label>Current Country: {country}</Label>

      </div>
      <Button ref={btnChangeCountryRef} onClick={changeCountry}>Change Country</Button>
    </div>

  );
};
export default PegaComponent;
