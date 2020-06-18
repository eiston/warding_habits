import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 100,
    }
  }));
  
export default function ProfileCard() {
    const classes = useStyles();
 
    return (
      <Card className={classes.root} elevation={3}>
        <CardMedia
          className={classes.cover}
          image={require('../img/ranks/9-1.png')}
          title="Challenger"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              Challenger
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              774 LP
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Win Ratio 53%
            </Typography>
          </CardContent>
        </div>

      </Card>
    );
  }