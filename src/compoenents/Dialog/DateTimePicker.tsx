import * as React from "react";
import moment, { Moment } from "moment";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

interface DateTimePickerProps {
  label: string;
  value: string | null;
  onChange: (param: string) => void;
}

export default function DateTimePickerAdapted(props: DateTimePickerProps) {
  const [value, setValue] = React.useState<Moment | null>(moment());

  React.useEffect(() => {
    if (value) {
      props.onChange(value.format("YYYY-MM-DDTHH:mm:ss"));
    }
  }, [value]);

  //   React.useEffect(() => {
  //     if (value?.format() !== props.value) {
  //       setValue(moment(props.value));
  //     }
  //   }, [props.value]);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label={props.label}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
    </LocalizationProvider>
  );
}
