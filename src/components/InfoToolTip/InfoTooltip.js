import './InfoToolTip.css';

export default function InfoToolTip({ config, onClose, onOverlayClick}) {
  return (
    <section className={`popup popup_type_${config.type} ${config.isOpen ? 'popup_opened' : ''}`} onMouseDown={onOverlayClick}>
    <div className="popup__container" onClick={onClose}>
      <div className={`info-tool-tip info-tool-tip_type_${config.type}`}>
        <p className="info-tool-tip__text">{config.text}</p>
      </div>
    </div>
  </section>
  )
}
