import { validateEmail } from '../validations';

describe('validations helper funcitons', () => {
  it('should return false on random string', () => {
    expect(validateEmail('notAnEmail')).toBeFalsy();
  });

  it('should return true if its an email', () => {
    expect(validateEmail('actual@email.com')).toBeTruthy();
  });
});
