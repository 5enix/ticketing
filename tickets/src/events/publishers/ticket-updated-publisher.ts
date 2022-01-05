import { Publisher, Subjects, TicketUpdatedEvent } from '@aaaticketing/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
