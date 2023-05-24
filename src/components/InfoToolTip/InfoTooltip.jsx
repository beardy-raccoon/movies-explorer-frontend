import './InfoToolTip.css';

export default function InfoToolTip({ config, onClose, onOverlayclick }) {
  return (
    <section className={`popup popup_type_${config.type} ${config.isOpen ? 'popup_opened' : ''}`} onMouseDown={onOverlayclick}>
      <div className="popup__container" onClick={onClose}>
        <div className={`info-tool-tip info-tool-tip_type_${config.type}`}>
          <p className="info-tool-tip__text">{config.text}</p>
          {config.type === 'select' &&
            <button type="button" className="button info-tool-tip__button info-tool-tip__button_confirm" onClick={config.handler}></button>
          }
          <button type="button" className="button info-tool-tip__button info-tool-tip__button_reject" onClick={onClose}></button>
        </div>
      </div>
    </section>
  )
}
