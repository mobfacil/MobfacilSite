import clsx from 'clsx';
import Link from 'next/link';

/**
 * A component meant to be used as a child of LandingHeader.
 * It represents a single navigation item, which can be a link or a button.
 */
export const LandingHeaderMenuItem = ({
  href = '#',
  label = '',
  type = 'link',
  variant = 'primary',
  className,
  children,
}: {
  href?: string;
  label?: string | React.ReactNode;
  type?: 'button' | 'link' | 'icon-button';
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  children?: React.ReactNode;
}) => {
  if (type === 'button' || type === 'icon-button') {
    return (
        <Link href={href}>{label}</Link>
    );
  }

  return (
    <Link
      href={href}
      className={clsx(
        'transition-colors font-medium',
        variant === 'primary'
          ? 'text-white dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-500'
          : 'text-white dark:text-gray-200 hover:text-secondary-500 dark:hover:text-secondary-500',
        className,
      )}
    >
      {children || label}
    </Link>
  );
};
