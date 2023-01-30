function Modal(props) {
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={props.onCencel}>
        Cancel
      </button>
      <button className="btn" onClick={props.onCencel}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
