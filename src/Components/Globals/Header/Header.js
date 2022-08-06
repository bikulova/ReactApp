import Row from "../grid/Row";
import Column from "../grid/Column";
import Search from "./Search";
import Bell from "./Bell";

export default function Header(props) {
    return (
        <div className='header'>
            <Row className='d-flex align-items-center justify-content-between'>
                <Column span="2">
                    <div>Overview</div>
                </Column>
                <Column className='d-flex justify-content-end' span="6">
                    <Search></Search>
                    <Bell></Bell>
                </Column>
            </Row>
        </div>
    )
}