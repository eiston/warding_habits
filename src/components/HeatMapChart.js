import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ReactHeatmap from 'react-heatmap'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  map: {
    height: 400,
    width:400,
    backgroundSize:'400px 400px'
  }
}));


export default () => {
  const classes = useStyles();
  let data = [{ x: 10, y: 15, value: 1}, { x: 50, y: 50, value: 1}, { x: 50, y: 50, value: 1}, { x: 50, y: 50, value: 1}, { x: 50, y: 50, value: 1}];
  return (
    <div className={classes.root}>
      <Card elevation={3}>
        <CardMedia
          className={classes.map}
          image={require('../img/map/map11.png')}
        >
        <ReactHeatmap max={5} data={data}/>
        </CardMedia>
      </Card>
    </div>
  );
}