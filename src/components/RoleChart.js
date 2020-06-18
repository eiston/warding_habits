import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { ResponsiveWaffleHtml } from '@nivo/waffle'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = [{
    "id":'TOP',
    "label":'TOP',
    "value":0,
},{
    "id":'JUNGLE',
    "label":'JUNGLE',
    "value":11,
},
{
    "id":'MID',
    "label":'MID',
    "value":9,
},
{
    "id":'ADC',
    "label":'ADC',
    "value":67,
},
{
    "id":'SUPPORT',
    "label":'SUPPORT',
    "value":14,
}]

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
}));


export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card elevation={3}>
        <CardContent style={{ height: 270 }}>
            <Typography component="h5" variant="h5">
              Roles
            </Typography>
            <ResponsiveWaffleHtml
                data={data}
                total={100}
                rows={18}
                columns={14}
                colors={{ scheme: 'set2' }}
                borderColor={{ from: 'color', gamma: [ [ 'darker', 0.3 ] ] }}
                animate={true}
                motionStiffness={90}
                motionDamping={11}
            />
        </CardContent>
      </Card>
    </div>
  );
}