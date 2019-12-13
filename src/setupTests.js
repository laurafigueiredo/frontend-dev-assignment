import { configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import fetch from './services/__mocks__/fetch';

global.fetch = fetch;

configure({ adapter: new Adapter() });