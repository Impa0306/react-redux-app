import React from "react";
import cx from "classnames";
import { VISIBILITY_FILTERS } from "../constants";
import { connect } from "react-redux";
import { setFilter } from "../redux/actions";

class VisibilityFilters extends React.Component {
  //state = {  }

  constructor(props) {
    super(props);
    this.state = { 
      activeFilter: this.props.activeFilter,
      //currentFilter: this.props.currentFilter 
    };
  }

  // handleSetFilter = () => {
  //   this.props.setFilter(this.state.currentFilter);
  // }

  render() { 
    return ( 
      <div className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={cx(
              "filter",
              currentFilter === this.props.activeFilter && "filter--active"
            )}
            onClick={() => {
              this.props.setFilter(currentFilter)}} /** waiting for setFilter handler*/
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
     );
  }
}

// const VisibilityFilters = ({ activeFilter }) => {
//   return (
//     <div className="visibility-filters">
//       {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
//         const currentFilter = VISIBILITY_FILTERS[filterKey];
//         return (
//           <span
//             key={`visibility-filter-${currentFilter}`}
//             className={cx(
//               "filter",
//               currentFilter === activeFilter && "filter--active"
//             )}
//             onClick={() => {
//               setFilter(currentFilter);
//             } /** waiting for setFilter handler*/}
//           >
//             {currentFilter}
//           </span>
//         );
//       })}
//     </div>
//   );
// };

const mapStateToProps = state => {
  return { activeFilter : state.visibilityFilter };
}

// export default VisibilityFilters;
export default connect(mapStateToProps, { setFilter })(VisibilityFilters);
