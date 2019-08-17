import React from "react";
import { Card, Button } from "semantic-ui-react";

export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>{type} - {dimension}</Card.Description>
        <Card.Content extra>
          <div className="ui one buttons">
            <Button>
              {residents.length} residents
            </Button>
          </div>
        </Card.Content>
      </Card.Content>
    </Card>
  );
}


