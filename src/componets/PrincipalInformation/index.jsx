import { Typography, Stack } from "@mui/material";
import React, { Fragment } from "react";

const PrincipalInformation = (props) => {
  const { userState } = props;
  const { 
    name,
    login,
    created_at,
   } = userState;

   return(
     <Fragment>
        <Stack direction="row" sx={{justifyContent: 'space-between'}} >
          <Typography variant="h4" >{name}</Typography>
          <Typography variant="subtitle2" >{created_at}</Typography>
       </Stack>
      <Typography variant="caption">{`@${login}`}</Typography>
     </Fragment>
   )
 }

export default PrincipalInformation;