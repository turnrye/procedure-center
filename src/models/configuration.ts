import { Contact } from './contact';
import { ProtocolGroup } from './protocol-group';
import { Metadata } from './metadata';
export class Configuration {
  contacts: Contact[];
  protocolGroups: ProtocolGroup[];
  metadata: Metadata;

  getContactTagNames() {
    var tags: string[] = [];
    for (let contact of this.contacts) {
      tags = tags.concat(contact.tags);
    }
    var uniqueTags = tags.filter(function(item, pos, self) {
      return self.indexOf(item) === pos;
    });
    return uniqueTags;
  }

  getFilteredContacts(tags: string[]): Contact[] {
    if(tags.length > 0) {
      var filteredContacts = this.contacts;
      for (let tag of tags) {
        filteredContacts = filteredContacts.filter(function(item, pos, self) {
          return item.tags.indexOf(tag) !== -1;
        });
      }
      return filteredContacts;
    } else {
      return this.contacts;
    }
  }
}
