import * as React from "react";
import { Link } from "react-router-dom";
import { AuthState } from "src/interface/AuthState";

const CloseLink = ({ onCloseClick }: { onCloseClick: Function }) => {
  return (
    <a className="close-link" href="#" onClick={e => onCloseClick(e)}>
      {" "}
      &times;{" "}
    </a>
  );
};

export interface SideNavProps {
  visible: boolean;
  authState: AuthState;
  onClose: Function;
}

export default class SideNav extends React.Component<SideNavProps, any> {

  closeClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    this.props.onClose();
  }

  public render() {
    const { visible, onClose, authState } = this.props;

    return (
      <div
        className={`side-nav ${visible ? "visible" : ""}`}
        onClick={this.closeClick}
      >
      

        <CloseLink onCloseClick={onClose} />
        <Link to="/">Home</Link>
        {authState.authenticated && <Link to="/recent">Recent</Link>}
        {authState.authenticated && <Link to="/admin">Admin</Link>}
      </div>
    );
  }
}
