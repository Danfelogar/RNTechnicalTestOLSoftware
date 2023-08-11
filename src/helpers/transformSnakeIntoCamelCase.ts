export default function transformSnakeIntoCamelCase(obj: Record<string, any>) {
  const keyToCamelCase = (key: string) => {
    return key.split('_').reduce((acc, it, index) => {
      return (
        acc +
        (index > 0
          ? `${it[0].toUpperCase()}${it.slice(1).toLowerCase()}`
          : it.toLowerCase())
      );
    }, '');
  };
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => {
      const entry: [string, any] = [keyToCamelCase(key), null];

      /**
       * Value is a object
       */
      if (typeof value === 'object' && !Array.isArray(value)) {
        entry[1] = transformSnakeIntoCamelCase(value);
        /**
         * Value is a Array
         */
      } else if (
        typeof value === 'object' &&
        Array.isArray(value) &&
        typeof value[0] === 'object'
      ) {
        entry[1] = value.map(transformSnakeIntoCamelCase);

        /**
         * Value is a number or string or boolean etc... is a primitive type
         */
      } else {
        entry[1] = value;
      }

      return entry;
    }),
  );
}

export function objectToArrayWithObjects(obj: Record<string, any>): any[] {
  return Object.values(obj);
}
