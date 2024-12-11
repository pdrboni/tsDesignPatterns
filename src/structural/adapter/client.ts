// the fn validateEMail has nothing with the pattern

import { EmailValidatorClassAdapter } from './validation/email-validator-class-adapter';
import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol,
} from './validation/email-validator-protocol';
import { emailValidatorFunctionAdapter } from './validation/email-validator-function-adapter';

function validateEmailClass(
  emailValidator: EmailValidatorProtocol,
  email: string,
): void {
  if (emailValidator.isEmail(email)) {
    console.log('valid email (CLASS)');
  } else {
    console.log('invalid email (CLASS)');
  }
}

validateEmailClass(new EmailValidatorClassAdapter(), 'pedro@email.com');

function validateEmailFn(
  emailValidator: EmailValidatorFnProtocol,
  email: string,
): void {
  if (emailValidator(email)) {
    console.log('valid Email (FN)');
  } else {
    console.log('invalid Email (FN)');
  }
}

validateEmailFn(emailValidatorFunctionAdapter, 'pedro@email.com');
