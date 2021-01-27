import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';
import logo2 from './logov2.png';

function Sidebar() {

    const [{ playlists }, dispatch] = useDataLayerValue();

    return (
        <div className="sidebar">
            <div className="sidebar__heading">
                <img
                    className="sidebar__logo"
                    src={logo2}
                    alt=""
                />
            </div>
            <br />
            <strong className="sidebar__title">NOTE: You must launch spotify before starting this application and it must be running in the background!</strong>
            <hr />
            {/* Commenting out as functionality has not yet been implemented -
            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />

            {playlists?.items?.map(playlist => (
                <SidebarOption title={playlist.name} />
            ))}

            */}
        </div>
    )
}

export default Sidebar;
