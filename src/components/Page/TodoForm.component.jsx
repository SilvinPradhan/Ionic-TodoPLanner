import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '35ch',
        },
    },
}));

export default function TodoForm() {
    const classes = useStyles();

    const [input, setInput] = useState('');

    return (
        <>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    id="filled-secondary"
                    label="Add a Todo for the planner"
                    variant="filled"
                    color="secondary"
                />
            </form>
        </>
    )

}