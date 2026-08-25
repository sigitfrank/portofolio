import { ReactElement } from 'react'
import { tickerItems } from '../namespace'

/**
 * The signature band. The track holds the list twice so the -50%
 * translation loops seamlessly; hovering pauses it.
 */
function Ticker(): ReactElement {
  const run = [...tickerItems, ...tickerItems]

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {run.map((item, i) => (
          <span className="ticker__item" key={i}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Ticker
