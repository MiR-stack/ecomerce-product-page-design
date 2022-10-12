import Navbar from "./navbar/navbar";
import { Page } from "./pageLayout.styled";

function PageLayout({ children }) {
  return (
      <Page>
        <Navbar />
       {children}
      </Page>
  );
}

export default PageLayout;
