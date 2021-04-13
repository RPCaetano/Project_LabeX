import React from 'react';

// import { Container } from './styles';

function onClickMenu() {
  document.getElementById('menu').classList.toggle('change');
  document.getElementById('nav').classList.toggle('change');
  document.getElementById('menu-bg').classList.toggle('change-bg');
}

export default onClickMenu;