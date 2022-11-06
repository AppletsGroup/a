import {
  BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  GlobeAltIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline'

import { MetaTags } from '@redwoodjs/web'

const features = [
  {
    name: 'Open Source',
    description: 'All your data, under your control.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Quickly Note',
    description: 'Note you thoughts asap.',
    icon: ScaleIcon,
  },
  {
    name: 'Easy Share',
    description: 'Share thoughts with others anywhere.',
    icon: BoltIcon,
  },
  {
    name: 'Earn Money',
    description: 'Turn your audience into a business.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
]

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-lg font-semibold text-indigo-600">
              Build with WEB5
            </h2>
            <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              A freedom app for creator
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              A is a powerful app help creators focus on writing and sharing. It
              comes with modern tools to build a website, publish content, send
              newsletters & offer paid subscriptions to members.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
