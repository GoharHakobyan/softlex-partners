import { useCallback, useEffect, useState } from 'react';

export const usePrevPathName = (path = '/') => {
  const [curretUrl, setCurrentUrl] = useState('/');
  useEffect(() => {
    const currentPath = localStorage.getItem('currentPath');
    if (currentPath) {
      setCurrentUrl(JSON.parse(currentPath));
    }
  }, []);
  const setCurrentPath = useCallback(() => {
    localStorage.setItem('currentPath', JSON.stringify(path));
  }, [path]);
  return {
    curretUrl,
    setCurrentPath,
  };
};

export const usePrevPathNameForAbout = () => {
  const [curretUrlAbout, setCurrentUrlAbout] = useState('/');
  useEffect(() => {
    const currentPath = localStorage.getItem('aboutPath');
    if (currentPath) {
      setCurrentUrlAbout(JSON.parse(currentPath));
    }
  }, []);
  const setCurrentPathAbout = useCallback((path = '/') => {
    localStorage.setItem('aboutPath', JSON.stringify(path));
  }, []);
  return {
    curretUrlAbout,
    setCurrentPathAbout,
  };
};
