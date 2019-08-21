import React from "react";
import { Card, Button } from "semantic-ui-react";

export default function EpisodeCard({ name, air_date, episode, characters }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{air_date}</Card.Meta>
        <Card.Description>{episode}</Card.Description>
        <Card.Content extra>
          <div className="ui one buttons">
            <Button>
              {characters.length} characters
            </Button>
          </div>
        </Card.Content>
      </Card.Content>
    </Card>
  );
}


