import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import CssBaseline from '@material-ui/core/CssBaseline'
import ListItem from '@material-ui/core/ListItem'
import { ListItemText, Button } from '@material-ui/core'
import PermIdentityIcon from '@material-ui/icons/PermIdentityOutlined'
import DashboardIcon from '@material-ui/icons/DashboardOutlined'
import CallToActionIcon from '@material-ui/icons/CallToActionOutlined'
import RepositoryList from '../components/RepositoryList'

const drawerWidth = 68

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  paper: {
    background: '#000',
    width: drawerWidth,
    overflow: 'hidden',
    boxShadow: '6px 0px 18px rgba(0, 0, 0, 0.06)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  logoText: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontSize: '11px',
    lineHeight: '15px',
    /* identical to box height */
    textAlign: 'center',
    color: '#F2F2F2'
  },
  logoTextBold: {
    fontWeight: 'bold'
  },
  button: {
    padding: 0,
    minWidth: 0
  },
  icon: {
    color: '#F2F2F2'
  },
  iconRotate: {
    transform: 'rotate(90deg)'
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    backgroundColor: 'white'
  }
}))

export default function MainFrame(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={classes.drawer}
        PaperProps={{ className: classes.paper }}
      >
        <List>
          <ListItem>
            <ListItemText classes={{ primary: clsx(classes.logoText, classes.logoTextBold) }}>
              Git
            </ListItemText>
            <ListItemText classes={{ primary: classes.logoText }}>Wize</ListItemText>
          </ListItem>
          <ListItem>
            <Button className={classes.button}>
              <PermIdentityIcon className={classes.icon} />
            </Button>
          </ListItem>
          <ListItem>
            <Button className={classes.button}>
              <DashboardIcon className={classes.icon} />
            </Button>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <Button className={classes.button} onClick={props.handleLogout}>
              <CallToActionIcon className={clsx(classes.icon, classes.iconRotate)} />
            </Button>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <RepositoryList />
      </main>
    </div>
  )
}
