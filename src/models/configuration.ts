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

  getProtocolGroupsWithFilter(searchTerm: string): ProtocolGroup[] {
    if (searchTerm && searchTerm.trim() !== '') {
      var filteredProtocolGroups = JSON.parse(JSON.stringify(this.protocolGroups)); //deep copy
      for (let protocolGroup of filteredProtocolGroups) {
        protocolGroup.protocols = protocolGroup.protocols.filter((protocol) => {
          return (protocol.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)
          || (protocol.id.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)
          || (protocol.assessments &&
            protocol.assessments.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)
          || (protocol.preamble &&
            protocol.preamble.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)
          || (protocol.notes &&
            protocol.notes.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)
          || (protocol.standingOrders.allLevels &&
            protocol.standingOrders.allLevels.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)
          || (protocol.standingOrders.basic &&
            protocol.standingOrders.basic.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)
          || (protocol.standingOrders.intermediate &&
            protocol.standingOrders.intermediate.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)
          || (protocol.standingOrders.paramedic &&
            protocol.standingOrders.paramedic.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
        });
      }
      return filteredProtocolGroups;
    } else {
      return this.protocolGroups;
    }
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
