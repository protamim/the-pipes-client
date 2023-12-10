"use client";
import { Card } from "flowbite-react";
import { BsCheckCircleFill } from "react-icons/bs";

const PricePlan = () => {
  return (
    <>
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-5">
          <div className="grid gap-8 grid-cols-12">
            <div className="col-span-12 text-center space-y-6">
              <h5>PRICING TABLE</h5>
              <h2 className="text-5xl">Our Price Plans</h2>
            </div>
            {/* Plan 1 */}
            <Card className="col-span-12 md:col-span-4">
              <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                Design Consulting
              </h5>
              <div className="flex items-baseline text-gray-900 dark:text-white">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-5xl font-extrabold tracking-tight">
                  49
                </span>
                <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                  /month
                </span>
              </div>
              <ul className="my-7 space-y-5">
                <li className="flex space-x-3">
                  <BsCheckCircleFill
                    fill="currentColor"
                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                  />
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    Bathroom remodeling
                  </span>
                </li>
                <li className="flex space-x-3">
                  <BsCheckCircleFill
                    fill="currentColor"
                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                  />
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    Full home construction repair
                  </span>
                </li>

                <li className="flex space-x-3 line-through decoration-gray-500">
                  <BsCheckCircleFill
                    fill="currentColor"
                    className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                  />
                  <span className="text-base font-normal leading-tight text-gray-500">
                    Plumbing services
                  </span>
                </li>
              </ul>
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
              >
                Get Now
              </button>
            </Card>
            {/* Plan 2 */}
            <Card className="col-span-12 md:col-span-4">
              <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                Home Maintenance
              </h5>
              <div className="flex items-baseline text-gray-900 dark:text-white">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-5xl font-extrabold tracking-tight">
                  149
                </span>
                <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                  /month
                </span>
              </div>
              <ul className="my-7 space-y-5">
                <li className="flex space-x-3">
                  <BsCheckCircleFill
                    fill="currentColor"
                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                  />
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    Regular check-ups
                  </span>
                </li>
                <li className="flex space-x-3">
                  <BsCheckCircleFill
                    fill="currentColor"
                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                  />
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    Roof and flooring repairs
                  </span>
                </li>

                <li className="flex space-x-3 line-through decoration-gray-500">
                  <BsCheckCircleFill
                    fill="currentColor"
                    className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                  />
                  <span className="text-base font-normal leading-tight text-gray-500">
                    Pipes replacement
                  </span>
                </li>
              </ul>
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
              >
                Get Now
              </button>
            </Card>
            {/* Plan 3 */}
            <Card className="col-span-12 md:col-span-4">
              <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                Repair Deal
              </h5>
              <div className="flex items-baseline text-gray-900 dark:text-white">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-5xl font-extrabold tracking-tight">
                  99.99
                </span>
                <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                  /month
                </span>
              </div>
              <ul className="my-7 space-y-5">
                <li className="flex space-x-3">
                  <BsCheckCircleFill
                    fill="currentColor"
                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                  />
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    Emergency cases
                  </span>
                </li>
                <li className="flex space-x-3">
                  <BsCheckCircleFill
                    fill="currentColor"
                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                  />
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    Bathroom & toilet repairs
                  </span>
                </li>

                <li className="flex space-x-3 line-through decoration-gray-500">
                  <BsCheckCircleFill
                    fill="currentColor"
                    className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                  />
                  <span className="text-base font-normal leading-tight text-gray-500">
                    Fixture maintenance
                  </span>
                </li>
              </ul>
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
              >
                Get Now
              </button>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricePlan;
