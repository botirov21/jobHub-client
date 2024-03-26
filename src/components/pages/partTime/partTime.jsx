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
} from "./partTimeStyle";
import Chip from '@mui/joy/Chip';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { Box, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import IconButton from '@mui/joy/IconButton';
import CloseRounded from '@mui/icons-material/CloseRounded';

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

const BASEURL = "https://api-job-offer.isabek.uz/api/v1/jobs/allJobs";

export default function PartTime() {
  const [locationValue, setLocationValue] = React.useState('');
  const [salaryValue, setSalaryValue] = React.useState('');
  const [jobPositionValue, setJobPositionValue] = React.useState('');
  const action = React.useRef(null);
  const [expanded, setExpanded] = React.useState({});
  const [allData, setAllData] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState("");
  const [checkActive, setCheckActive] = React.useState(true);

  // Function to fetch all data
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASEURL}`);
        const data = await response.json();
        const partTimeJobs = data.data.filter(job => job.employmentType  === 'Part-time');
        setFilteredData(partTimeJobs);
        setAllData(data.data);
        const initialExpandedState = {};
        data.data.forEach((item) => {
          initialExpandedState[item._id] = false;
        });
        setExpanded(initialExpandedState);
      } catch (error) {
        console.log(" data is wrong:", error);
      }
    };
    fetchData();
  }, []);

  //Input Search Data
  const handleSearch = (query) => {
    const filtered = allData.filter(
      (data) =>
        data.name.toLowerCase().includes(query.toLowerCase()) ||
        data.corporateType.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  //Filter by Location
  const handleLocationFilter = (location) => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.location === location);
      setFilteredData(checkedBox);
    } else {
      setFilteredData(allData);
    }
    setCheckActive(!checkActive);
  };

  //Filter by Salary
  const handleFilterSalary = (salary) => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.salary === salary);
      setFilteredData(checkedBox);
    } else {
      setFilteredData(allData);
    }
    setCheckActive(!checkActive);
  };

  //Filter by Salary
  const handleFilterJobPositon = (jobPosition) => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.jobPosition === jobPosition);
      setFilteredData(checkedBox);
    } else {
      setFilteredData(allData);
    }
    setCheckActive(!checkActive);
  };

  //Reset Data
  const handleResetAllData = () => {
    setLocationValue(null); // Reset the selected value
    setSalaryValue(null); // Reset the selected value
    setJobPositionValue(null); // Reset the selected value
    setFilteredData(allData); // Reset the filtered data to all data
    setCheckActive(true); // Reset the checkbox state
  };

  //Expand Job Card 
  const handleExpandClick = (_id) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [_id]: !prevExpanded[_id],
    }));
  };

  //Offer uploaded time
  const formatDate = (createdAt) => {
    const data = new Date(createdAt);
    return data.toISOString().split("T")[0];
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
          <Select
            action={action}
            value={locationValue}
            placeholder="Location"
            onChange={(e, newLocationValue) => setLocationValue(newLocationValue)}
            {...(locationValue && {
              // display the button and remove select indicator
              // when user has selected a value
              endDecorator: (
                <IconButton
                  size="sm"
                  variant="plain"
                  color="neutral"
                  onMouseDown={(event) => {
                    // don't open the popup when clicking on this button
                    event.stopPropagation();
                  }}
                  onClick={() => {
                    setLocationValue(null);
                    handleResetAllData();
                    action.current?.focusVisible();
                  }}
                >
                  <CloseRounded />
                </IconButton>
              ),
              indicator: null,
            })}
            sx={{ minWidth: 200 }}
          >
            <Option sx={{ fontFamily: "Outfit", fontWeight: "500" }} onClick={() => handleLocationFilter("South Korea")} value="South Korea">South Korea</Option>
            <Option sx={{ fontFamily: "Outfit", fontWeight: "500" }} onClick={() => handleLocationFilter("United States")} value="United States">United States</Option>
            <Option sx={{ fontFamily: "Outfit", fontWeight: "500" }} onClick={() => handleLocationFilter("England")} value="England">England</Option>
            <Option sx={{ fontFamily: "Outfit", fontWeight: "500" }} onClick={() => handleLocationFilter("Japan")} value="Japan">Japan</Option>
            <Option sx={{ fontFamily: "Outfit", fontWeight: "500" }} onClick={() => handleLocationFilter("Remote")} value="Remote">Remote</Option>
          </Select>
          <Select
            action={action}
            value={salaryValue}
            placeholder="Salary Range"
            onChange={(e, newSalaryValue) => setSalaryValue(newSalaryValue)}
            {...(salaryValue && {
              // display the button and remove select indicator
              // when user has selected a value
              endDecorator: (
                <IconButton
                  size="sm"
                  variant="plain"
                  color="neutral"
                  onMouseDown={(event) => {
                    // don't open the popup when clicking on this button
                    event.stopPropagation();
                  }}
                  onClick={() => {
                    setSalaryValue(null);
                    handleResetAllData();
                    action.current?.focusVisible();
                  }}
                >
                  <CloseRounded />
                </IconButton>
              ),
              indicator: null,
            })}
            sx={{ minWidth: 200 }}
          >
            <Option sx={{ fontFamily: "Outfit", fontWeight: "500" }} onClick={() => handleFilterSalary("$50k-$80k")} value="$50k-$80k">$50k-$80k</Option>
            <Option sx={{ fontFamily: "Outfit", fontWeight: "500" }} onClick={() => handleFilterSalary("$80k-$100k")} value="$80k-$100k">$80k-$100k</Option>
            <Option sx={{ fontFamily: "Outfit", fontWeight: "500" }} onClick={() => handleFilterSalary("$100k-$120k")} value="$100k-$120k">$100k-$120k</Option>
            <Option sx={{ fontFamily: "Outfit", fontWeight: "500" }} onClick={() => handleFilterSalary("$120k-$150k")} value="$120k-$150k">$120k-$150k</Option>
            <Option sx={{ fontFamily: "Outfit", fontWeight: "500" }} onClick={() => handleFilterSalary("$150k-$200k")} value="$150k-$200k">$150k-$200k</Option>
          </Select>
          <Select
            action={action}
            value={jobPositionValue}
            placeholder="Sort By"
            onChange={(e, newJobPositionValue) => setJobPositionValue(newJobPositionValue)}
            {...(jobPositionValue && {
              // display the button and remove select indicator
              // when user has selected a value
              endDecorator: (
                <IconButton
                  size="sm"
                  variant="plain"
                  color="neutral"
                  onMouseDown={(event) => {
                    // don't open the popup when clicking on this button
                    event.stopPropagation();
                  }}
                  onClick={() => {
                    setJobPositionValue(null);
                    handleResetAllData();
                    action.current?.focusVisible();
                  }}
                >
                  <CloseRounded />
                </IconButton>
              ),
              indicator: null,
            })}
            sx={{ minWidth: 200 }}
          >
            <Option style={{ fontFamily: "Outfit", fontWeight: "500" }} onClick={() => handleFilterJobPositon("Developer")} value="Developer">Developer</Option>
            <Option style={{ fontFamily: "Outfit", fontWeight: "500" }} onClick={() => handleFilterJobPositon("Designer")} value="Designer">Designer</Option>
            <Option style={{ fontFamily: "Outfit", fontWeight: "500" }} onClick={() => handleFilterJobPositon("Marketer")} value="Marketer">Marketer</Option>
            <Option style={{ fontFamily: "Outfit", fontWeight: "500" }} onClick={() => handleFilterJobPositon("Manager")} value="Manager">Manager</Option>
          </Select>
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
                  <Box>
                   <p> Offer Uploaded Time</p>
                   <h4>{formatDate(data.createdAt || "No Data")}</h4>
                  </Box>
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
                      <Typography sx={{ margin: "3px", fontFamily: "Montserrat", fontWeight: "bold" }} paragraph>Requirements:</Typography>
                      <ul style={{ marginTop: "3px" }}>
                        {data.responsibilities.split('.').map((responsibility, index) => (
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
