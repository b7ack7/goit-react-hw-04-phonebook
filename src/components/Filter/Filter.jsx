import PropTypes from 'prop-types';
import { FilterWrapper, Label, Input } from './Filter.styled';

export const Filter = ({filter, findContact}) => {
    return (
        <FilterWrapper>
             <Label htmlFor="filter">Find contacts by name</Label>
          <Input
          id="filter"
          type="text"
          name="filter"
          value={filter}
          onInput={findContact}
        />
        </FilterWrapper>
    )
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    findContact: PropTypes.func.isRequired  

}