import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react';
import {
  Bars3Icon,
  BookmarkSquareIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ComputerDesktopIcon,
  CursorArrowRaysIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  NewspaperIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  UserGroupIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const solutions = [
  {
    name: 'Analytics',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: 'Your customers’ data will be safe and secure.',
    href: '#',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: Squares2X2Icon,
  },
];
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'View All Products', href: '#', icon: CheckCircleIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
];
const company = [
  { name: 'About', href: '#', icon: InformationCircleIcon },
  { name: 'Customers', href: '#', icon: BuildingOfficeIcon },
  { name: 'Press', href: '#', icon: NewspaperIcon },
  { name: 'Careers', href: '#', icon: BriefcaseIcon },
  { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
];
const resources = [
  { name: 'Community', href: '#', icon: UserGroupIcon },
  { name: 'Partners', href: '#', icon: GlobeAltIcon },
  { name: 'Guides', href: '#', icon: BookmarkSquareIcon },
  { name: 'Webinars', href: '#', icon: ComputerDesktopIcon },
];
const blogPosts = [
  {
    id: 1,
    name: 'Boost your conversion rate',
    href: '#',
    preview:
      'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80',
  },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
    preview:
      'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80',
  },
];

export function Header() {
  return (
    <Popover className="relative bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-30 shadow"
      />
      <div className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:py-4 md:justify-start md:space-x-10 lg:px-8">
          <div>
            <a href="#" className="flex">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto sm:h-10"
              />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <PopoverButton className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </PopoverButton>
          </div>
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
            <PopoverGroup as="nav" className="flex space-x-10">
              <Popover>
                <PopoverButton className="group inline-flex items-center rounded-md bg-white text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 data-[open]:text-gray-900">
                  <span>Solutions</span>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-data-[open]:text-gray-600 group-data-[open]:group-hover:text-gray-500"
                  />
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute inset-x-0 top-full z-10 hidden transform bg-white shadow-lg transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in md:block"
                >
                  <div className="mx-auto grid max-w-7xl gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex flex-col justify-between rounded-lg p-3 hover:bg-gray-50"
                      >
                        <div className="flex md:h-full lg:flex-col">
                          <div className="flex-shrink-0">
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                              <item.icon
                                aria-hidden="true"
                                className="h-6 w-6"
                              />
                            </span>
                          </div>
                          <div className="ml-4 md:flex md:flex-1 md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                            <div>
                              <p className="text-base font-medium text-gray-900">
                                {item.name}
                              </p>
                              <p className="mt-1 text-sm text-gray-500">
                                {item.description}
                              </p>
                            </div>
                            <p className="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
                              Learn more
                              <span aria-hidden="true"> &rarr;</span>
                            </p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="bg-gray-50">
                    <div className="mx-auto max-w-7xl space-y-6 px-4 py-5 sm:flex sm:space-x-10 sm:space-y-0 sm:px-6 lg:px-8">
                      {callsToAction.map((item) => (
                        <div key={item.name} className="flow-root">
                          <a
                            href={item.href}
                            className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                          >
                            <item.icon
                              aria-hidden="true"
                              className="h-6 w-6 flex-shrink-0 text-gray-400"
                            />
                            <span className="ml-3">{item.name}</span>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </PopoverPanel>
              </Popover>
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Docs
              </a>
              <Popover>
                <PopoverButton className="group inline-flex items-center rounded-md bg-white text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 data-[open]:text-gray-900">
                  <span>More</span>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-data-[open]:text-gray-600 group-data-[open]:group-hover:text-gray-500"
                  />
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute inset-x-0 top-full z-10 hidden transform shadow-lg transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in md:block"
                >
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 bg-white" />
                    <div className="w-1/2 bg-gray-50" />
                  </div>
                  <div className="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                    <nav className="grid gap-y-10 bg-white px-4 py-8 sm:grid-cols-2 sm:gap-x-8 sm:px-6 sm:py-12 lg:px-8 xl:pr-12">
                      <div>
                        <h3 className="text-base font-medium text-gray-500">
                          Company
                        </h3>
                        <ul role="list" className="mt-5 space-y-6">
                          {company.map((item) => (
                            <li key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                              >
                                <item.icon
                                  aria-hidden="true"
                                  className="h-6 w-6 flex-shrink-0 text-gray-400"
                                />
                                <span className="ml-4">{item.name}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-base font-medium text-gray-500">
                          Resources
                        </h3>
                        <ul role="list" className="mt-5 space-y-6">
                          {resources.map((item) => (
                            <li key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                              >
                                <item.icon
                                  aria-hidden="true"
                                  className="h-6 w-6 flex-shrink-0 text-gray-400"
                                />
                                <span className="ml-4">{item.name}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </nav>
                    <div className="bg-gray-50 px-4 py-8 sm:px-6 sm:py-12 lg:px-8 xl:pl-12">
                      <div>
                        <h3 className="text-base font-medium text-gray-500">
                          From the blog
                        </h3>
                        <ul role="list" className="mt-6 space-y-6">
                          {blogPosts.map((post) => (
                            <li key={post.id} className="flow-root">
                              <a
                                href={post.href}
                                className="-m-3 flex rounded-lg p-3 hover:bg-gray-100"
                              >
                                <div className="hidden flex-shrink-0 sm:block">
                                  <img
                                    alt=""
                                    src={post.imageUrl}
                                    className="h-20 w-32 rounded-md object-cover"
                                  />
                                </div>
                                <div className="w-0 flex-1 sm:ml-8">
                                  <h4 className="truncate text-base font-medium text-gray-900">
                                    {post.name}
                                  </h4>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {post.preview}
                                  </p>
                                </div>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-6 text-sm font-medium">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-500"
                        >
                          View all posts
                          <span aria-hidden="true"> &rarr;</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </Popover>
            </PopoverGroup>
            <div className="flex items-center md:ml-12">
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Sign in
              </a>
              <a
                href="#"
                className="ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>

      <PopoverPanel
        transition
        className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in md:hidden"
      >
        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="px-5 pb-6 pt-5 sm:pb-8">
            <div className="flex items-center justify-between">
              <div>
                <img
                  alt="Your Company"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </div>
              <div className="-mr-2">
                <PopoverButton className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </PopoverButton>
              </div>
            </div>
            <div className="mt-6 sm:mt-8">
              <nav>
                <div className="grid gap-7 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                        <item.icon aria-hidden="true" className="h-6 w-6" />
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">
                        {item.name}
                      </div>
                    </a>
                  ))}
                </div>
                <div className="mt-8 text-base">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    View all products
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
          <div className="px-5 py-6">
            <div className="grid grid-cols-2 gap-4">
              <a
                href="#"
                className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Pricing
              </a>
              <a
                href="#"
                className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Docs
              </a>
              <a
                href="#"
                className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Company
              </a>
              <a
                href="#"
                className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Resources
              </a>
              <a
                href="#"
                className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Blog
              </a>
              <a
                href="#"
                className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Contact Sales
              </a>
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Sign up
              </a>
              <p className="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?{' '}
                <a href="#" className="text-indigo-600 hover:text-indigo-500">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  );
}
