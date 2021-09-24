import Header from "./header";
import Footer from "/workspace/code-academy-next-app/components/footer";


const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
