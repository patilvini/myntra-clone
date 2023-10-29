import AccordionFilters from "../filters/AccordionFilters";
import Breadcrumb from "../breadcrumb.js/Breadcrumb";

import "./MainLayout.scss";

const MainLayout = () => {
  return (
    <div className="container pt-40">
      <div className="layout-head mb-40">
        <Breadcrumb />
        <p>info</p>
      </div>

      <main className="flex">
        <div className="side-filter-bar">
          <h3>FILTERS</h3>

          <h2>Filters</h2>
        </div>
        <div className="items-dashboard">
          <AccordionFilters />

          <h2>items</h2>
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
