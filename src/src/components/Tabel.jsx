import { useState,useMemo } from 'react';
import DataTable from 'react-data-table-component';

const FilterComponent = ({ onFilter, onClear, filterText }) => {
    return (
        <div className="input-group mb-3">
            <input 
            type="text" 
            className="form-control" 
            placeholder="Search" 
            aria-label="Search" 
            aria-describedby="basic-addon2"
            onChange={onFilter}
            value={filterText}

        />
            <button className="input-group-text" id="basic-addon2" onClick={onClear}>X</button>
        </div>
    )
}

const Table = ({data,columns}) => {
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const filteredItems = data.filter(
        item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
    );
    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
        );
    }, [filterText, resetPaginationToggle]);

    return (
        <DataTable
            // title="Doctors"
            columns={columns}
            data={filteredItems}
            pagination
            paginationResetDefaultPage={resetPaginationToggle}
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
            selectableRows
            persistTableHead
        />
    );
}
export default Table;