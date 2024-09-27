import { Metadata } from 'next';
import HomePage from '@/components/HomePage'

export const metadata: Metadata = {
  title: 'Blink Hippo',
  description: 'Connect and play',
};

export default function Home() {
  return <HomePage />
}
