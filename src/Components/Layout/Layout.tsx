import { Suspense } from "react";
import { Container } from "./Layout.styled";

const Layout = ({children}: any) => {
  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        {children}
      </Suspense>
    </Container>
  );
};

export default Layout;
