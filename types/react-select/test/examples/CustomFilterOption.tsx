import * as React from 'react';

import Select, { Option } from 'react-select';
import { ColourOption, colourOptions } from '../data';

function filterOption(arg: Option<ColourOption>, rawInput: string): boolean {
    return true;
}

export default () => (
  <Select<ColourOption>
    defaultValue={colourOptions[1]}
    options={colourOptions}
    filterOption={filterOption}
  />
);
