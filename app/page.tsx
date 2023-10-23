
import Image from 'next/image'

import Link from 'next/link'
import ProductCard from './components/Product/ProductCard'
import { ClientRequest } from 'http'

export default function Home() {
  return (<main>
    <h1>Hello World</h1>
  <Link href="/users"> Saqib</Link>
  <ProductCard />
  </main>
  
  )
}
