import React from "react";
import classnames from "classnames";
import map from "lodash/map";

const OptionFieldGroup = ({name, value, label, error, onChange, options}) => {
    const opts = map(options, (val, key) => (
        <option value={val} key={val}>
            {key}
        </option>
    ));
    return (
        <div className={classnames("form-group", {"has-error": error})}>
            <label className="control-label">{label}</label>
            <select
                className="form-control"
                name={name}
                value={value}
                onChange={onChange}
            >
                <option value="">
                    All {label}
                </option>
                {opts}
            </select>
            {error && <span className="help-block">{error}</span>}
        </div>
    );
};

export default OptionFieldGroup;
