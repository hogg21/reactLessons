import React from "react";

const Filter = ({ filterText, count, onChange }) => {
    return (
        <div class="filter">
            <span class="filter__count">{count}</span>
            <input type="text" class="filter__input" value={filterText} onChange={onChange} />
        </div>
    );
}
export default Filter;