import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { landingResolver } from './landing.resolver';

describe('landingResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => landingResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
