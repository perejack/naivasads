import { useState, useCallback } from 'react';

export function useSurveyAds() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  const showPopupAd = useCallback((delay: number = 0, adIndex?: number) => {
    setTimeout(() => {
      if (adIndex !== undefined) {
        setCurrentAdIndex(adIndex);
      }
      setPopupVisible(true);
    }, delay);
  }, []);

  const hidePopupAd = useCallback(() => {
    setPopupVisible(false);
  }, []);

  const nextAd = useCallback(() => {
    setCurrentAdIndex((prev) => (prev + 1) % 4);
  }, []);

  return {
    popupVisible,
    currentAdIndex,
    showPopupAd,
    hidePopupAd,
    nextAd,
    setCurrentAdIndex
  };
}
