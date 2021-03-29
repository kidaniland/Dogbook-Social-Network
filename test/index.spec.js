import { validateRecordField, validatorLogin } from '../src/lib/validator/validate-input.js'

describe('validateRecordField', () => {
  it('retorna true si el valor del input corresponde con la expresion regular')
  const expresion = { nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/ }
  const input =  'Maria Villa'
  const campo = {nameH: false}
  expect(validateRecordField(expresion, input, campo)).toBe(true)

  it('retorna false si el valor del input no corresponde con la expresion regular')
  const expresion = { nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/ }
  const input =  'Maria!!'
  const campo = {nameH: false}
  expect(validateRecordField(expresion, input, campo)).toBe(false)

})

describe('validatorLogin', () => {
  it('retorna true si el email y el password están vacios', () => {
    const email = '';
    const password = '';
    expect(validatorLogin(email, password)).toBe(true)
  });

  it('retorna false si el email y el password no están vacios', () => {
    const email = 'dinosiete@gmail.com';
    const password = '1234567';
    expect(validatorLogin(email, password)).toBe(false)
  });

  it('retornar true si el email y el password son espacios en blanco', () => {
    //arrange
    const email = ' ';
    const password = ' ';
    expect(validatorLogin(email, password)).toBe(true)

  });
});
