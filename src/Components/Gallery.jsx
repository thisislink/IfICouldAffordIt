import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import teSynth from '../Images/teenage-engineering-op1.jpg';
import niDJController from '../Images/native-instruments-traktor-kontrols2.jpg';

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
    },
    media: {
        height: 140,
    },
});

export default function Gallery() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia className={classes.media} image={teSynth} title="op1 synth" />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            If I could afford it, I'd buy this Teenage Engineering OP-1 synth. Would you?
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Heck yeah!
                            </Button>
                    <Button size="small" color="primary">
                        Hard pass.
                        </Button>
                </CardActions>
            </Card>

            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia className={classes.media} image={niDJController} title="dj controller" />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            If I could afford it, I'd buy this Native Instruments DJ Controller. Would you?
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Heck yeah!
                            </Button>
                    <Button size="small" color="primary">
                        Hard pass.
                            </Button>
                </CardActions>
            </Card>
        </React.Fragment>
    );
}