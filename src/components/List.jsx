import Box from "@mui/material/Box";
import { ListItemText as ListItem } from "@mui/material";
import Button from "@mui/material/Button";


export default function List(props) {
  return (
    <Box sx={{ bgcolor: "background.paper", opacity: [0.9, 0.8, 0.7] }}>
      <ListItem>Activity: {props.activity}</ListItem>
      <ListItem>Accessibility: {props.accessibility}</ListItem>
      <ListItem>Type: {props.type}</ListItem>
      <ListItem>Participants: {props.participants}</ListItem>
      <ListItem>Price: {props.price}</ListItem>
      <ListItem>Link: {props.link}</ListItem>
      <ListItem>Key: {props.keys}</ListItem>
      <Button variant="outlined" onClick={props.btnUpdate}>Update</Button>
      <Button variant="outlined" onClick={props.btnAdd}>Add</Button>
    </Box>
  );
}
