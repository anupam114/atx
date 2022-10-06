import SubNavigation from "../components/SubNavigation";
const Home = ({ children }) => {
  return (
    <div className="main-container">
      {children}
      <SubNavigation/>
    </div>
  );
};

export default Home;
