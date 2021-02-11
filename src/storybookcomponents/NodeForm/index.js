import React from "react";
import "./index.css";

// Used Components
import Input from "../Input";
import Checkbox from "../Checkbox";
import Typography from "../Typography";

const NodeForm = ({ checked, handleCheck, fName, lName, birthDateOrYear, birthPlace, deathDateOrYear, deathPlace, handleChange }) => {
    return (
        <div className={checked  ? "form-main-small" : "form-main-large"}>
            <Input name="fName" placeholder="First Name(s)" value={fName} handleChange={handleChange}/>
            <Input name="lName" placeholder="Last Name(s)" value={lName} handleChange={handleChange}/>
            {
                !checked && <Typography size="size-12" color="blue">Birth</Typography>
            }
            <Input name="birthDateOrYear" placeholder="Birth Date Or Year" value={birthDateOrYear} handleChange={handleChange}/>
            <Input name="birthPlace" placeholder="Birth Place" value={birthPlace} handleChange={handleChange}/>
            {
                !checked &&
                <>
                    <Typography size="size-12" color="blue">Death</Typography>
                    <Input name="deathDateOrYear" placeholder="Death Date Or Year" value={deathDateOrYear} handleChange={handleChange}/>
                    <Input name="deathPlace" placeholder="Death Place" value={deathPlace} handleChange={handleChange}/>
                </>
            }
            <Checkbox title="This person is living" checked={checked} handleCheck={handleCheck} />
        </div>
    )
}

export default NodeForm;