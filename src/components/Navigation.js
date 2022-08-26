import React from 'react';
import MuiList from '@mui/material/List';
import MuiListItemButton from '@mui/material/ListItemButton';
import MuiListItemText from '@mui/material/ListItemText';
import {styled} from '@mui/material/styles'


function Navigation({setCurrentPage}) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  function handleSelected(index) {
    setSelectedIndex(index)
  }

  const List = styled(MuiList)({
    // selected and (selected + hover) states
    '&& .Mui-selected, && .Mui-selected:hover': {
        backgroundColor: 'white',
        '&, & .MuiListItemIcon-root': {
          color: 'black',
        },
      },
      // hover states
      '& .MuiListItemButton-root:hover': {
        backgroundColor: 'white',
        '&, & .MuiListItemIcon-root': {
          color: 'black',
        },
      },
    color: 'white',
    maxWidth: 'min-content',
    margin: '0 auto'
  });

  const ListItemButton = styled(MuiListItemButton)({
    textAlign:'center',
    margin: '4px 0',
    borderRadius: '4px',
    padding: '2px 8px'
  });

  const ListItemText = styled(MuiListItemText)({
  })

  return (
    <List>
      <ListItemButton href='#about' selected={selectedIndex === 0} onClick={() => {handleSelected(0); setCurrentPage('About')}}>
        <ListItemText primary='About'/>
      </ListItemButton>
      <ListItemButton href='#portfolio' selected={selectedIndex === 1} onClick={() => {handleSelected(1); setCurrentPage('Portfolio')}}>
        <ListItemText primary='Portfolio'/>
      </ListItemButton>
      <ListItemButton href='#resume' selected={selectedIndex === 2} onClick={() => {handleSelected(2); setCurrentPage('Resume')}}>
        <ListItemText primary='Resume'/>
      </ListItemButton>
      <ListItemButton href='#contact' selected={selectedIndex === 3} onClick={() => {handleSelected(3); setCurrentPage('Contact')}}>
        <ListItemText primary='Contact'/>
      </ListItemButton>
    </List>
  )
}

export default Navigation