import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import todosActions from 'redux/phonebook/phonebook-actions';

const Filter = () => {
  const value = useSelector(state => state.phonebook.filter);
  const dispatch = useDispatch();

  return (
    <label>
      Name
      <input
        type="text"
        name="filter"
        value={value}
        onChange={evt => dispatch(todosActions.filterChange(evt.target.value))}
      />
    </label>
  );
};

export default Filter;

//

// import React from 'react';
// import PropTypes from 'prop-types';
// import todosActions from '../redux/phonebook/todos-actions';
// import { connect } from 'react-redux';

// const Filter = ({ value, onChange }) => {
//   return (
//     <label>
//       Name
//       <input
//         type="text"
//         name="filter"
//         value={value}
//         onChange={evt => onChange(evt.target.value)}
//       />
//     </label>
//   );
// };

// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,
// };

// const mapStateToProps = state => {
//   return {
//     value: state.phonebook.filter,
//   };
// };

// const mapDispatchToProps = dispatch => ({
//   onChange: value => dispatch(todosActions.filterChange(value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
