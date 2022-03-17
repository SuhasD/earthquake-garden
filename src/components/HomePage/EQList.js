import React from "react";
import useSourceData from "../../hooks/useSourceData";
import Loader from '../common/Loader'
import { Row, Container } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function EQList() {
    let { loading, earthQuakeDetails, setEarthQuakeDetails, sortingDirections, setSortingDirections } = useSourceData();
    const sortData = (
        data,
        sortKey,
        sortingDirection
    ) => {
        data.sort((a, b) => {
            const relevantValueA = a[sortKey];
            const relevantValueB = b[sortKey];
            if (
                sortingDirection === undefined ||
                sortingDirection === 'ASCENDING'
            ) {
                if (relevantValueA < relevantValueB) return -1;
                if (relevantValueA > relevantValueB) return 1;
                return 0;
            } else {
                if (relevantValueA > relevantValueB) return -1;
                if (relevantValueA < relevantValueB) return 1;
                return 0;
            }
        });
    };
    const sortColumn = (sortKey) => {
        console.log(sortKey)
        const newearthQuakeDetails = [
            ...earthQuakeDetails,
        ];

        const currentSortingDirection = sortingDirections[sortKey];
        sortData(newearthQuakeDetails, sortKey, currentSortingDirection);
        const nextSortingDirection = getNextSortingDirection(
            currentSortingDirection
        );

        const newSortingDirections = { ...sortingDirections };
        newSortingDirections[sortKey] = nextSortingDirection;
        earthQuakeDetails = newearthQuakeDetails;

        setEarthQuakeDetails(newearthQuakeDetails);
        setSortingDirections(newSortingDirections);
    };

    const getNextSortingDirection = (sortingDirection) => {
        if (
            sortingDirection === undefined ||
            sortingDirection === 'ASCENDING'
        ) {
            return 'DESCENDING';
        }
        return 'ASCENDING';
    };


    return (
        <Container>
            <Row>
                {loading ? (
                    <Loader />
                ) : (
                    <div>
                        <h1 className="pageTitle">USGS All Earthquakes, Past hour</h1>
                        <Table bordered className="eqListTable">
                            <thead>
                                <tr>
                                    <th onClick={() => { sortColumn('title') }} >Title<span className="sort-by"></span></th>
                                    <th onClick={() => { sortColumn('magnitude') }}>Magnitude<span className="sort-by"></span></th>
                                    <th onClick={() => { sortColumn('time') }}>Time<span className="sort-by"></span></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    earthQuakeDetails.map((event, j) => {
                                        return (
                                            <tr key={j}>
                                                <td>
                                                    <Link to={{
                                                        pathname: `/details/${j}`,
                                                    }}>
                                                        {event.title}
                                                    </Link>
                                                </td>
                                                <td>{event.magnitude}</td>
                                                <td>{event.time}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
                )}
            </Row>
        </Container>
    )
}