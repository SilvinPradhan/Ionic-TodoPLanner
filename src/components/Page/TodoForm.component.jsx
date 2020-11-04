import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddBoxIcon from "@material-ui/icons/AddBox";
import "./TodoForm.styles.scss";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: "35ch",
        },
    },
}));

export default function TodoForm(props) {
    const classes = useStyles();

    const [input, setInput] = useState("");

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput("");
    };

    const handleChange = (e) => {
        setInput(e.target.value);
        console.log("change occurred");
        // console.log(e.target.value)
    };

    return (
        <>
            <div>
                <form
                    className={classes.root}
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    <TextField
                        id="filled-secondary"
                        label="Add a Todo for the planner"
                        variant="filled"
                        color="secondary"
                        type="text"
                        value={input}
                        name="text"
                        className="todo-input"
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <Button
                        style={{ padding: "15px 0px" }}
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        <AddBoxIcon />
            Add
          </Button>
                </form>
            </div>
        </>
    );
}
