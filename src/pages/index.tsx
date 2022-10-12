import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'
import { EnvelopeIcon } from '@heroicons/react/20/solid'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cora Saúde</title>
        <meta
          name="description"
          content=""
        />
      </Head>

      <Logo className='h-10 w-auto' />
      <Button
        type='submit'
        variant='solid'
        color='white'
        className='w-96'
      >
        <span>
          Sign in <span aria-hidden="true">&rarr;</span>
        </span>
        <EnvelopeIcon className="ml-2 mr-2 h-5 w-5" aria-hidden="true" />
      </Button>
      <Link href="/register">
        <Button color="blue">
          <span>
            Get started <span className="hidden lg:inline">today</span>
          </span>
          <EnvelopeIcon className="ml-2 mr-2 h-5 w-5" aria-hidden="true" />
        </Button>
      </Link>

    </>
  )

}