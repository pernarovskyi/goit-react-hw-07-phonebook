import { Wrapper, FilterLabel, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/filterSelector';
import { setFilter } from 'redux/filter/filterSlice';

export const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    const {
      target: { value },
    } = e;
    dispatch(setFilter(value.trim()));
  };

  return (
    <Wrapper>
      <FilterLabel>
        Filter
        <Input type="text" value={filterValue} onChange={handleChange}></Input>
      </FilterLabel>
    </Wrapper>
  );
};
