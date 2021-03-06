import React from 'react';
import cx from 'classnames';
import styles from 'components/Text/text.module.scss';

interface ITextProps {
  type: 'heading1' | 'heading2' | 'heading3' | 'large' | 'regular' | 'small';
  children: React.ReactNode;
  color?: 'heading' | 'body' | 'white' | null;
  weight?: 'heading' | 'body' | null;
  className?: string;
}

function Text({ type, children, color, weight, className }: ITextProps) {
  return type.match(/^heading/) ? (
    <h1
      className={cx(
        className,
        styles[type],
        color && styles[`color-${color}`],
        weight && styles[`weight-${weight}`]
      )}
    >
      {children}
    </h1>
  ) : (
    <span
      className={cx(
        className,
        styles[type],
        color && styles[`color-${color}`],
        weight && styles[`weight-${weight}`]
      )}
    >
      {children}
    </span>
  );
}

export default Text;
