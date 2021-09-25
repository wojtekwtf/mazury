import Shell from '../components/Shell'
import Head from 'next/head'
import PeopleList from '../components/PeopleList'
import PeopleSearch from '../components/PeopleSearch'

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Your referrals', href: '/scores', current: false },
  { name: 'People', href: '/people', current: true },
  { name: 'Jobs', href: '/jobs', current: false },
  { name: 'Refer a friend', href: '/refer', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mazury app</title>
        <link rel="icon" href="/waves.png" />
      </Head>

      <Shell
        navigation={navigation}
        userNavigation={userNavigation}
        header={"People"}
      />
      <main className="-mt-32">
        <div className="mb-5 flex flex-row justify-end w-full px-4 sm:px-6 lg:px-12 -mt-48">
          <div className="w-64">
            <PeopleSearch />
          </div>
        </div>
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow">
            <PeopleList />
          </div>
        </div>
      </main>
    </div>
  )
}
