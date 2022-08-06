import logo from '../../Assets/Images/logo.svg';
import article from '../../Assets/Images/article.svg';
import Button from './Sidebar/Button';
import Delimetr from './Delimetr';
import { useState } from 'react';

export default function Sidebar(props) {
    const [activeElement, setActiveElement] = useState(null);
    const clickHandler = (e) => {
        const currentButton = e.current;
        currentButton.classList.add('active')
    }

    return (
        <div className='sidebar'>
            <img className='sidebar__logo' src={logo} alt="" />
            <Button icon={article} TextElement='div' iconOffset='16' className='d-flex align-items-center fragment-padding-left-32 fragment-padding-top-18 fragment-padding-bottom-18'>
                Overview
            </Button>

            <Button icon={article} TextElement='div' iconOffset='18' className='d-flex align-items-center fragment-padding-left-32 fragment-padding-top-18 fragment-padding-bottom-18'>
                Tickets
            </Button>

            <Button icon={article} TextElement='div' iconOffset='18' className='d-flex align-items-center fragment-padding-left-32 fragment-padding-top-18 fragment-padding-bottom-18'>
                Ideas
            </Button>

            <Button icon={article} TextElement='div' iconOffset='18' className='d-flex align-items-center fragment-padding-left-32 fragment-padding-top-18 fragment-padding-bottom-18'>
                Contacts
            </Button>

            <Button icon={article} TextElement='div' iconOffset='18' className='d-flex align-items-center fragment-padding-left-32 fragment-padding-top-18 fragment-padding-bottom-18'>
                Agents
            </Button>

            <Button icon={article} TextElement='div' iconOffset='18' className='d-flex align-items-center fragment-padding-left-32 fragment-padding-top-18 fragment-padding-bottom-18'>
                Articles
            </Button>

            <Delimetr></Delimetr>

            <Button icon={article} TextElement='div' iconOffset='16' className='d-flex align-items-center fragment-padding-left-32 fragment-padding-top-18 fragment-padding-bottom-18'>
                Settings
            </Button>

            <Button icon={article} TextElement='div' iconOffset='16' className='d-flex align-items-center fragment-padding-left-32 fragment-padding-top-18 fragment-padding-bottom-18'>
                Subscription
            </Button>
        </div>
    )
}