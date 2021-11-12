import React from 'react'
import Typography from '@mui/material/Typography'
import { Button, ButtonGroup } from '@mui/material'

export default function Create() {
  return (
    <div>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      
      >
       This is a note. 
      </Typography>
      <Button type="submit">Submit</Button>
      <Button type="submit" color="secondary" variant="outlined">Submit</Button>

      <ButtonGroup color="secondary" variant='contained'>
        <Button type="submit">One</Button>
        <Button type="submit">Two</Button>
        <Button type="submit">Three</Button>
      </ButtonGroup>
    </div>
  )
}
