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
import Chip from '@mui/joy/Chip';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import InputLabel from "@mui/material/InputLabel";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
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
        <h3>
          Find <span style={{ color: "#4348DB" }}>Developer</span> and Other jobs
          for Students and Graduates
        </h3>
        <p >Connecting Universities to JobHub</p>
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
            <Card key={data.id} sx={{ width: "100%", borderRadius: "15px", padding: "5px" }}>
              <CardContent sx={{ display: "flex", alignItems: "center" }}>
                <div style={{ display: "flex", flex: "1", gap: "10px" }}>
                  <JobImg />
                  <div>
                    <h3 style={{ fontFamily: "Outfit", fontWeight: "400", color: "#4348DB", margin: "0px" }}>{data.name}</h3>
                    <p style={{ fontFamily: "Outfit", fontWeight: "400", margin: "0px" }}>{data.corporateType}</p>
                  </div>
                </div>
                <div style={{ display: "flex", flex: "1", gap: "20px" }}>
                  <Chip sx={{ fontFamily: "Outfit", fontWeight: "Bold", padding: "5px", borderRadius: "5px", background: "#F6F6F6" }} variant="soft" startDecorator={<LocationOnIcon />}>
                    {data.location}
                  </Chip>
                  <Chip sx={{  fontFamily: "Outfit", fontWeight: "Bold", padding: "5px", borderRadius: "5px", background: "#F6F6F6" }} variant="soft" startDecorator={<LocalAtmIcon />}>
                    {data.salary}
                  </Chip>
                  <Chip sx={{  fontFamily: "Outfit", fontWeight: "Bold", padding: "5px", borderRadius: "5px", background: "#F6F6F6" }} variant="soft" startDecorator={<WorkOutlineIcon />}>
                    {data.employmentType}
                  </Chip>
                </div>
                <div style={{ display: "flex", flex: "1" }}>
                  <ExpandMore
                    onClick={() => handleExpandClick(data._id)}
                    aria-expanded={expanded[data._id]}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </div>
              </CardContent>
              <Collapse in={expanded[data._id]} timeout="auto">
                <CardContent>
                  <Typography sx={{ margin: "3px", fontFamily: "Montserrat", fontWeight: "bold" }} paragraph>About the role:</Typography>
                  <Typography sx={{ fontFamily: "Outfit", fontWeight: 'light' }} paragraph>{data.role}</Typography>
                  {data.responsibilities && (
                    <>
                      <Typography sx={{ margin: "3px", fontFamily: "Montserrat", fontWeight: "bold" }} paragraph>Responsibilities:</Typography>
                      <ul style={{ marginTop: "3px" }}>
                        {data.responsibilities.split(',').map((responsibility, index) => (
                          <li style={{ fontFamily: "Outfit", fontWeight: "300" }} key={index}>{responsibility.trim()}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  <Typography sx={{ margin: "3px", fontFamily: "Montserrat", fontWeight: "bold" }} paragraph>Our ideal candidate:</Typography>
                  <Typography sx={{ fontFamily: "Outfit", fontWeight: 'light' }} paragraph>{data.idealCandidate}</Typography>
                </CardContent>
              </Collapse>
            </Card>
          ))}
      </Jobs>
    </JobsWrapper>
  );
}
