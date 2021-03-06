import Rating from '@material-ui/lab/Rating';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import React, {useContext, useState} from "react";
import {useHistory, useLocation} from 'react-router-dom';
import {Context} from "../../App";
import logo from "../../resources/big_logo.png";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from "@material-ui/core/Button";

const StyledRating = withStyles({
    iconFilled: {
        color: '#ff6d75',
    },
    iconHover: {
        color: '#ff3d47',
    },
})(Rating);

export default function Preferences() {

    const classes = useStyles();
    const [context] = useContext(Context);
    const location = useLocation();
    const history = useHistory();

    const [state, setState] = useState(location.state)

    function handleChange(name, value) {
        setState({...state, [name]: value})
    }

    return (
        <div className={classes.root}>
            <h1 className={classes.header}> ZAČÍNÁME! </h1>

            <img src={logo} alt="app logo" className={classes.image}/>

            <p className={classes.description}>
                Odpověz nám prosím pomoci ratingu na tyto tři otázky. &#13;&#10; Podle toho budeme schopni ti být co
                nejvíce nápomocni.
            </p>

            <Box component="fieldset" mb={3} borderColor="transparent" className={classes.ratingBox}>
                <Typography className={classes.ratingDescription} component="legend">
                    Jak moc toužíš po adrenalínu
                </Typography>
                <StyledRating
                    name="rating1"
                    defaultValue={2}
                    getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                    precision={0.5}
                    icon={<FavoriteIcon fontSize="inherit"/>}
                    onChange={handleChange}
                    size="large"
                />
            </Box>

            <Box component="fieldset" mb={3} borderColor="transparent" className={classes.ratingBox}>
                <Typography className={classes.ratingDescription} component="legend">
                    Jak moc komfortu očekáváš
                </Typography>
                <StyledRating
                    name="rating2"
                    defaultValue={2}
                    getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                    precision={0.5}
                    icon={<FavoriteIcon fontSize="inherit"/>}
                    onChange={handleChange}
                    size="large"

                />
            </Box>
            <Box component="fieldset" mb={3} borderColor="transparent" className={classes.ratingBox}>
                <Typography className={classes.ratingDescription} component="legend">Jak moc utrácíš peníze</Typography>
                <StyledRating
                    name="rating3"
                    defaultValue={2}
                    getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                    precision={0.5}
                    icon={<FavoriteIcon fontSize="inherit"/>}
                    onChange={handleChange}
                    size="large"
                />
            </Box>
            <Button variant="contained" color="secondary" onClick={() => history.push('/destinations')}>
                HOTOVO
            </Button>
            <p className={classes.info}>
                Tuto konfiguraci budeš schopný pozdej změnit v nastaveních.
            </p>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "center",
        textAlign: 'center',
    },
    ratingBox: {
        textAlign: "center",
    },
    description: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(10),
        fontWeight: "normal",
        fontSize: "large",
    },
    ratingDescription: {
        fontWeight: "bold",
        color: '#818181',
    },
    header: {
        textAlign: "center",
        width: "100%",
        background: '#3cb80c',
        paddingBottom: theme.spacing(2),
        paddingTop: theme.spacing(2),
        color: "white",
        fontWeight: "normal",
        borderBottom: "2px solid darkgrey",
        fontSize: '25px',
        margin: 0,
    },
    info: {
        marginTop: theme.spacing(15),
        fontWeight: "lighter",
    },
    image: {
        maxWidth: '90%',
        margin: '5%'
    },
}));
