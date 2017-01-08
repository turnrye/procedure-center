import { StandingOrders } from './standing-orders';

export class Protocol {
  id: string;
  name: string;
  preamble: string;
  standingOrders: StandingOrders;
  notes: string;
}
