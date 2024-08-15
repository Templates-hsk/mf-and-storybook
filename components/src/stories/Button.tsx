import * as Headless from '@headlessui/react';
import clsx from 'clsx';
import React, { forwardRef, Ref } from 'react';
import { Link } from './Link';

// Define the types for the `color` and `variant` props
type ButtonColor =
  | 'dark/zinc'
  | 'light'
  | 'dark/white'
  | 'dark'
  | 'white'
  | 'zinc'
  | 'indigo'
  | 'cyan'
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'sky'
  | 'blue'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'pink'
  | 'rose';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  outline?: boolean;
  plain?: boolean;
  className?: string;
  href?: string; // Make `href` optional to align with Link component usage
}

// Define the styles object with specific types
const styles = {
  base: [
    'relative isolate inline-flex items-center justify-center gap-x-2 rounded-lg border text-base/6 font-semibold',
    'px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] sm:text-sm/6',
    'focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500',
    'data-[disabled]:opacity-50',
    '[&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:my-0.5 [&>[data-slot=icon]]:size-5 [&>[data-slot=icon]]:shrink-0 [&>[data-slot=icon]]:text-[--btn-icon] [&>[data-slot=icon]]:sm:my-1 [&>[data-slot=icon]]:sm:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:data-[hover]:[--btn-icon:ButtonText]',
  ],
  solid: [
    'border-transparent bg-[--btn-border]',
    'dark:bg-[--btn-bg]',
    'before:absolute before:inset-0 before:-z-10 before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-[--btn-bg]',
    'before:shadow',
    'dark:before:hidden',
    'dark:border-white/5',
    'after:absolute after:inset-0 after:-z-10 after:rounded-[calc(theme(borderRadius.lg)-1px)]',
    'after:shadow-[shadow:inset_0_1px_theme(colors.white/15%)]',
    'after:data-[active]:bg-[--btn-hover-overlay] after:data-[hover]:bg-[--btn-hover-overlay]',
    'dark:after:-inset-px dark:after:rounded-lg',
    'before:data-[disabled]:shadow-none after:data-[disabled]:shadow-none',
  ],
  outline: [
    'border-zinc-950/10 text-zinc-950 data-[active]:bg-zinc-950/[2.5%] data-[hover]:bg-zinc-950/[2.5%]',
    'dark:border-white/15 dark:text-white dark:[--btn-bg:transparent] dark:data-[active]:bg-white/5 dark:data-[hover]:bg-white/5',
    '[--btn-icon:theme(colors.zinc.500)] data-[active]:[--btn-icon:theme(colors.zinc.700)] data-[hover]:[--btn-icon:theme(colors.zinc.700)] dark:data-[active]:[--btn-icon:theme(colors.zinc.400)] dark:data-[hover]:[--btn-icon:theme(colors.zinc.400)]',
  ],
  plain: [
    'border-transparent text-zinc-950 data-[active]:bg-zinc-950/5 data-[hover]:bg-zinc-950/5',
    'dark:text-white dark:data-[active]:bg-white/10 dark:data-[hover]:bg-white/10',
    '[--btn-icon:theme(colors.zinc.500)] data-[active]:[--btn-icon:theme(colors.zinc.700)] data-[hover]:[--btn-icon:theme(colors.zinc.700)] dark:[--btn-icon:theme(colors.zinc.500)] dark:data-[active]:[--btn-icon:theme(colors.zinc.400)] dark:data-[hover]:[--btn-icon:theme(colors.zinc.400)]',
  ],
  colors: {
    // Define color styles similarly to your original code
  },
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { color = 'dark/zinc', outline, plain, className, children, ...props },
    ref,
  ) {
    let classes = clsx(
      className,
      styles.base,
      outline
        ? styles.outline
        : plain
          ? styles.plain
          : clsx(styles.solid, styles.colors[color]),
    );

    return 'href' in props ? (
      <Link {...props} className={classes} ref={ref as Ref<HTMLAnchorElement>}>
        <TouchTarget>{children}</TouchTarget>
      </Link>
    ) : (
      <Headless.Button
        {...props}
        className={clsx(classes, 'cursor-default')}
        ref={ref as Ref<HTMLButtonElement>}
      >
        <TouchTarget>{children}</TouchTarget>
      </Headless.Button>
    );
  },
);

interface TouchTargetProps {
  children: React.ReactNode;
}

export function TouchTarget({ children }: TouchTargetProps) {
  return (
    <>
      <span
        className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
        aria-hidden="true"
      />
      {children}
    </>
  );
}
