import {
  _interopDefault,
  _interopNamespace,
  _interopRequireDefault,
  _interopRequireWildcard,
  RequireResult,
} from '../../src/buildPolyfills';
import {
  _interopDefault as _interopDefaultOrig,
  _interopNamespace as _interopNamespaceOrig,
  _interopRequireDefault as _interopRequireDefaultOrig,
  _interopRequireWildcard as _interopRequireWildcardOrig,
} from './originals';

const withESModuleFlag = { __esModule: true, charlie: 'goofy', maisey: 'silly' };
const withESModuleFlagAndDefault = {
  __esModule: true,
  charlie: 'goofy',
  maisey: 'silly',
  default: () => 'dogs are great',
};
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

describe('_interopNamespace', () => {
  it('returns the same result as the original', () => {
    expect(_interopNamespace(withESModuleFlag)).toEqual(_interopNamespaceOrig(withESModuleFlag));
    expect(_interopNamespace(withESModuleFlag)).toEqual(withESModuleFlag);

    expect(_interopNamespace(withESModuleFlagAndDefault)).toEqual(_interopNamespaceOrig(withESModuleFlagAndDefault));
    expect(_interopNamespace(withESModuleFlagAndDefault)).toEqual(withESModuleFlagAndDefault);

    expect(_interopNamespace(namedExports)).toEqual(_interopNamespaceOrig(namedExports));
    expect(_interopNamespace(namedExports)).toEqual({ ...namedExports, default: namedExports });

    expect(_interopNamespace(withNonEnumerableProp)).toEqual(_interopNamespaceOrig(withNonEnumerableProp));
    expect(_interopNamespace(withNonEnumerableProp)).toEqual({ ...withNonEnumerableProp, default: namedExports });

    expect(_interopNamespace(withDefaultExport)).toEqual(_interopNamespaceOrig(withDefaultExport));
    expect(_interopNamespace(withDefaultExport)).toEqual({ ...withDefaultExport, default: withDefaultExport });

    expect(_interopNamespace(withOnlyDefaultExport)).toEqual(_interopNamespaceOrig(withOnlyDefaultExport));
    expect(_interopNamespace(withOnlyDefaultExport)).toEqual({ default: withOnlyDefaultExport });

    expect(_interopNamespace(exportsEquals as RequireResult)).toEqual(_interopNamespaceOrig(exportsEquals));
    expect(_interopNamespace(exportsEquals as RequireResult)).toEqual({ default: exportsEquals });

    expect(_interopNamespace(exportsEqualsWithDefault as unknown as RequireResult)).toEqual(
      _interopNamespaceOrig(exportsEqualsWithDefault),
    );
    expect(_interopNamespace(exportsEqualsWithDefault as unknown as RequireResult)).toEqual({
      default: exportsEqualsWithDefault,
    });
  });
});

describe('_interopRequireWildcard', () => {
  it('returns the same result as the original', () => {
    expect(_interopRequireWildcard(withESModuleFlag)).toEqual(_interopRequireWildcardOrig(withESModuleFlag));
    expect(_interopRequireWildcard(withESModuleFlag)).toEqual(withESModuleFlag);

    expect(_interopRequireWildcard(withESModuleFlagAndDefault)).toEqual(
      _interopRequireWildcardOrig(withESModuleFlagAndDefault),
    );
    expect(_interopRequireWildcard(withESModuleFlagAndDefault)).toEqual(withESModuleFlagAndDefault);

    expect(_interopRequireWildcard(namedExports)).toEqual(_interopRequireWildcardOrig(namedExports));
    expect(_interopRequireWildcard(namedExports)).toEqual({ ...withNonEnumerableProp, default: namedExports });

    expect(_interopRequireWildcard(withNonEnumerableProp)).toEqual(_interopRequireWildcardOrig(withNonEnumerableProp));
    expect(_interopRequireWildcard(withNonEnumerableProp)).toEqual({ ...withNonEnumerableProp, default: namedExports });

    expect(_interopRequireWildcard(withDefaultExport)).toEqual(_interopRequireWildcardOrig(withDefaultExport));
    expect(_interopRequireWildcard(withDefaultExport)).toEqual({ ...withDefaultExport, default: withDefaultExport });

    expect(_interopRequireWildcard(withOnlyDefaultExport)).toEqual(_interopRequireWildcardOrig(withOnlyDefaultExport));
    expect(_interopRequireWildcard(withOnlyDefaultExport)).toEqual({ default: withOnlyDefaultExport });

    expect(_interopRequireWildcard(exportsEquals as RequireResult)).toEqual(_interopRequireWildcardOrig(exportsEquals));
    expect(_interopRequireWildcard(exportsEquals as RequireResult)).toEqual({ default: exportsEquals });

    expect(_interopRequireWildcard(exportsEqualsWithDefault as unknown as RequireResult)).toEqual(
      _interopRequireWildcardOrig(exportsEqualsWithDefault),
    );
    expect(_interopRequireWildcard(exportsEqualsWithDefault as unknown as RequireResult)).toEqual({
      default: exportsEqualsWithDefault,
    });
  });
});

describe('_interopDefault', () => {
  it('returns the same result as the original', () => {
    expect(_interopDefault(withESModuleFlag)).toEqual(_interopDefaultOrig(withESModuleFlag));
    expect(_interopDefault(withESModuleFlag)).toEqual(undefined);

    expect(_interopDefault(withESModuleFlagAndDefault)).toEqual(_interopDefaultOrig(withESModuleFlagAndDefault));
    expect(_interopDefault(withESModuleFlagAndDefault)).toEqual(withESModuleFlagAndDefault.default);

    expect(_interopDefault(namedExports)).toEqual(_interopDefaultOrig(namedExports));
    expect(_interopDefault(namedExports)).toEqual(namedExports);

    expect(_interopDefault(withNonEnumerableProp)).toEqual(_interopDefaultOrig(withNonEnumerableProp));
    expect(_interopDefault(withNonEnumerableProp)).toEqual(withNonEnumerableProp);

    expect(_interopDefault(withDefaultExport)).toEqual(_interopDefaultOrig(withDefaultExport));
    expect(_interopDefault(withDefaultExport)).toEqual(withDefaultExport);

    expect(_interopDefault(withOnlyDefaultExport)).toEqual(_interopDefaultOrig(withOnlyDefaultExport));
    expect(_interopDefault(withOnlyDefaultExport)).toEqual(withOnlyDefaultExport);

    expect(_interopDefault(exportsEquals as RequireResult)).toEqual(_interopDefaultOrig(exportsEquals));
    expect(_interopDefault(exportsEquals as RequireResult)).toEqual(exportsEquals);

    expect(_interopDefault(exportsEqualsWithDefault as unknown as RequireResult)).toEqual(
      _interopDefaultOrig(exportsEqualsWithDefault),
    );
    expect(_interopDefault(exportsEqualsWithDefault as unknown as RequireResult)).toEqual(exportsEqualsWithDefault);
  });
});

describe('_interopRequireDefault', () => {
  it('returns the same result as the original', () => {
    expect(_interopRequireDefault(withESModuleFlag)).toEqual(_interopRequireDefaultOrig(withESModuleFlag));
    expect(_interopRequireDefault(withESModuleFlag)).toEqual(withESModuleFlag);

    expect(_interopRequireDefault(withESModuleFlagAndDefault)).toEqual(
      _interopRequireDefaultOrig(withESModuleFlagAndDefault),
    );
    expect(_interopRequireDefault(withESModuleFlagAndDefault)).toEqual(withESModuleFlagAndDefault);

    expect(_interopRequireDefault(namedExports)).toEqual(_interopRequireDefaultOrig(namedExports));
    expect(_interopRequireDefault(namedExports)).toEqual({ default: namedExports });

    expect(_interopRequireDefault(withNonEnumerableProp)).toEqual(_interopRequireDefaultOrig(withNonEnumerableProp));
    expect(_interopRequireDefault(withNonEnumerableProp)).toEqual({ default: withNonEnumerableProp });

    expect(_interopRequireDefault(withDefaultExport)).toEqual(_interopRequireDefaultOrig(withDefaultExport));
    expect(_interopRequireDefault(withDefaultExport)).toEqual({ default: withDefaultExport });

    expect(_interopRequireDefault(withOnlyDefaultExport)).toEqual(_interopRequireDefaultOrig(withOnlyDefaultExport));
    expect(_interopRequireDefault(withOnlyDefaultExport)).toEqual({ default: withOnlyDefaultExport });

    expect(_interopRequireDefault(exportsEquals as RequireResult)).toEqual(_interopRequireDefaultOrig(exportsEquals));
    expect(_interopRequireDefault(exportsEquals as RequireResult)).toEqual({ default: exportsEquals });

    expect(_interopRequireDefault(exportsEqualsWithDefault as unknown as RequireResult)).toEqual(
      _interopRequireDefaultOrig(exportsEqualsWithDefault),
    );
    expect(_interopRequireDefault(exportsEqualsWithDefault as unknown as RequireResult)).toEqual({
      default: exportsEqualsWithDefault,
    });
  });
});
