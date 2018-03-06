import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

const MaterialCard = (props) => {
  return(
  <Card className="material-card">
    <CardHeader
      title={props.title}
      subtitle={props.subtitle}
      actAsExpander={false}
      showExpandableButton={false}
    />
    { props.children }
    <CardText expandable={false}>
    </CardText>
  </Card>
)};

export default MaterialCard;