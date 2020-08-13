import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  usePrevState,
  useDebounce,
  useScroll,
  useThrottle,
  useWindowClick,
  useFetchData,
} from '../src/index';

configure({ adapter: new Adapter() });
