import { lazy } from 'react'

const TheFooter = lazy(() => import('~/components/TheFooter'))
const ValueTable = lazy(() => import('~/components/ValueTable'))

export default function App() {
  return (
    <>
      <main className="font-bold font-sans text-center bg-gray:10 min-h-100vh min-w-100vw">
        <div pt-10>
          <div className="ma flex w-fit items-center">
            <ValueTable />
            <div ml-10>
              <div className="flex gap-2 w-fit justify-center">
                <span className="i-ic:round-not-equal color-green h-6 w-6 inline-block" />
                <span>不相等</span>
              </div>
              <div className="flex gap-2 w-fit justify-center">
                <span className="i-mdi:approximately-equal color-blue h-6 w-6 inline-block" />
                <span>宽松相等</span>
              </div>
              <div className="flex gap-2 w-fit justify-center">
                <span className="i-ic:round-equals color-red h-6 w-6 inline-block" />
                <span>严格相等</span>
              </div>
            </div>
          </div>
          <TheFooter />
        </div>
      </main>
    </>
  )
}
