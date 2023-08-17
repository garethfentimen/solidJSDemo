import { createSignal, onCleanup } from "solid-js";
import { ConnectionService } from '../service/connections.service';

export async function usePrices() {
  const [prices, setPrice] = createSignal({});
  
  const client = await new ConnectionService().connect();
  client.subscribe('/livestream/' + 'ACME', (tickUpdate) => {
    console.log(tickUpdate);
    setPrice(tickUpdate);
  });
  onCleanup(() => client.close());
  
  return prices;
}