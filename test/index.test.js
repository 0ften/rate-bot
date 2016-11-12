/* eslint-disable import/no-extraneous-dependencies */

import chai from 'chai';
import axios from 'axios';
import sinon from 'sinon';

import { getCurrencyRate } from '../src/RateBot';

import mockHtml from './mockHtml';

chai.should();

describe('Rate bot test', () => {
  let sandbox;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });
  afterEach(() => sandbox.restore());

  it('should get correct rate', () => {
    const resolved = new Promise(r => r({ data: mockHtml }));
    sandbox.stub(axios, 'get').returns(resolved);

    getCurrencyRate({ currency: 'JPY' })
      .then((result) => {
        result.should.have.property('JPY');
        result.JPY.should.have.property('buy', 0.2543);
        result.JPY.should.have.property('sell', 0.2999);
      });
  });
});
