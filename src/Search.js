import React from 'react';
import { FormControl, InputGroup, Dropdown, DropdownButton } from 'react-bootstrap';

import './Search.scss';

export default class Search extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleCity = this.handleCity.bind(this);

    this.state = {
      activeLocation: 0
    };
  }

  handleCity(selectedIndex, e) {
    console.log(selectedIndex);
  }

  render() {
    const { activeLocation } = this.state;

    return (
      <div className="search-wrapper col-sm-8 col-md-6 mx-auto">
        <InputGroup className="">
          <DropdownButton
            as={InputGroup.Prepend}
            variant="outline-secondary"
            title="Select City"
            id="input-group-dropdown-1"
            // onSelect="this.handleCity"
          >
            <Dropdown.Item href="#">City 0</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">City 1</Dropdown.Item>
            <Dropdown.Item href="#">City 2</Dropdown.Item>
          </DropdownButton>
          <FormControl aria-describedby="basic-addon1" placeholder="Let's Explore" />
        </InputGroup>
      </div>
    );
  }
}
