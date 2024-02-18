const expect = require('chai').expect;
const formatFullname = require('../formatFullname');

it('should return an proper value', () => {
  expect(formatFullname('first last')).to.equal('First Last');
  expect(formatFullname("name o'brian")).to.equal("Name O'Brian");
  expect(formatFullname('name smith-brown')).to.equal('Name Smith-Brown');
  expect(formatFullname('name smith-brown-dark')).to.equal(
    'Name Smith-Brown-Dark'
  );
  expect(formatFullname('v red')).to.equal('V Red');
  expect(formatFullname('name mcdonnald')).to.equal('Name McDonnald');
});

it('should return an error if "fullName" arg is not a string', () => {
  expect(formatFullname(undefined)).to.equal('Error');
  expect(formatFullname(12)).to.equal('Error');
  expect(formatFullname({})).to.equal('Error');
  expect(formatFullname([])).to.equal('Error');
  expect(formatFullname(function () {})).to.equal('Error');
});

it('should return an error if "fullName" arg is not in <firstname> <lastname> format', () => {
  expect(formatFullname('')).to.equal('Error');
  expect(formatFullname(' ')).to.equal('Error');
  expect(formatFullname('  ')).to.equal('Error');
  expect(formatFullname('name')).to.equal('Error');
  expect(formatFullname('name Van Buren')).to.equal('Error');
  expect(formatFullname('dsadsad dsadas dsadasd')).to.equal('Error');
  expect(formatFullname('dsadsad d sadas dsadasd')).to.equal('Error');
  expect(formatFullname('dsadsad-dsadasdsadasd')).to.equal('Error');
  expect(formatFullname('dsadsad-dsadas-dsadasd')).to.equal('Error');
  expect(formatFullname('das-mcdsadasd')).to.equal('Error');
});

it('should return an error if <firstname> or <lastname> has no letters', () => {
  expect(formatFullname('#')).to.equal('Error');
  expect(formatFullname('# ')).to.equal('Error');
  expect(formatFullname(' #')).to.equal('Error');
  expect(formatFullname('# #')).to.equal('Error');
  expect(formatFullname('#$# #')).to.equal('Error');
  expect(formatFullname(' ##$')).to.equal('Error');
  expect(formatFullname('@#@ ##$')).to.equal('Error');
  expect(formatFullname('/// dsa')).to.equal('Error');
  expect(formatFullname('/ad dsa')).to.equal('Error');
  expect(formatFullname('-ad dsa')).to.equal('Error');
  expect(formatFullname('ad- da-')).to.equal('Error');
  expect(formatFullname('a da-')).to.equal('Error');
});
