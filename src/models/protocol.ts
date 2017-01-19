import { StandingOrders } from './standing-orders';

export class Protocol {
  id: string;
  name: string;
  assessments: string;
  preamble: string;
  standingOrders: StandingOrders;
  notes: string;
  indications: string;
  contraindications: string;
}
