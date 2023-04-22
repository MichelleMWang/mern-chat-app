import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles.css';
import logo from '../assets/leap-logo.svg';
import { ChatState } from '../../Context/ChatProvider';

const SideBar = () => {
    const [stepHeight, setStepHeight] = useState(0); 
    const [activeIndex, setActiveIndex] = useState(); 
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();
    const { user } = ChatState();
    const [indicatorLoading, setIndicatorLoading] = useState(false);
    const [items, setItems] = useState([]); 
  
    useEffect(() => {
      if (user) {
          const userType = user.role; 
          if (userType === 'student') {
              setItems([
                  {
                      display: 'Dashboard',
                      icon: <i className='bx bx-home'></i>,
                      to: '/dashboard',
                      section: 'dashboard'
                  },
                  {
                      display: 'Tutors',
                      icon: <i className='bx bx-group'></i>,
                      to: '/students',
                      section: 'students'
                  },
                  {
                      display: 'Calendar',
                      icon: <i className='bx bx-calendar'></i>,
                      to: '/calendar',
                      section: 'calendar'
                  },
                  {
                      display: 'Messages',
                      icon: <i className='bx bx-message-alt-detail'></i>,
                      to: '/chats',
                      section: 'chats'
                  },
                  {
                      display: 'Settings',
                      icon: <i className='bx bx-cog'></i>,
                      to: '/settings',
                      section: 'settings'
                  },
              ])
            } else if (userType === 'tutor') {
              setItems([
                  {
                      display: 'Dashboard',
                      icon: <i className='bx bx-home'></i>,
                      to: '/dashboard',
                      section: 'dashboard'
                  },
                  {
                      display: 'Students',
                      icon: <i className='bx bx-group'></i>,
                      to: '/students',
                      section: 'students'
                  },
                  {
                      display: 'Calendar',
                      icon: <i className='bx bx-calendar'></i>,
                      to: '/calendar',
                      section: 'calendar'
                  },
                  {
                      display: 'Messages',
                      icon: <i className='bx bx-message-alt-detail'></i>,
                      to: '/chats',
                      section: 'chats'
                  },
                  {
                      display: 'Settings',
                      icon: <i className='bx bx-cog'></i>,
                      to: '/settings',
                      section: 'settings'
                  },
              ]); 
            } else if (userType === 'tutor applicant') {
              setItems([
                  {
                      display: 'Dashboard',
                      icon: <i className='bx bx-home'></i>,
                      to: '/dashboard',
                      section: 'dashboard'
                  },
                  {
                      display: 'Calendar',
                      icon: <i className='bx bx-calendar'></i>,
                      to: '/calendar',
                      section: 'calendar'
                  },
                  {
                      display: 'Messages',
                      icon: <i className='bx bx-message-alt-detail'></i>,
                      to: '/chats',
                      section: 'chats'
                  },
                  {
                      display: 'Settings',
                      icon: <i className='bx bx-cog'></i>,
                      to: '/settings',
                      section: 'settings'
                  },
              ]); 
            } else if (userType === 'admin') {
              setItems([
                  {
                      display: 'Dashboard',
                      icon: <i className='bx bx-home'></i>,
                      to: '/dashboard',
                      section: 'dashboard'
                  },
                  {
                    display: 'Applications',
                    icon: <i className='bx bx-group'></i>,
                    to: '/applications',
                    section: 'applications'
                  },
                  {
                      display: 'Students',
                      icon: <i className='bx bx-group'></i>,
                      to: '/students',
                      section: 'students'
                  },
                  {
                      display: 'Calendar',
                      icon: <i className='bx bx-calendar'></i>,
                      to: '/calendar',
                      section: 'calendar'
                  },
                  {
                      display: 'Messages',
                      icon: <i className='bx bx-message-alt-detail'></i>,
                      to: '/chats',
                      section: 'chats'
                  },
                  {
                      display: 'Settings',
                      icon: <i className='bx bx-cog'></i>,
                      to: '/settings',
                      section: 'settings'
                  },
              ]); 
            } else {
              console.log("incorrect user type of: " + userType); 
              setItems([
                  {
                      display: 'Dashboard',
                      icon: <i className='bx bx-home'></i>,
                      to: '/dashboard',
                      section: 'dashboard'
                  }
              ]); 
            }         
      }
    }, [user]);

    useEffect(() => {
        if (user) {
            const userType = user.role; 
            if (userType === 'student') {
                setItems([
                    {
                        display: 'Dashboard',
                        icon: <i className='bx bx-home'></i>,
                        to: '/dashboard',
                        section: 'dashboard'
                    },
                    {
                        display: 'Tutors',
                        icon: <i className='bx bx-group'></i>,
                        to: '/students',
                        section: 'students'
                    },
                    {
                        display: 'Calendar',
                        icon: <i className='bx bx-calendar'></i>,
                        to: '/calendar',
                        section: 'calendar'
                    },
                    {
                        display: 'Messages',
                        icon: <i className='bx bx-message-alt-detail'></i>,
                        to: '/chats',
                        section: 'chats'
                    },
                    {
                        display: 'Settings',
                        icon: <i className='bx bx-cog'></i>,
                        to: '/settings',
                        section: 'settings'
                    },
                ])
              } else if (userType === 'tutor') {
                setItems([
                    {
                        display: 'Dashboard',
                        icon: <i className='bx bx-home'></i>,
                        to: '/dashboard',
                        section: 'dashboard'
                    },
                    {
                        display: 'Students',
                        icon: <i className='bx bx-group'></i>,
                        to: '/students',
                        section: 'students'
                    },
                    {
                        display: 'Calendar',
                        icon: <i className='bx bx-calendar'></i>,
                        to: '/calendar',
                        section: 'calendar'
                    },
                    {
                        display: 'Messages',
                        icon: <i className='bx bx-message-alt-detail'></i>,
                        to: '/chats',
                        section: 'chats'
                    },
                    {
                        display: 'Settings',
                        icon: <i className='bx bx-cog'></i>,
                        to: '/settings',
                        section: 'settings'
                    },
                ]); 
              } else if (userType === 'tutor applicant') {
                setItems([
                    {
                        display: 'Dashboard',
                        icon: <i className='bx bx-home'></i>,
                        to: '/dashboard',
                        section: 'dashboard'
                    },
                    {
                        display: 'Calendar',
                        icon: <i className='bx bx-calendar'></i>,
                        to: '/calendar',
                        section: 'calendar'
                    },
                    {
                        display: 'Messages',
                        icon: <i className='bx bx-message-alt-detail'></i>,
                        to: '/chats',
                        section: 'chats'
                    },
                    {
                        display: 'Settings',
                        icon: <i className='bx bx-cog'></i>,
                        to: '/settings',
                        section: 'settings'
                    },
                ]); 
              } else if (userType === 'admin') {
                setItems([
                    {
                        display: 'Dashboard',
                        icon: <i className='bx bx-home'></i>,
                        to: '/dashboard',
                        section: 'dashboard'
                    },
                    {
                      display: 'Applications',
                      icon: <i className='bx bx-group'></i>,
                      to: '/applications',
                      section: 'applications'
                    },
                    {
                        display: 'Students',
                        icon: <i className='bx bx-group'></i>,
                        to: '/students',
                        section: 'students'
                    },
                    {
                        display: 'Calendar',
                        icon: <i className='bx bx-calendar'></i>,
                        to: '/calendar',
                        section: 'calendar'
                    },
                    {
                        display: 'Messages',
                        icon: <i className='bx bx-message-alt-detail'></i>,
                        to: '/chats',
                        section: 'chats'
                    },
                    {
                        display: 'Settings',
                        icon: <i className='bx bx-cog'></i>,
                        to: '/settings',
                        section: 'settings'
                    },
                ]); 
              } else {
                console.log("incorrect user type of: " + userType); 
                setItems([
                    {
                        display: 'Dashboard',
                        icon: <i className='bx bx-home'></i>,
                        to: '/dashboard',
                        section: 'dashboard'
                    }
                ]); 
              }         
        }
      }, [user]);

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            //console.log(indicatorRef); 
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
            setIndicatorLoading(false); 
        }, 100);
        
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = items.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location, items]);
    
         
    return (<div className='sidebar'>
        <div className="sidebar__logo">
            <img src={logo} alt="leap logo"></img>
        </div>
        <div ref={sidebarRef} className="sidebar__menu">
            {!indicatorLoading && <div
                ref={indicatorRef}
                className="sidebar__menu__indicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }} 
            ></div> } 
            {
                items.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar__menu__item__icon">
                                {item.icon}
                            </div>
                            <div className="sidebar__menu__item__text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>);
};

export default SideBar;