'use strict';

(() => {
  const fireballSize = 22;
  const getFireballSpeed = (isMovingLeft) => {
    return isMovingLeft ? 2 : 5;
  };
  const wizardSpeed = 3;
  const wizardWidth = 70;
  const getWizardHeight = () => {
    return 1.337 * wizardWidth;
  };

  const getWizardX = (gameFieldWidth) => {
    return (gameFieldWidth - wizardWidth) / 2;
  };
  const getWizardY = (gameFieldHeight) => {
    return gameFieldHeight / 3;
  };

  window.gameSetting = {
    fireballSize,
    getFireballSpeed,
    wizardSpeed,
    wizardWidth,
    getWizardHeight,
    getWizardX,
    getWizardY,
  };
})();