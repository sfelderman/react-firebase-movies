import React from 'react';
import {
    VIEW_ALL,
    VIEW_WATCHED,
    VIEW_UNWATCHED
} from 'actions/filters';

const ViewTag = ({children, tag, viewFilter, updateFilter}) => (
    <div className='col-auto mx-1 mb-3'>
        <button
            className={`btn btn${tag === viewFilter ? '' : '-outline'}-info`}
            onClick={() => updateFilter(tag)}
        >
       {children}
        </button>
</div>
);

const FilterViews = ({updateFilter, viewFilter}) => {
    return (
        <div className='row justify-content-center'>
            <ViewTag
                tag={VIEW_ALL}
                viewFilter={viewFilter}
                updateFilter={updateFilter}
            >
                All
            </ViewTag>
            <ViewTag
                tag={VIEW_WATCHED}
                viewFilter={viewFilter}
                updateFilter={updateFilter}
            >
                Watched
            </ViewTag>
            <ViewTag
                tag={VIEW_UNWATCHED}
                viewFilter={viewFilter}
                updateFilter={updateFilter}
            >
                Unwatched
            </ViewTag>
        </div>
    );
}

export default FilterViews;

