import React from 'react'

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ReactPlayer from "react-player";
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));


const videos = [
    {
        title: "Donald Trump",
        artist: "Mac Miller",
        url: "https://www.youtube.com/watch?v=74TFS8r_SMI"
    },
    {
        title: "Around the world",
        artist: "Daft Punk",
        url: "https://www.youtube.com/watch?v=dwDns8x3Jb4"
    }

]

function Bag(props) {
    const classes = useStyles();
    const theme = useTheme();

    const handlePayment = () => {
        props.history.push('/payment')

        window.location.reload();

    }
 
    return (
        <div>

            {videos.map((video, i) =>
                <Card className={classes.root} key={i} id={i}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                {video.name}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {video.artist}
                            </Typography>
                        </CardContent>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image="/static/images/cards/live-from-space.jpg"
                        title="Live from space album cover"
                    />
                </Card>
            )}
            <Button onClick={handlePayment}>Payment</Button>
        </div>
    )
}

export default Bag
