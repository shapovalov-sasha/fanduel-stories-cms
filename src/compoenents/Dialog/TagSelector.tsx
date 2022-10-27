import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const tags = [
  "Sport",
  "NBA",
  "NFL",
  "Racing",
  "Tip of the day",
  "Best Bet",
  "Super Bowl",
  "Bonus",
  "Responsible Gambling",
  "Soccer",
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

interface TagSelectorProps {
  initialValues?: string[];
  onChange: (values: string[]) => void;
}

export default function TagSelector(props: TagSelectorProps) {
  const theme = useTheme();
  const [tag, setTag] = React.useState<string[]>([]);

  React.useEffect(() => {
    props.onChange(tag);
  }, [tag]);

  const handleChange = (event: SelectChangeEvent<typeof tag>) => {
    const {
      target: { value },
    } = event;
    setTag(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ width: "100%" }}>
        <InputLabel id='demo-multiple-chip-label'>Tags</InputLabel>
        <Select
          labelId='demo-multiple-chip-label'
          id='demo-multiple-chip'
          multiple
          value={tag}
          onChange={handleChange}
          input={<OutlinedInput id='select-multiple-chip' label='Chip' />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  color='primary'
                  variant='outlined'
                  size='small'
                />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}>
          {tags.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, tag, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
