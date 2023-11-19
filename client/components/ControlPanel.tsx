import { useState, useEffect } from 'react'

export default function ControlPanelProps() {
  return (
    <div className="button">
      <button>
        <img src="./img/meat.gif" alt="Feed Meat" />
      </button>
      <button>
        <img src="./img/broccoli.gif" alt="Feed Broccoli" />
      </button>
      <button>
        <img src="./img/petting.gif" alt="Petting" />
      </button>
      <button>
        <img src="./img/scolding.png" alt="Scolding" />
      </button>
    </div>
  )
}
