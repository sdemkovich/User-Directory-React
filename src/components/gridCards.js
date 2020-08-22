import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "./useStyles"
import Avatar from "@material-ui/core/Avatar";

const classes = useStyles;

function gridCards(props) {

    return (
    <div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {props && props.results && props.results.map((card, i) => (
              <Grid item key={i} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                  <Avatar alt="Profile image" src={card.picture.large} />
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name.first} {card.name.last}
                    </Typography>
                    <Typography>
                      Email: {card.email}
                    </Typography>
                    <Typography>
                      Phone: {card.phone}
                    </Typography>
                    <Typography>
                      Age: {card.dob.age}
                    </Typography>
                  </CardContent>
                  <CardActions>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    </div>
    )
}

export default gridCards;