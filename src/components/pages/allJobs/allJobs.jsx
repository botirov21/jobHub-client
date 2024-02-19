import * as React from "react";
import {
  CardData,
  FiltersLeft,
  FiltersRight,
  FiltersWrapper,
  JobImg,
  Jobs,
  JobsText,
  JobsWrapper,
} from "./allJobsStyle";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <Button variant="contained" {...other}>More detail</Button>;
  // const { expand, ...other } = props;
  // return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const BASEURL = "http://localhost:5050/api/v1/";

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState({});
  const [age, setAge] = React.useState("");
  const [allData, setAllData] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [filteredData, setFilteredData] = React.useState("");

  const handleExpandClick = (_id) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [_id]: !prevExpanded[_id],
    }));
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  // Function to fetch all data
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASEURL}jobs/allJobs`);
        const data = await response.json();
        setFilteredData(data.data);
        setAllData(data.data);
        const initialExpandedState = {};
        data.data.forEach((item) => {
          initialExpandedState[item._id] = false;
        });
        setExpanded(initialExpandedState);
      } catch (error) {
        console.log("Motor data is wrong:", error);
      }
    };
    fetchData();
  }, []);
  console.log(allData);

  const handleSearch = (query) => {
    setSearch(query);
    const filtered = allData.filter(
      (data) =>
        data.name.toLowerCase().includes(query.toLowerCase()) ||
        data.corporateType.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };
  return (
    <JobsWrapper>
      <JobsText>
        <p>
          Find <span style={{ color: "#4348DB" }}>Web3</span> and Crypto jobs
          for Students and Graduates
        </p>
      </JobsText>
      <FiltersWrapper>
        <FiltersLeft>
          <TextField fullWidth label="Search for jobs.." id="fullWidth" onChange={(e) => handleSearch(e.target.value)} />
        </FiltersLeft>
        <FiltersRight>
          {[1, 2, 3].map((index) => (
            <FormControl key={index} sx={{ m: 1, minWidth: 200 }} size="small">
              <InputLabel id={`demo-select-small-label-${index}`}>
                Age
              </InputLabel>
              <Select
                labelId={`demo-select-small-label-${index}`}
                id={`demo-select-small-${index}`}
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
          ))}
        </FiltersRight>
      </FiltersWrapper>
      <Jobs>
      {filteredData &&
              filteredData.map((data) => (
          <Card  key={data.id} sx={{ width: "100%", borderRadius: "15px"}}>
            <CardContent sx={{ display: "flex", gap: "50px" }}>
              <JobImg/>
                <p style={{border: "solid 1px black"}}>{data.name}</p>
                <p>{data.corporateType}</p>
                <p>{data.location}</p>
              <p>{data.salary}</p>
              <p>UI/UX Design</p>
              <ExpandMore
                onClick={() => handleExpandClick(data._id)}
                aria-expanded={expanded[data._id]}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardContent>
            <Collapse in={expanded[data._id]} timeout="auto">
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>Heat 1/2</Typography>
                <Typography paragraph>Heat oil in</Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with
                  artichokes and minutes more. (Discard any mussels that
                  don&apos;t open.)
                </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then
                  serve.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        ))}
      </Jobs>
    </JobsWrapper>
  );
}
