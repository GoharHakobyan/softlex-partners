import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import {url} from '../constants/url'
export const DataContext = React.createContext();

export default function DataProvider({ children }) {
  const [mainData, setMainData] = useState(null);
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    try {
      axios
        .all([
          axios.get(
            // `https://update-admin.softlex.pro/api/getMainPage?url=https://partners.softlex.pro/`
            `https://update-admin.softlex.pro/api/getMainPage?url=${window.location.href}/`
          ),
          axios.get(
            // `https://update-admin.softlex.pro/api/getPortfolio?url=https://partners2.softlex.pro/`
            `https://update-admin.softlex.pro/api/getPortfolio?url=${window.location.href}/`
          ),
        ])
        .then(response => {
          response && setMainData(response[0].data);
          response && setPortfolioData(response[1].data);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);
 
  return (
    mainData &&
    portfolioData && (
      <DataContext.Provider value={{ portfolioData, mainData }}>
        {children}
      </DataContext.Provider>
    )
  );
}
