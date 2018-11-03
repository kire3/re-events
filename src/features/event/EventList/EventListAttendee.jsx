import React, { Component } from "react";
import { List, Image } from "semantic-ui-react";

class EventListAttendee extends Component {
  render() {
    return (
      <List.item>
        <Image
          as="a"
          size="mini"
          circular
          src="https://randommuser.me/api/portraits/women/42.jpg"
        />
      </List.item>
    );
  }
}

export default EventListAttendee;
