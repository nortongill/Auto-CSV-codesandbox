import React from "react";
import {render} from "react-dom";
import Styles from "./Styles";
import {Form, Field} from "react-final-form";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import TextField from "material-ui/TextField";
import Select from "react-select";
import country from "./country";
import {Checkbox} from "final-form-material-ui";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";

const TextFieldAdapter = ({input, meta, ...rest}) => (
    <TextField
        {...input}
        {...rest}
        onChange={(event, value) => input.onChange(value)}
        errorText={meta.touched ? meta.error : ""}
    />
);

const ReactSelectAdapter = ({input, ...rest}) => (
    <Select {...input} {...rest} searchable />
);

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
};
const required = value => (value ? undefined : "Required");

const App = () => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Styles>
            <h1>Auto CSV for Carrier BA's</h1>
            <h2>Third Party Components</h2>
            <a href="https://github.com/erikras/react-final-form#-react-final-form">
                Read Docs for react-final-form
            </a>
            <div>
                This example uses{" "}
                <a href="https://github.com/JedWatson/react-select">
                    React Select
                </a>{" "}
                and <a href="http://www.material-ui.com">Material UI</a>.
            </div>
            <Form
                onSubmit={onSubmit}
                render={({
                    handleSubmit,
                    form,
                    submitting,
                    pristine,
                    values
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <Field
                                name="serviceName"
                                component={TextFieldAdapter}
                                validate={required}
                                hintText="Service Name"
                                floatingLabelText="Service Name"
                                initialValue=""
                            />
                        </div>

                        <div className="weekdays">
                            <div>
                                <FormControlLabel
                                    label="Monday"
                                    control={
                                        <Field
                                            name="monday"
                                            component={Checkbox}
                                            initialValue={false}
                                            type="checkbox"
                                        />
                                    }
                                />
                            </div>
                            <div>
                                <FormControlLabel
                                    label="Tuesday"
                                    control={
                                        <Field
                                            name="tuesday"
                                            component={Checkbox}
                                            initialValue={false}
                                            type="checkbox"
                                        />
                                    }
                                />
                            </div>
                            <div>
                                <FormControlLabel
                                    label="Wednesday"
                                    control={
                                        <Field
                                            name="wednesday"
                                            component={Checkbox}
                                            initialValue={false}
                                            type="checkbox"
                                        />
                                    }
                                />
                            </div>
                            <div>
                                <FormControlLabel
                                    label="Thursday"
                                    control={
                                        <Field
                                            name="thursday"
                                            component={Checkbox}
                                            initialValue={false}
                                            type="checkbox"
                                        />
                                    }
                                />
                            </div>
                            <div>
                                <FormControlLabel
                                    label="Friday"
                                    control={
                                        <Field
                                            name="friday"
                                            component={Checkbox}
                                            initialValue={false}
                                            type="checkbox"
                                        />
                                    }
                                />
                            </div>
                            <div>
                                <FormControlLabel
                                    label="Saturday"
                                    control={
                                        <Field
                                            name="saturday"
                                            component={Checkbox}
                                            initialValue={false}
                                            type="checkbox"
                                        />
                                    }
                                />
                            </div>
                            <div>
                                <FormControlLabel
                                    label="Sunday"
                                    control={
                                        <Field
                                            name="sunday"
                                            component={Checkbox}
                                            initialValue={false}
                                            type="checkbox"
                                        />
                                    }
                                />
                            </div>
                        </div>
                        <div className="countries">
                            <Field
                                name="country"
                                placeholder="Select Countries"
                                isMulti={true}
                                component={ReactSelectAdapter}
                                options={country}
                            />
                        </div>
                        <div className="buttons">
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                disabled={submitting}
                            >
                                Submit
                            </Button>
                            <Button
                                variant="contained"
                                onClick={form.reset}
                                disabled={submitting || pristine}
                            >
                                Reset
                            </Button>
                        </div>
                        <pre>{JSON.stringify(values, 0, 2)}</pre>
                    </form>
                )}
            />
        </Styles>
    </MuiThemeProvider>
);

render(<App />, document.getElementById("root"));
