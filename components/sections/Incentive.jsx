/* This example requires Tailwind CSS v2.0+ */
const incentives = [
    {
      name: 'Lighting speed servers',
      description: "You can get more speed with Hostinger. Approved by industry experts.",
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg',
    },
    {
      name: '24/7 Customer Support',
      description: 'Our tech support team is here to help you 24/7/365.',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg',
    },
    {
      name: 'Fast Shopping Cart',
      description: "We accpet all kind of payment methods through our customers",
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-fast-checkout-light.svg',
    },
    {
      name: 'Discount',
      description: "we give a big discount when you pay yearly subscriptions",
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg',
    },
  ]
  
  export default function Example() {
    return (
      <div className="bg-gray-50">
        <div className="max-w-2xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
            {incentives.map((incentive) => (
              <div key={incentive.name}>
                <img src={incentive.imageSrc} alt="" className="h-24 w-auto" />
                <h3 className="mt-6 text-sm font-medium text-gray-900">{incentive.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  