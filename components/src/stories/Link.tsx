/**
 * TODO: Update this component to use your client-side framework's link
 * component. We've provided examples of how to do this for Next.js, Remix, and
 * Inertia.js in the Catalyst documentation:
 *
 * https://catalyst.tailwindui.com/docs#client-side-router-integration
 */

import * as Headless from '@headlessui/react';

// The error you're encountering in your TypeScript code suggests that there is a type mismatch between the `ref` you are passing and the expected `ref` type for the `<a>` element. Specifically, `ForwardedRef<unknown>` is not being correctly assigned to `LegacyRef<HTMLAnchorElement> | undefined`. Let's break down how to address this issue.

// Here's a simplified explanation and a potential solution:

// ### Explanation

// 1. **Type Mismatch**: The error indicates that `ForwardedRef<unknown>` is not compatible with `LegacyRef<HTMLAnchorElement> | undefined`. The `ref` type `ForwardedRef<unknown>` is not correctly understood by TypeScript to match `LegacyRef<HTMLAnchorElement>`, which expects `HTMLAnchorElement | null`.

// 2. **Ref Type**: `ForwardedRef` is used with `React.forwardRef`, and it can be a `RefObject`, `CallbackRef`, or `undefined`. If the generic type is `unknown`, TypeScript is not able to ensure that it matches the expected `HTMLAnchorElement | null`.

// ### Solution

// To resolve this issue, you need to make sure that the `ref` is typed correctly. Here’s how you can adjust your code:

// 1. **Type the Ref Correctly**: Ensure that you specify the correct type for the `ref` in your `React.forwardRef` function.

// 2. **Update the Component**: Make sure the `ref` passed to the `<a>` element is correctly typed as `Ref<HTMLAnchorElement>`.

// Here's a refactored example of your component:

// ```tsx
import React, { forwardRef, Ref } from 'react';

// Define the props type
interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  // Add any additional props if needed
}

// ForwardRef component with correct typing
const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref: Ref<HTMLAnchorElement>) => {
    return (
      <Headless.DataInteractive>
        <a {...props} ref={ref} />
      </Headless.DataInteractive>
    );
  },
);

// ```

// ### Key Points:

// 1. **ForwardRef Typing**: By specifying `HTMLAnchorElement` for the `ref` type in `forwardRef`, you ensure that TypeScript understands the type of the `ref` correctly.

// 2. **Props Typing**: Extend the `React.AnchorHTMLAttributes<HTMLAnchorElement>` to include standard anchor tag attributes, which ensures that the `props` are correctly typed for the `<a>` element.

// 3. **Ref Typing**: Use `Ref<HTMLAnchorElement>` for the `ref` parameter in `forwardRef` to match the expected type.

// This should address the type error you are seeing and ensure that TypeScript can properly type check the `ref` in your component.
