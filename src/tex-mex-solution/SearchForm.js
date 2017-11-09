import React from 'react'
import PropTypes from 'prop-types'

const SearchForm = ({ resetMenuList, handleSearchTermChange, updateMenuList, searchTerm, mild }) => {
  return (
    <div>
      <form>
        <input onChange={handleSearchTermChange} value={searchTerm} />
        <button type='button' onClick={updateMenuList}>Search</button>
        <button type='button' onClick={resetMenuList}>Reset</button>
        <button type='button' onClick={mild}>Only Mild</button>
        {/* <input type='checkbox' value={mild} /> */}
      </form>
    </div>
  )
}

SearchForm.propTypes = {
  handleSearchTermChange: PropTypes.func.isRequired,
  updateMenuList: PropTypes.func.isRequired,
  resetMenuList: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  mild: PropTypes.func.isRequired
  // mild: PropTypes.string.isRequired
}
export default SearchForm
