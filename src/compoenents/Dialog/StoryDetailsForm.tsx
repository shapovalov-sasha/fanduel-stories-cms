import * as React from "react";
import DateTimePicker from "./DateTimePicker";
import TagSelector from "./TagSelector";
import {
  InputLabel,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setFormDetails } from "../../store/app/app.slice";

const categories = [
  {
    value: 0,
    label: "Sport",
  },
  {
    value: 1,
    label: "Promo",
  },
  {
    value: 2,
    label: "Sport",
  },
];

export default function StoryDetailsForm() {
  const [storyDetails, setStoryDetails] = React.useState({
    title: "",
    contentUrl: "",
    contentType: 0,
    tags: [] as string[],
    displayBefore: "",
    displayAfter: "",
  });
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setFormDetails(storyDetails));
  }, [storyDetails]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStoryDetails((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onStartDateChange = (date: any) => {
    console.log({ date });
    setStoryDetails((prev) => ({
      ...prev,
      displayAfter: date,
    }));
  };

  const onEndDateChange = (date: any) => {
    console.log({ date });
    setStoryDetails((prev) => ({
      ...prev,
      displayBefore: date,
    }));
  };

  const onTagListChange = (values: string[]) => {
    setStoryDetails((prev) => ({
      ...prev,
      tags: values,
    }));
  };

  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
        Story Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id='title'
            name='title'
            label='Title'
            value={storyDetails.title}
            fullWidth
            autoComplete='title'
            variant='standard'
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id='betting'
            name='contentUrl'
            value={storyDetails.contentUrl}
            label='Betting URL'
            fullWidth
            variant='standard'
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <InputLabel id='category-label'>Category</InputLabel>
          <Select
            sx={{ width: "100%" }}
            labelId='category-label'
            id='category-select'
            value={storyDetails.contentType}
            label='Category'
            name='contentType'
            onChange={handleChange as any}>
            {categories.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12}>
          <TagSelector onChange={onTagListChange} />
        </Grid>
        <Grid item xs={6}>
          <DateTimePicker
            value={storyDetails.displayAfter}
            onChange={onStartDateChange}
            label='Starting from'
          />
        </Grid>
        <Grid item xs={6}>
          <DateTimePicker
            value={storyDetails.displayBefore}
            onChange={onEndDateChange}
            label='Ending on'
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color='secondary' name='saveAddress' value='yes' />
            }
            label='Agree terms'
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
