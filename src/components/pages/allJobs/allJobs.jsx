import * as React from "react";
import {
  ChipWrapper,
  ExpandMoreWrapper,
  ExpandMoreWrapperMobile,
  FiltersLeft,
  FiltersRight,
  FiltersWrapper,
  ImgWrapper,
  JobImg,
  Jobs,
  JobsText,
  JobsWrapper,
  UploadTimeWrapper,
} from "./allJobsStyle";
import Chip from '@mui/joy/Chip';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import InputLabel from "@mui/material/InputLabel";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <ExpandMoreIcon {...other} />;
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
        </h3>
        <h3>for Students and Graduates</h3>
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
              <CardContent className="resposiveCardContent" sx={{ display: "flex", alignItems: "center" }}>
                <ImgWrapper>
                  <JobImg />
                  <div>
                    <h3 style={{ fontFamily: "Outfit", fontWeight: "400", color: "#4348DB", margin: "0px" }}>{data.name}</h3>
                    <p style={{ fontFamily: "Outfit", fontWeight: "400", margin: "0px" }}>{data.corporateType}</p>
                  </div>
                </ImgWrapper>
                <ChipWrapper>
                  <Chip className="chip" variant="soft" startDecorator={<LocationOnIcon />}>
                    {data.location}
                  </Chip>
                  <Chip className="chip" variant="soft" startDecorator={<LocalAtmIcon />}>
                    {data.salary}
                  </Chip>
                  <Chip className="chip" variant="soft" startDecorator={<WorkOutlineIcon />}>
                    {data.employmentType}
                  </Chip>
                </ChipWrapper>
                <UploadTimeWrapper>
                  <p>124 applicants</p>
                  <h4>3 hours ago</h4>
                  <ExpandMoreWrapperMobile>
                  <ExpandMore
                      expand={expanded[data._id]}
                      onClick={() => handleExpandClick(data._id)}
                      aria-expanded={expanded[data._id]}
                      aria-label="show more"
                    />
                  </ExpandMoreWrapperMobile>

                </UploadTimeWrapper>
                <ExpandMoreWrapper>
                  <ExpandMore
                    expand={expanded[data._id]}
                    onClick={() => handleExpandClick(data._id)}
                    aria-expanded={expanded[data._id]}
                    aria-label="show more"
                  />

                </ExpandMoreWrapper>
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
