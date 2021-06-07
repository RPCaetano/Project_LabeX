import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

function HomePage() {
  return (
<S.Container>
<Link to={'/login'}>
<S.Button>Area administrador</S.Button>
</Link>
<Link to={'/inscricao'}>
<S.Button>Quero me candidatar</S.Button>
</Link>
</S.Container>
  )
}
export default HomePage;