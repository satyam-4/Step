import { useState } from "react";
import { NavLink } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import BlockIcon from '@mui/icons-material/Block';
import AlarmIcon from '@mui/icons-material/Alarm';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InsightsIcon from '@mui/icons-material/Insights';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';

const Sidebar = () => {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

    const handleSidebarToggle = () => {
        setIsSidebarExpanded((prev) => !prev);
    };

    return (
        <ul className={`px-5 space-y-3 ${isSidebarExpanded ? 'w-1/5' : 'w-fit'} h-full border-2 border-zinc-100 rounded-lg shadow bg-white`}>
            <li className="flex text-zinc-500 justify-end">
                <button 
                onClick={handleSidebarToggle}
                className="cursor-pointer">
                    {
                        isSidebarExpanded 
                        ? <KeyboardDoubleArrowLeftIcon />
                        : <KeyboardDoubleArrowRightIcon />
                    }
                </button>
            </li>

            <li className="text-white font-semibold rounded-lg">
                <NavLink 
                to={"/app/dashboard"}
                className={({ isActive }) => 
                    isActive
                    ? 'bg-primary px-2 py-2 cursor-pointer w-full h-full flex items-center gap-5 rounded-lg' 
                    : 'px-2 py-2 cursor-pointer flex items-center gap-5 border-2 border-zinc-200 hover:bg-zinc-100 text-zinc-600 font-semibold rounded-lg'
                }>
                    {({ isActive }) => (
                        <>
                            {
                                isActive ? <DashboardIcon /> : <DashboardOutlinedIcon />
                            }
                            <p className={`${isSidebarExpanded ? 'block' : 'hidden'}`}> 
                                Dashboard 
                            </p>
                        </>
                    )}
                </NavLink>
            </li>

            <li className="text-white font-semibold rounded-lg">
                <NavLink 
                to={"/app/set-constraints"}
                className={({ isActive }) => 
                    isActive
                    ? 'bg-primary px-2 py-2 cursor-pointer w-full h-full flex items-center gap-5 rounded-lg' 
                    : 'px-2 py-2 cursor-pointer flex items-center gap-5 border-2 border-zinc-200 hover:bg-zinc-100 text-zinc-600 font-semibold rounded-lg'
                }>
                <BlockIcon />
                <p className={`${isSidebarExpanded ? 'block' : 'hidden'}`}> 
                    Constraints 
                </p>
                </NavLink>
            </li>

            <li className="text-white font-semibold rounded-lg">
                <NavLink 
                to={"/app/schedule"}
                className={({ isActive }) => 
                    isActive
                    ? 'bg-primary px-2 py-2 cursor-pointer w-full h-full flex items-center gap-5 rounded-lg' 
                    : 'px-2 py-2 cursor-pointer flex items-center gap-5 border-2 border-zinc-200 hover:bg-zinc-100 text-zinc-600 font-semibold rounded-lg'
                }>
                    {({ isActive }) => (
                        <>
                            {
                                isActive ? <CalendarMonthIcon /> : <CalendarMonthOutlinedIcon />
                            }
                            <p className={`${isSidebarExpanded ? 'block' : 'hidden'}`}> 
                                Schedule 
                            </p>
                        </>
                    )}
                </NavLink>
            </li>

            <li className="text-white font-semibold rounded-lg">
                <NavLink 
                to={"/app/tasks"}
                className={({ isActive }) => 
                    isActive
                    ? 'bg-primary px-2 py-2 cursor-pointer w-full h-full flex items-center gap-5 rounded-lg' 
                    : 'px-2 py-2 cursor-pointer flex items-center gap-5 border-2 border-zinc-200 hover:bg-zinc-100 text-zinc-600 font-semibold rounded-lg'
                }>
                <TaskAltIcon />
                <p className={`${isSidebarExpanded ? 'block' : 'hidden'}`}> 
                    Tasks 
                </p>
                </NavLink>
            </li>

            <li className="text-white font-semibold rounded-lg">
                <NavLink 
                to={"/app/reminders"}
                className={({ isActive }) => 
                    isActive
                    ? 'bg-primary px-2 py-2 cursor-pointer w-full h-full flex items-center gap-5 rounded-lg' 
                    : 'px-2 py-2 cursor-pointer flex items-center gap-5 border-2 border-zinc-200 hover:bg-zinc-100 text-zinc-600 font-semibold rounded-lg'
                }>
                    {({ isActive }) => (
                        <>
                            {
                                isActive ? <NotificationsIcon /> : <NotificationsOutlinedIcon />
                            }
                            <p className={`${isSidebarExpanded ? 'block' : 'hidden'}`}> 
                                Reminders 
                            </p>
                        </>
                    )}
                </NavLink>
            </li>

            <li className="text-white font-semibold rounded-lg">
                <NavLink 
                to={"/app/focus-mode"}
                className={({ isActive }) => 
                    isActive
                    ? 'bg-primary px-2 py-2 cursor-pointer w-full h-full flex items-center gap-5 rounded-lg' 
                    : 'px-2 py-2 cursor-pointer flex items-center gap-5 border-2 border-zinc-200 hover:bg-zinc-100 text-zinc-600 font-semibold rounded-lg'
                }>
                <AlarmIcon />
                <p className={`${isSidebarExpanded ? 'block' : 'hidden'}`}> 
                    Focus Mode 
                </p>
                </NavLink>
            </li>

            <li className="text-white font-semibold rounded-lg">
                <NavLink 
                to={"/app/insights"}
                className={({ isActive }) => 
                    isActive
                    ? 'bg-primary px-2 py-2 cursor-pointer w-full h-full flex items-center gap-5 rounded-lg' 
                    : 'px-2 py-2 cursor-pointer flex items-center gap-5 border-2 border-zinc-200 hover:bg-zinc-100 text-zinc-600 font-semibold rounded-lg'
                }>
                <InsightsIcon />
                <p className={`${isSidebarExpanded ? 'block' : 'hidden'}`}> 
                    Insights 
                </p>
                </NavLink>
            </li>

            <li className="text-white font-semibold rounded-lg">
                <NavLink 
                to={"/app/sessions"}
                className={({ isActive }) => 
                    isActive
                    ? 'bg-primary px-2 py-2 cursor-pointer w-full h-full flex items-center gap-5 rounded-lg' 
                    : 'px-2 py-2 cursor-pointer flex items-center gap-5 border-2 border-zinc-200 hover:bg-zinc-100 text-zinc-600 font-semibold rounded-lg'
                }>
                <HistoryOutlinedIcon />
                <p className={`${isSidebarExpanded ? 'block' : 'hidden'}`}> 
                    Sessions 
                </p>
                </NavLink>
            </li>

            <li className="text-white font-semibold rounded-lg">
                <NavLink 
                to={"/app/settings"}
                className={({ isActive }) => 
                    isActive
                    ? 'bg-primary px-2 py-2 cursor-pointer w-full h-full flex items-center gap-5 rounded-lg' 
                    : 'px-2 py-2 cursor-pointer flex items-center gap-5 border-2 border-zinc-200 hover:bg-zinc-100 text-zinc-600 font-semibold rounded-lg'
                }>
                    {({ isActive }) => (
                        <>
                            {
                                isActive ? <SettingsIcon /> : <SettingsOutlinedIcon />
                            }
                            <p className={`${isSidebarExpanded ? 'block' : 'hidden'}`}> 
                                Settings 
                            </p>
                        </>
                    )}
                </NavLink>
            </li>
        </ul>
    );
};

export default Sidebar;