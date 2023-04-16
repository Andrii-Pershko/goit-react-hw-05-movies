import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export default function SharedLayout() {
  // повертаємо незмінну частину нашого веб-додатку
  return (
    <>
      <header>
        <nav>
          <ul className="nav-list">
            <li>
              <StyledLink to="/" end>
                Home
              </StyledLink>
            </li>
            <li>
              <StyledLink to="movies">Movies</StyledLink>
            </li>
          </ul>
        </nav>
      </header>

      <Suspense fallback={<div>Loading page...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
}
