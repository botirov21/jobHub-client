import * as React from 'react';
import { FiltersLeft, FiltersRight, FiltersWrapper, Jobs, JobsText, JobsWrapper } from './allJobsStyle'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <button {...other} >More detail</button>;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(0deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
const BASEURL = "http://localhost:5050/api/v1/";

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState({});

  const handleExpandClick = (id) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [id]: !prevExpanded[id],
    }));
  };


  const [age, setAge] = React.useState('');
  const [allData, setAllData] = React.useState([]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  // Function to fetch all data
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASEURL}jobs/allJobs`);
        const data = await response.json();
        setAllData(data.data);
      } catch (error) {
        console.log("Motor data is wrong:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <JobsWrapper>
      <JobsText>
        <p>
          Find <span style={{ color: "#4348DB" }}>Web3</span> and Crypto jobs for Students and Graduates
        </p>
      </JobsText>
      <FiltersWrapper>
        <FiltersLeft>
          <TextField fullWidth label="Search for jobs.." id="fullWidth" />
        </FiltersLeft>
        <FiltersRight>
          <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
            <InputLabel id="demo-select-small-label">Age</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
            <InputLabel id="demo-select-small-label">Age</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
            <InputLabel id="demo-select-small-label">Age</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </FiltersRight>
      </FiltersWrapper>
      <Jobs>
        {allData.map((data) => (
          <Card key={data.id} sx={{ width: "100%" }}>
            <CardContent sx={{ display: "flex", gap: "50px" }}>
              <p>{data.name}</p>
              <p>New York</p>
              <p>$80k-$120k</p>
              <p>UI/UX Design</p>
              <ExpandMore
                expand={expanded[data.id] || false}
                onClick={() => handleExpandClick(data.id)}
                aria-expanded={expanded[data.id]}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardContent>
            <Collapse in={expanded[data.id]} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>Heat 1/2</Typography>
                <Typography paragraph>Heat oil in</Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with artichokes and
                  minutes more. (Discard any mussels that don&apos;t open.)
                </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then serve.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        ))}
      </Jobs>

    </JobsWrapper>

  );
}