// import React from 'react';

// import { Header } from './Header';
// import './page.css';
// import { Banner } from './Banner';
// import { GridList } from './GridList';
// import { Container } from './Container';

// type User = {
//   name: string;
// };

// export const Page: React.FC = () => {
//   const [user, setUser] = React.useState<User>();

//   return (
//     <article>
//       <Banner />
//       <Header
//         user={user}
//         onLogin={() => setUser({ name: 'Jane Doe' })}
//         onLogout={() => setUser(undefined)}
//         onCreateAccount={() => setUser({ name: 'Jane Doe' })}
//       />

//       <Container className="storybook-page">
//         <GridList />
//       </Container>
//     </article>
//   );
// };

import React from 'react';
import ProviderButton from 'federation_provider/button';

export const Page = () => {
  return <ProviderButton />;
};
