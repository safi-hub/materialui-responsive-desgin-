import { alpha, AppBar, Avatar, Badge, InputBase, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Cancel, Mail, Notifications, Search } from '@material-ui/icons';
import { useState } from 'react';
import avatar from '../pic/avatar.jpg'
const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    },
    logolg: {
        display: "none",
        [theme.breakpoints.up('sm')]: {
            display: "block",
        },
    },
    logosm: {
        display: "block",
        [theme.breakpoints.up('sm')]: {
            display: "none",
        },
    },

    serach: {
        display: "flex",
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: "45%",
        [theme.breakpoints.down('sm')]: {
            display: (props) => (props.open ?"flex" : "none"),
            width:"70%",

        },
    },
    
    ipt: {
        color: "white",
        marginLeft: theme.spacing(1),
    },

close:{
[theme.breakpoints.up("sm")]: {
    display:"none",
},
},
    serachBtn: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display:"none",
        },
    },

    icons: {
        display: (props) => (props.open ?"none" : "flex"),
        alignItems: "center",
    },

    badge: {
        marginRight: theme.spacing(2),
    },

}));

export default function NavBar() {
    const [open,setOpen] = useState(false);
    const classes = useStyles({open});
    return (
        <AppBar position="fixed">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" className={classes.logolg}>SaFi WoRk</Typography>
                <Typography variant="h6" className={classes.logosm}>SaFi</Typography>
                <div className={classes.serach}>
                    <Search />
                    <InputBase placeholder="serach..." className={classes.ipt} />
                    <Cancel className={classes.close} onClick={() => setOpen(false)}/>

                </div>
                <div className={classes.icons}>
                    <Search className={classes.serachBtn}
                    onClick={() => setOpen(true)} />
                    <Badge badgeContent={4} color="secondary" className={classes.badge} >
                        <Mail />
                    </Badge>
                    <Badge badgeContent={3} color="secondary" className={classes.badge}>
                        <Notifications />
                    </Badge>
                    <Avatar alt="Remy Sharp" src={avatar} />
                </div>
            </Toolbar>
        </AppBar>
    );
}

