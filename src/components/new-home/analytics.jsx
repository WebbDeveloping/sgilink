export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 min-w-full flex flex-col items-center justify-center">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 text-center sm:text-5xl">
            Why Choose SGI Link?
          </h2>
          <p className="mt-6 text-base/7 text-gray-600">
            Advanced technology meets intuitive design for the ultimate trading
            experience.
          </p>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end min-w-full">
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:flex-1 lg:flex-col lg:items-start">
            <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">
              AI Powered Trading
            </p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-semibold tracking-tight text-gray-900">
                Our AI-powered trading platform uses advanced algorithms to
                analyze market data and make trading decisions.
              </p>
              <p className="mt-2 text-base/7 text-gray-600">
                The AI-powered trading platform uses advanced algorithms to
                analyze market data and make trading decisions.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:flex-1 lg:flex-col lg:items-start lg:gap-y-44">
            <p className="flex-none text-3xl font-bold tracking-tight text-white">
              Bank-Grade Security
            </p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-semibold tracking-tight text-white">
                Your assets are protected with military-grade encryption and
                security protocols.
              </p>
              <p className="mt-2 text-base/7 text-gray-400">
                Our security protocols are designed to protect your assets from
                hackers and other threats.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-indigo-600 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:flex-1 lg:flex-col lg:items-start lg:gap-y-28">
            <p className="flex-none text-3xl font-bold tracking-tight text-white">
              Real-Time Analysis
            </p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-semibold tracking-tight text-white">
                Get real-time market data and insights to make informed trading
                decisions.
              </p>
              <p className="mt-2 text-base/7 text-indigo-200">
                Our real-time analysis feature provides you with the latest
                market data and insights to help you make informed trading
                decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
