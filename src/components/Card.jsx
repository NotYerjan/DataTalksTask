import { useEffect, useRef, useState } from "react";
import CopyIcon from "../icons/CopyIcon";
import DeleteIcon from "../icons/DeleteIcon";
import MoreVerticalIcon from "../icons/MoreVerticalIcon";
import "./card.css";

export default function Card({ content }) {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const ref = useRef(null);

  const handleClosePopover = () => {
    setIsPopoverVisible(false);
  };

  const handleMoreBtn = () => {
    setIsPopoverVisible((prev) => !prev);
  };

  const handleDeleteBtn = () => {
    handleClosePopover();
    alert("You have deleted the card!");
  };
  const handleCopyBtn = () => {
    handleClosePopover();
    alert("You have duplicated the card!");
  };
  const handleDismissBtn = () => {
    alert("You have dismissed the card!");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        isPopoverVisible && handleClosePopover();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [isPopoverVisible]);

  return (
    <article className="card">
      <header>
        <h3 className="card-title">{content.title}</h3>
        <div className="card-header-actions">
          <div className="btn btn-more" onClick={handleMoreBtn}>
            <MoreVerticalIcon />
          </div>
          <div
            ref={ref}
            className="actions-popover"
            style={{ display: isPopoverVisible ? "flex" : "none" }}
          >
            <button className="btn btn-header-action" onClick={handleDeleteBtn}>
              <DeleteIcon />
              Delete card
            </button>
            <hr />
            <button className="btn btn-header-action" onClick={handleCopyBtn}>
              <CopyIcon />
              Duplicate card
            </button>
          </div>
        </div>
      </header>
      <main>
        <div className="card-image">
          <img src={content.imgSrc} alt="card image" />
        </div>

        <p className="card-description">{content.description}</p>
      </main>
      <div className="card-footer-actions">
        <button className="btn btn-dismiss" onClick={handleDismissBtn}>
          Dismiss
        </button>
      </div>
    </article>
  );
}
