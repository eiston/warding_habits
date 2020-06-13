import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& > *': {
      margin: theme.spacing(2),
    },
    '.MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const regions = [
  {
    value: 'br1.api.riotgames.com',
    label: 'BR',
  },
  {
    value: 'eun1.api.riotgames.com',
    label: 'EUN',
  },
  {
    value: 'euw1.api.riotgames.com',
    label: 'EUW',
  },
  {
    value: 'jp1.api.riotgames.com',
    label: 'JP',
  },
  {
    value: 'kr.api.riotgames.com',
    label: 'KR',
  },
  {
    value: 'la1.api.riotgames.com',
    label: 'LA1',
  },
  {
    value: 'la2.api.riotgames.com',
    label: 'LA2',
  },
  {
    value: 'na1.api.riotgames.com',
    label: 'NA',
  },
  {
    value: 'oc1.api.riotgames.com',
    label: 'OC',
  },
  {
    value: 'tr1.api.riotgames.com',
    label: 'TR',
  },
  {
    value: 'ru.api.riotgames.com',
    label: 'RU',
  },
];
function BasicTextFields() {
  const classes = useStyles();
  const [region, setRegion] = React.useState('na1.api.riotgames.com');
  const handleChange = (event) => {
    setRegion(event.target.value);
  };
  return (
    <div className={classes.root}>
      <form noValidate autoComplete="off">
        <Grid container spacing={2}>
        <Grid item xs={3}>
          <TextField id="search_region" label="Region" variant="outlined" 
          onChange={handleChange}
          value={region}
          select
            fullWidth>
            {regions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs>
          <TextField id="search_input" label="Summoner Name" variant="outlined" fullWidth/>
        </Grid>
        </Grid>
      </form>
    </div>

  );
}
export default BasicTextFields