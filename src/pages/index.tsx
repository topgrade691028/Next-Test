import type { NextPage } from "next";
import SEO from "component/Seo";
// views
import { TestView } from "views/Test";
const Test: NextPage = () => {
  return (
    <>
      <SEO title="Test" description="this is Test page" />
      <TestView />
    </>
  );
};

export default Test;
