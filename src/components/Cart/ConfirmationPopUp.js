import React from "react";
import PropTypes from "prop-types";

const ConfirmationPopUp = ({
  onCancel = null,
  onConfirm = null,
  show = false
}) => {
  return show ? (
    <>
      <div className="box">
        <div>Please confirm your deletion</div>
        <div className="btn-box">
          <button
            onClick={() => typeof onConfirm === "function" && onConfirm()}
          >
            confirm
          </button>
          <button onClick={() => typeof onCancel === "function" && onCancel()}>
            cancel
          </button>
        </div>
      </div>
      <style>{`
        .box {
          background: #fff;
          border: 1px solid grey;
          display: flex;
          height: fit-content;
          flex-direction: column;
          align-items: center;
          padding: 0.4rem 0.4rem 0.3rem 0.4rem;
          border-radius: 0.3rem;
        }
        .btn-box {
          display: flex;
          justify-content: space-evenly;
          margin-top: 0.5rem;
          width: 100%;
        }
      `}</style>
    </>
  ) : null;
};

ConfirmationPopUp.propTypes = {
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  show: PropTypes.bool
};

export default ConfirmationPopUp;
