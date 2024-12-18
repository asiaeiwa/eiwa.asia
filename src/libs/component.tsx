import { Fragment } from 'react';

type MapModifiersModifier = string | false | null | undefined | MapModifiersModifier[];

function generateModifierClassNameArray(
  baseClassName: string,
  styles: { [key: string]: string },
  ...modifiers: MapModifiersModifier[]
): string[] {
  let classNameArray: string[] = [];
  for (const modifier of modifiers) {
    if (Array.isArray(modifier)) {
      classNameArray = classNameArray.concat(generateModifierClassNameArray(baseClassName, styles, ...modifier));
    } else if (typeof modifier === 'string' && modifier.length > 0) {
      styles[`${baseClassName}--${modifier}`] && classNameArray.push(styles[`${baseClassName}--${modifier}`]);
    }
  }
  return classNameArray;
}

/**
 * Generate `className` from base class name and modifiers, based on MindBEMing.
 */
export function mapModifiers(
  baseClassName: string,
  styles: { [key: string]: string },
  ...modifiers: MapModifiersModifier[]
): string {
  return styles && styles[baseClassName]
    ? (
        styles[baseClassName] +
        ' ' +
        generateModifierClassNameArray(baseClassName, styles, ...modifiers)
          .join(' ')
          .trim()
      ).trim()
    : '';
}

export type ModifierProp<M extends string> = M | M[];

export const mapClassnames = (...arraysString: Array<string | boolean | undefined>): string | undefined => {
  const c = arraysString
    .filter(item => !!item)
    .join(' ')
    .trim();
  return c || undefined;
};

export const templateLocale = (value?: string) => {
  if (!value) return null;

  const splitArray = value.split('\n');
  return splitArray.map((item, index) => (
    <Fragment key={index}>
      {index > 0 && <br />}
      {item}
    </Fragment>
  ));
};
