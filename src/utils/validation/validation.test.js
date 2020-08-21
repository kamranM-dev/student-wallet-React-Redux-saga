import { run, ruleRunner } from './validation';
import {required} from './validators';

describe('validation', () => {
  describe('ruleRunner', () => {
    it('should return errors correctly', () => {
      const formFields = {
        name: '',
        email: 'aaa'
      };
      expect(ruleRunner('name', 'Name', required)(formFields)).toEqual({ name: 'Name is required.' });
    });
    it('should return no error if rules pass', () => {
      const formFields = {
        name: 'ccc',
        email: 'aaa'
      };
      expect(ruleRunner('name', 'Name', required)(formFields)).toEqual(null);
    });
  });
  describe('run', () => {
    it('should return errors correctly', () => {
      const formFields = {
        name: '',
        email: ''
      };
      const runners = [ruleRunner('name', 'Name', required), ruleRunner('email', 'Email', required)];
      expect(run(formFields, runners)).toEqual({ name: 'Name is required.', email: 'Email is required.' });
    });
  });
});
