import { _interopNamespace, RequireResult } from '../../src/jsPolyfills';
import { _interopNamespace as _interopNamespaceOrig } from './originals';

describe('_interopNamespace', () => {
  it('returns the same result as the original', () => {
    const withESModuleFlag = { __esModule: true, charlie: 'goofy', maisey: 'silly' };
    const namedExports = { charlie: 'goofy', maisey: 'silly' };
    const withNonEnumerableProp = { charlie: 'goofy', maisey: 'silly' };
    Object.defineProperty(withNonEnumerableProp, 'hiddenProp', {
      value: 'shhhhhhhh',
      // this is the default, but including it here anyway for clarity
      enumerable: false,
    });
    const withDefaultExport = { default: () => 'dogs are great', charlie: 'goofy', maisey: 'silly' };
    const withOnlyDefaultExport = { default: () => 'dogs are great' };
    const exportsEquals = () => 'dogs are great';
    const exportsEqualsWithDefault = () => 'dogs are great';
    exportsEqualsWithDefault.default = exportsEqualsWithDefault;

    expect(_interopNamespace(withESModuleFlag)).toEqual(_interopNamespaceOrig(withESModuleFlag));
    expect(_interopNamespace(namedExports)).toEqual(_interopNamespaceOrig(namedExports));
    expect(_interopNamespace(withNonEnumerableProp)).toEqual(_interopNamespaceOrig(withNonEnumerableProp));
    expect(_interopNamespace(withDefaultExport)).toEqual(_interopNamespaceOrig(withDefaultExport));
    expect(_interopNamespace(withOnlyDefaultExport)).toEqual(_interopNamespaceOrig(withOnlyDefaultExport));
    expect(_interopNamespace(exportsEquals as RequireResult)).toEqual(_interopNamespaceOrig(exportsEquals));
    expect(_interopNamespace(exportsEqualsWithDefault as unknown as RequireResult)).toEqual(
      _interopNamespaceOrig(exportsEqualsWithDefault),
    );
  });
});
