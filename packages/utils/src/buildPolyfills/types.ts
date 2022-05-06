// export type RequireResult = Record<string, unknown> | (((...args: unknown[]) => unknown) & Record<string, unknown>);
export type GenericObject = { [key: string]: unknown };
export type GenericFunction = (...args: unknown[]) => unknown;

export type RequireResult = GenericObject | (GenericFunction & GenericObject);
// export type RequireResult = GenericObject | GenericFunction | (GenericFunction & GenericObject);
