import React, { useCallback, useState, useEffect } from 'react';
import { FirstContext } from './Context';
import { SecondContext } from './SecondContext';
import Color from "../../Color.json";
import DataPass from '../EffectHooks/DataPass';
function Provider() {
  const [record, setRecord] = useState([]);
  const [colorCode, setColorCode] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      let response = await fetch('https://dummyjson.com/products');
      const json = await response.json();
      setRecord(json.products);
  
      const colors = Color.colors && Color.colors.red;
      console.log('Colors:', colors);
      setColorCode(colors || []);
    } catch (error) {
      console.log(error);
    }
  }, []);
  
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  let data = [
    { data: 'API DATA INTEGRATION' },
    { data1: 'USING USEEFFECT AND USECONTEXT' },
  ];

  if (!record.length || !colorCode.length||!data.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <FirstContext.Provider value={{ record, colorCode }}>
        <SecondContext.Provider value={data}>
<DataPass/>
        </SecondContext.Provider>
      </FirstContext.Provider>
    </div>
  );
}

export default Provider;
