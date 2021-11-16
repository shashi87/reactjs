import React, { useMemo, useEffect } from 'react';
import { useTable, useSortBy, usePagination } from 'react-table'
import { Table } from 'reactstrap';
import ReactPaginate from "react-paginate";

export const BasicTable = props => {
    console.log('props', props)
    const { onSort, tableColumn, tableData, initialState, changePaginate, pageCount: controlledPageCount } = props;
    const columns = useMemo(() => tableColumn, [tableColumn]);
    const data = useMemo(() => tableData, [tableData]);
    const tableInstance = useTable({
        columns,
        data,
        manualSortBy: true,
        manualPagination: true,
        initialState: { ...initialState },
        pageCount: controlledPageCount
    }
        , useSortBy,
        usePagination)
    const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow, canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize, state: { sortBy, pageIndex, pageSize } } = tableInstance;
        const handlePageClick = para => {
            console.log('basic table', para)
        }
    useEffect(() => {
        onSort(sortBy)
        changePaginate({ pageIndex, pageSize })
    }, [onSort, sortBy, pageIndex, pageSize, changePaginate])
    
    return <>
        <Table responsive hover {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup =>
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column, index) =>
                            <th scope="row" key={index} {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render('Header')}
                                <span>
                                    {column.isSorted
                                        ? column.isSortedDesc
                                            ? ' 🔽'
                                            : ' 🔼'
                                        : ''}
                                </span>
                            </th>
                        )}
                    </tr>
                )}
            </thead>
            <tbody {...getTableBodyProps()}>
                {page.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell, index) =>
                                <td key={index} {...cell.getCellProps}>{cell.render('Cell')}</td>
                            )}
                        </tr>
                    )
                })}
            </tbody>
        </Table>
        <ReactPaginate
            previousLabel={"← Previous"}
            nextLabel={"Next →"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            marginPagesDisplayed={4}
            pageRangeDisplayed={5}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
        />
        <div className="pagination">
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                {'<<'}
            </button>{' '}
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                {'<'}
            </button>{' '}
            <button onClick={() => nextPage()} disabled={!canNextPage}>
                {'>'}
            </button>{' '}
            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                {'>>'}
            </button>{' '}
            <span>
                Page{' '}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>{' '}
            </span>
            <span>
                | Go to page:{' '}
                <input
                    type="number"
                    defaultValue={pageIndex + 1}
                    onChange={e => {
                        const page = e.target.value ? Number(e.target.value) - 1 : 0
                        gotoPage(page)
                    }}
                    style={{ width: '100px' }}
                />
            </span>{' '}
            <select
                value={pageSize}
                onChange={e => {
                    setPageSize(Number(e.target.value))
                }}
            >
                {[1, 2, 3, 4, 5].map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                    </option>
                ))}
            </select>
        </div>
    </>

}