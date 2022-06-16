/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon, XIcon } from '@heroicons/react/solid'


const plans = [
  {
    title: 'Starter',
    featured: false,
    description: 'All your essential business finances, taken care of.',
    priceMonthly: 5,
    priceYearly: 56,
    mainFeatures: [
      { id: 1, value: 'Basic invoicing' },
      { id: 2, value: 'Easy to use accounting' },
      { id: 3, value: 'Mutli-accounts' },
    ],
  },
  {
    title: 'Scale',
    featured: true,
    description: 'The best financial services for your thriving business.',
    priceMonthly: 19,
    priceYearly: 220,
    mainFeatures: [
      { id: 1, value: 'Advanced invoicing' },
      { id: 2, value: 'Easy to use accounting' },
      { id: 3, value: 'Mutli-accounts' },
      { id: 4, value: 'Tax planning toolkit' },
      { id: 5, value: 'VAT & VATMOSS filing' },
      { id: 6, value: 'Free bank transfers' },
    ],
  },
  {
    title: 'Growth',
    featured: false,
    description: 'Convenient features to take your business to the next level.',
    priceMonthly: 12,
    priceYearly: 140,
    mainFeatures: [
      { id: 1, value: 'Basic invoicing' },
      { id: 2, value: 'Easy to use accounting' },
      { id: 3, value: 'Mutli-accounts' },
      { id: 4, value: 'Tax planning toolkit' },
    ],
  },
]
const features = [
  {
    title: 'Tax Savings',
    tiers: [
      { title: 'starter', value: true },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Easy to use accounting',
    tiers: [
      { title: 'starter', value: true },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Multi-accounts',
    tiers: [
      { title: 'starter', value: '3 accounts' },
      { title: 'popular', featured: true, value: 'Unlimited accounts' },
      { title: 'intermediate', value: '7 accounts' },
    ],
  },
  {
    title: 'Invoicing',
    tiers: [
      { title: 'starter', value: '3 invoices' },
      { title: 'popular', featured: true, value: 'Unlimited invoices' },
      { title: 'intermediate', value: '10 invoices' },
    ],
  },
  {
    title: 'Exclusive offers',
    tiers: [
      { title: 'starter', value: false },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: '6 months free advisor',
    tiers: [
      { title: 'starter', value: false },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Mobile and web access',
    tiers: [
      { title: 'starter', value: false },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: false },
    ],
  },
]
const perks = [
  {
    title: '24/7 customer support',
    tiers: [
      { title: 'starter', value: true },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Instant notifications',
    tiers: [
      { title: 'starter', value: true },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Budgeting tools',
    tiers: [
      { title: 'starter', value: true },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Digital receipts',
    tiers: [
      { title: 'starter', value: true },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Pots to separate money',
    tiers: [
      { title: 'starter', value: false },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Free bank transfers',
    tiers: [
      { title: 'starter', value: false },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: false },
    ],
  },
  {
    title: 'Business debit card',
    tiers: [
      { title: 'starter', value: false },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: false },
    ],
  },
]
const faqs = [
  {
    id: 1,
    question: "WooCommerce with shortcodes: Easy integration into WordPress?",
    answer:
      "WooCommerce shortcodes are short commands in square brackets. They are handy and effective when customizing the design of an online shop with WooCommerce. Shortcodes make the work a lot easier. How exactly do they help you to control the processes in your online shop? What sources of error are there?Which additional WooCommerce shortcode plugins are available for WordPress?.",
  },
  {
    id: 2,
    question: "Backlink building: how to generate strong backlinks?",
    answer:
      "Building backlinks is a part of search engine optimization. Google rates links leading to a site as recommendations and thus as an indication of their relevance to users. In addition to quantity, the quality of backlinks is included in this evaluation. Our article reveals how to generate strong backlinks and which mistakes to look out for to avoid being penalized by Google..",
  },
  {
    id: 3,
    question: "How to enable dark mode for Google Chrome?",
    answer:
      "Google Chrome’s dark mode, also known as Chrome night mode, is available from Version 74 of the browser onwards and can be enabled on all devices. You can use Chrome dark mode on all computers running Windows or macOS operating systems, as well as on smartphones running iOS or Android. It can be enabled manually or automatically..",
  },
  {
    id: 4,
    question: "How to backup Windows 11?",
    answer:
      "Don’t leave anything to chance when it comes to private or business files. Take precautions against possible data loss by regularly backing up photos, videos, documents, etc. Find out how to create a backup of the entire system or specific files or directories and folders in Windows 11.",
  },
  // More questions...
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="bg-gray-50">

      <main>
        {/* Pricing section */}
        <div>
          <div className="relative 
          bg-gradient-to-r from-[#01069d] via-blue-900 to-[#00084d]">
            {/* Overlapping background */}
            <div aria-hidden="true" className="hidden absolute bg-gray-50 w-full h-6 bottom-0 lg:block" />

            <div className="relative max-w-2xl mx-auto pt-16 px-4 text-center sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                <span className="block lg:inline">Simple pricing,</span>
                <span className="block lg:inline">no commitment.</span>
              </h1>
              <p className="mt-4 text-xl text-indigo-100">
                Everything you need, nothing you don't. Pick a plan that best suits your business.
              </p>
            </div>

            <h2 className="sr-only">Plans</h2>

            {/* Toggle */}
            <div className="relative mt-12 flex justify-center sm:mt-16">
              <div className="bg-[#00084d] p-0.5 rounded-lg flex">
                <button
                  type="button"
                  className="relative bg-white py-2 px-6 border-indigo-700 rounded-md shadow-sm text-sm font-medium text-indigo-700 whitespace-nowrap hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:z-10"
                >
                  Monthly billing
                </button>
                <button
                  type="button"
                  className="ml-0.5 relative py-2 px-6 border border-transparent rounded-md text-sm font-medium text-indigo-200 whitespace-nowrap hover:bg-[#00084d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:z-10"
                >
                  Yearly billing
                </button>
              </div>
            </div>

            {/* Cards */}
            <div className="relative mt-8 max-w-2xl mx-auto px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0">
              {/* Decorative background */}
              <div
                aria-hidden="true"
                className="hidden absolute top-4 bottom-6 left-8 right-8 inset-0 bg-indigo-700 rounded-tl-lg rounded-tr-lg lg:block"
              />

              <div className="relative space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3">
                {plans.map((plan) => (
                  <div
                    key={plan.title}
                    className={classNames(
                      plan.featured ? 'bg-white ring-2 ring-indigo-700 shadow-md' : 'bg-[#00084d]"lg:bg-transparent',
                      'pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12'
                    )}
                  >
                    <div>
                      <h3
                        className={classNames(
                          plan.featured ? 'text-indigo-600' : 'text-white',
                          'text-sm font-semibold uppercase tracking-wide'
                        )}
                      >
                        {plan.title}
                      </h3>
                      <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                        <div className="mt-3 flex items-center">
                          <p
                            className={classNames(
                              plan.featured ? 'text-indigo-600' : 'text-white',
                              'text-4xl font-extrabold tracking-tight'
                            )}
                          >
                            N${plan.priceMonthly}
                          </p>
                          <div className="ml-4">
                            <p className={classNames(plan.featured ? 'text-gray-700' : 'text-white', 'text-sm')}>
                              USD / mo
                            </p>
                            <p className={classNames(plan.featured ? 'text-gray-500' : 'text-indigo-200', 'text-sm')}>
                              Billed yearly (N${plan.priceYearly})
                            </p>
                          </div>
                        </div>
                        <a
                          href="#"
                          className={classNames(
                            plan.featured
                              ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                              : 'bg-white text-indigo-600 hover:bg-indigo-50',
                            'mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full'
                          )}
                        >
                          Buy {plan.title}
                        </a>
                      </div>
                    </div>
                    <h4 className="sr-only">Features</h4>
                    <ul
                      role="list"
                      className={classNames(
                        plan.featured
                          ? 'border-gray-200 divide-gray-200'
                          : 'border-indigo-500 divide-indigo-500 divide-opacity-75',
                        'mt-7 border-t divide-y lg:border-t-0'
                      )}
                    >
                      {plan.mainFeatures.map((mainFeature) => (
                        <li key={mainFeature.id} className="py-3 flex items-center">
                          <CheckIcon
                            className={classNames(
                              plan.featured ? 'text-indigo-500' : 'text-indigo-200',
                              'w-5 h-5 flex-shrink-0'
                            )}
                            aria-hidden="true"
                          />
                          <span
                            className={classNames(
                              plan.featured ? 'text-gray-600' : 'text-white',
                              'ml-4 text-sm font-medium'
                            )}
                          >
                            {mainFeature.value}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature comparison */}
          <section aria-labelledby="mobile-comparison-heading" className="lg:hidden">
            <h2 id="mobile-comparison-heading" className="sr-only">
              Feature comparison
            </h2>

            <div className="mt-16 max-w-2xl mx-auto px-4 space-y-16 sm:px-6">
              {plans.map((plan, planIndex) => (
                <div key={plan.title} className="border-t border-gray-200">
                  <div
                    className={classNames(
                      plan.featured ? 'border-indigo-600' : 'border-transparent',
                      '-mt-px pt-6 border-t-2 sm:w-1/2'
                    )}
                  >
                    <h3
                      className={classNames(plan.featured ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-bold')}
                    >
                      {plan.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
                  </div>
                  <h4 className="mt-10 text-sm font-bold text-gray-900">Catered for business</h4>

                  <div className="mt-6 relative">
                    {/* Fake card background */}
                    <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                      <div
                        className={classNames(
                          plan.featured ? 'shadow-md' : 'shadow',
                          'absolute right-0 w-1/2 h-full bg-white rounded-lg'
                        )}
                      />
                    </div>

                    <div
                      className={classNames(
                        plan.featured ? 'ring-2 ring-indigo-600 shadow-md' : 'ring-1 ring-black ring-opacity-5 shadow',
                        'relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none'
                      )}
                    >
                      <dl className="divide-y divide-gray-200">
                        {features.map((feature) => (
                          <div
                            key={feature.title}
                            className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2"
                          >
                            <dt className="pr-4 text-sm font-medium text-gray-600">{feature.title}</dt>
                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                              {typeof feature.tiers[planIndex].value === 'string' ? (
                                <span
                                  className={classNames(
                                    feature.tiers[planIndex].featured ? 'text-indigo-600' : 'text-gray-900',
                                    'text-sm font-medium'
                                  )}
                                >
                                  {feature.tiers[planIndex].value}
                                </span>
                              ) : (
                                <>
                                  {feature.tiers[planIndex].value === true ? (
                                    <CheckIcon className="mx-auto h-5 w-5 text-indigo-600" aria-hidden="true" />
                                  ) : (
                                    <XIcon className="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                                  )}

                                  <span className="sr-only">
                                    {feature.tiers[planIndex].value === true ? 'Yes' : 'No'}
                                  </span>
                                </>
                              )}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    {/* Fake card border */}
                    <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                      <div
                        className={classNames(
                          plan.featured ? 'ring-2 ring-indigo-600' : 'ring-1 ring-black ring-opacity-5',
                          'absolute right-0 w-1/2 h-full rounded-lg'
                        )}
                      />
                    </div>
                  </div>

                  <h4 className="mt-10 text-sm font-bold text-gray-900">Other perks</h4>

                  <div className="mt-6 relative">
                    {/* Fake card background */}
                    <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                      <div
                        className={classNames(
                          plan.featured ? 'shadow-md' : 'shadow',
                          'absolute right-0 w-1/2 h-full bg-white rounded-lg'
                        )}
                      />
                    </div>

                    <div
                      className={classNames(
                        plan.featured ? 'ring-2 ring-indigo-600 shadow-md' : 'ring-1 ring-black ring-opacity-5 shadow',
                        'relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none'
                      )}
                    >
                      <dl className="divide-y divide-gray-200">
                        {perks.map((perk) => (
                          <div key={perk.title} className="py-3 flex justify-between sm:grid sm:grid-cols-2">
                            <dt className="text-sm font-medium text-gray-600 sm:pr-4">{perk.title}</dt>
                            <dd className="text-center sm:px-4">
                              {perk.tiers[planIndex].value === true ? (
                                <CheckIcon className="mx-auto h-5 w-5 text-indigo-600" aria-hidden="true" />
                              ) : (
                                <XIcon className="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                              )}

                              <span className="sr-only">{perk.tiers[planIndex].value === true ? 'Yes' : 'No'}</span>
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    {/* Fake card border */}
                    <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                      <div
                        className={classNames(
                          plan.featured ? 'ring-2 ring-indigo-600' : 'ring-1 ring-black ring-opacity-5',
                          'absolute right-0 w-1/2 h-full rounded-lg'
                        )}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="comparison-heading" className="hidden lg:block">
            <h2 id="comparison-heading" className="sr-only">
              Feature comparison
            </h2>

            <div className="mt-24 max-w-7xl mx-auto px-8">
              <div className="w-full border-t border-gray-200 flex items-stretch">
                <div className="-mt-px w-1/4 py-6 pr-4 flex items-end">
                  <h3 className="mt-auto text-sm font-bold text-gray-900">Catered for business</h3>
                </div>
                {plans.map((plan, index) => (
                  <div
                    key={plan.title}
                    aria-hidden="true"
                    className={classNames(index === plans.length - 1 ? '' : 'pr-4', '-mt-px pl-4 w-1/4')}
                  >
                    <div
                      className={classNames(
                        plan.featured ? 'border-indigo-600' : 'border-transparent',
                        'py-6 border-t-2'
                      )}
                    >
                      <p
                        className={classNames(plan.featured ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-bold')}
                      >
                        {plan.title}
                      </p>
                      <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative">
                {/* Fake card backgrounds */}
                <div className="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
                  <div className="w-1/4 pr-4" />
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full bg-white rounded-lg shadow" />
                  </div>
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full bg-white rounded-lg shadow-md" />
                  </div>
                  <div className="w-1/4 pl-4">
                    <div className="w-full h-full bg-white rounded-lg shadow" />
                  </div>
                </div>

                <table className="relative w-full">
                  <caption className="sr-only">Business feature comparison</caption>
                  <thead>
                    <tr className="text-left">
                      <th scope="col">
                        <span className="sr-only">Feature</span>
                      </th>
                      {plans.map((plan) => (
                        <th key={plan.title} scope="col">
                          <span className="sr-only">{plan.title} plan</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {features.map((feature) => (
                      <tr key={feature.title}>
                        <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">
                          {feature.title}
                        </th>
                        {feature.tiers.map((tier, index) => (
                          <td
                            key={tier.title}
                            className={classNames(
                              index === feature.tiers.length - 1 ? 'pl-4' : 'px-4',
                              'relative w-1/4 py-0 text-center'
                            )}
                          >
                            <span className="relative w-full h-full py-3">
                              {typeof tier.value === 'string' ? (
                                <span
                                  className={classNames(
                                    tier.featured ? 'text-indigo-600' : 'text-gray-900',
                                    'text-sm font-medium'
                                  )}
                                >
                                  {tier.value}
                                </span>
                              ) : (
                                <>
                                  {tier.value === true ? (
                                    <CheckIcon className="mx-auto h-5 w-5 text-indigo-600" aria-hidden="true" />
                                  ) : (
                                    <XIcon className="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                                  )}

                                  <span className="sr-only">{tier.value === true ? 'Yes' : 'No'}</span>
                                </>
                              )}
                            </span>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Fake card borders */}
                <div className="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
                  <div className="w-1/4 pr-4" />
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
                  </div>
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full rounded-lg ring-2 ring-indigo-600 ring-opacity-100" />
                  </div>
                  <div className="w-1/4 pl-4">
                    <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
                  </div>
                </div>
              </div>

              <h3 className="mt-10 text-sm font-bold text-gray-900">Other perks</h3>

              <div className="mt-6 relative">
                {/* Fake card backgrounds */}
                <div className="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
                  <div className="w-1/4 pr-4" />
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full bg-white rounded-lg shadow" />
                  </div>
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full bg-white rounded-lg shadow-md" />
                  </div>
                  <div className="w-1/4 pl-4">
                    <div className="w-full h-full bg-white rounded-lg shadow" />
                  </div>
                </div>

                <table className="relative w-full">
                  <caption className="sr-only">Perk comparison</caption>
                  <thead>
                    <tr className="text-left">
                      <th scope="col">
                        <span className="sr-only">Perk</span>
                      </th>
                      {plans.map((plan) => (
                        <th key={plan.title} scope="col">
                          <span className="sr-only">{plan.title} plan</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {perks.map((perk) => (
                      <tr key={perk.title}>
                        <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">
                          {perk.title}
                        </th>
                        {perk.tiers.map((tier, index) => (
                          <td
                            key={tier.title}
                            className={classNames(
                              index === perk.tiers.length - 1 ? 'pl-4' : 'px-4',
                              'relative w-1/4 py-0 text-center'
                            )}
                          >
                            <span className="relative w-full h-full py-3">
                              {tier.value === true ? (
                                <CheckIcon className="mx-auto h-5 w-5 text-indigo-600" aria-hidden="true" />
                              ) : (
                                <XIcon className="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                              )}

                              <span className="sr-only">{tier.value === true ? 'Yes' : 'No'}</span>
                            </span>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Fake card borders */}
                <div className="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
                  <div className="w-1/4 pr-4" />
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
                  </div>
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full rounded-lg ring-2 ring-indigo-600 ring-opacity-100" />
                  </div>
                  <div className="w-1/4 pl-4">
                    <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Logo cloud */}
        <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                alt="StaticKit"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                alt="Transistor"
              />
            </div>
            <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                alt="Workcation"
              />
            </div>
          </div>
        </div>

        {/* FAQs */}
        <section aria-labelledby="faq-heading" className="bg-gray-900">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="max-w-2xl lg:mx-auto lg:text-center">
              <h2 id="faq-heading" className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-gray-400">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla
                nec. Urna, sed a lectus elementum blandit et.
              </p>
            </div>
            <div className=" w-full flex justify-center items-center ">
                <div>
            <div className="mt-5">
              <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
                {faqs.map((faq) => (
                  <div key={faq.id}>
                    <dt className="font-semibold text-white">{faq.question}</dt>
                    <dd className="mt-3 text-gray-400">{faq.answer}</dd>
                  </div>
                ))}
              </dl>
              
            
                </div>
                
            </div>

            </div>
          </div>
        </section>

        
      </main>
    </div>
  )
}
