import { CartCounter } from '@/shopping-cart';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shopping cart',
  description: 'a simple counter',
}

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      
      <CartCounter />

    </div>

  );
}